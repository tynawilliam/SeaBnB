'use strict';

const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        // save, update, create
        len: {
          args: [1, 50],
          msg: "Name must be between 1 and 50 characters.",
        },
      },
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: true,
      validate: {
        // save, update, create
        len: {
          args: [10, 13],
          msg: "Phone number must be between 10 and 13 digits.",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
    },
    tokenId: {
      type: DataTypes.STRING(36)
    }
  }, {
    defaultScope: {
      attributes: {
        exclude: ["hashedPassword", "email", "createdAt", "updatedAt"]
      },
    },
    scopes: {
      currentUser: {
        attributes: { exclude: ["hashedPassword"] }
      },
      loginUser: {
        attributes: {},
      }
    }
  });
  User.associate = function(models) {
    User.hasMany(models.Booking, { foreignKey: "userId" });
  };

  User.prototype.toSafeObject = function(){
    const {
      id,
      name
    } = this;
    return { id, name };
  };

  User.prototype.validatePassword = function(password) {
    return bcrypt.compareSync (password, this.hashedPassword.toString());
  };

  User.getCurrentUserById = async function(id) {
    return await User.scope("currentUser").findByPk(id);
  };

  User.login = async function ({ email, password }) {
    const user = await User.scope('loginUser').findOne({
      where: {
        email,
      }
    });
    if(user && user.validatePassword(password)) {
      return await User.getCurrentUserById(user.id);
    }
  };

  User.signup = async function ({ name, city, phone, email, password}) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      name,
      city,
      phone,
      email,
      hashedPassword
    });
    return await User.getCurrentUserById(user.id);
  };

  return User;
};
