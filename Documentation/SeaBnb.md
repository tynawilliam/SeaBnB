# Features

## Home Page
### User Story:
As a visitor, I want to be able to view featured boats and search for available boats in a specified city for specific dates

### Goals
#### Acceptance critera
- [ ] Visitor can visit the homepage `/` to view featured boats and search for boats by city and availability
#### Stretch goals
- [ ] slideshow with featured boats

## Sign in page
### User Story:
As a registered user, I want to be able to log in.

### Goals
#### Acceptance critera
- [ ] User can visit the `/signin` route to sign in using email and password
- [ ] If a user enters an invalid email / password, they receive a prompt saying that login data was invalid and are prompted to try again
- [ ] After user enters a valid email and password they are redirected to the homepage
- [ ] Page refresh will maintain the user's session
- [ ] User can log out to end the session

## Sign up page
### User Story:
As a new user, I want to be able to create a SeaBnB account.

### Goals
#### Acceptance critera
- [ ] User can visit the `/signup` route to complete sign up form with the following fields: name, city, phone, email, password, confirm password
- [ ] After user enters a valid name, a valid email address that isn't already in the database, a valid city, a valid phone number and a valid password, a new account is created for them
- [ ] If user provides invalid data or does not fill a required form field, user will receive a message stating why the form submission failed, and asked to try again. 
- [ ] When a new account is created, user is redirected to homepage `/`


## View available boats in various cities & availability
### User Story:
As a visitor to the website, I should be able to view all of of the boats available in a city that I have selected from the search list (for specified dates).

### Goals
#### Acceptance criteria
- [ ] Visitors can search available boats on the homepage `/` route
- [ ] There is a dropdown list of cities where the service is available
- [ ] User will be redirected to `/boats/city` where each boat listing has the boat name, boat type, desciption, price and host name displayed
- [ ] Each boat listing in the list has a button that takes you to its individual boat details page `/boat/details`

#### Stretch goals
- [ ] Map of city to show distance from available boats
- [ ] Clicking on a boat also displays a list of boats available in the same city with a similar price range


## Book a boat
### User Story:
As a user I want to be able to view summary of boat details, book a boat and have access to my booking details

### Goals
#### Acceptance criteria
- [ ] Display summary of boat being booked (`/boat/book`)
- [ ] Create booking form 
  - [ ] Number of individuals using boat
  - [ ] Dates for booking
- [ ] Post booking form values using submit button
- [ ] Redirect user to their bookings page after their booking is complete(`/profile/:id/bookings`)

#### Stretch goals
- [ ] Accept user payment information
- [ ] Special requests to host

## View Boat details, view and add review
### User Story:
As a user, I want to be able to be leave reviews on boats I have booked in the past, as a visitor to the site, I want to be able to view boat details and reviews

### Goals
#### Acceptance criteria
- [ ] Create boat details page (`/boat/details`) to view details about a particular boat 
- boat Details from database
    - [ ] Boat name 
    - [ ] Boat type
    - [ ] Boat description
    - [ ] Host name
    - [ ] city
    - [ ] available dates
    - [ ] Boat nightly rate
- Post review 
  - [ ] Fill out and post a review form 
 - Check availabilty
   - [ ] Check out the boat's availability
   - [ ] Book now button displays if selected dates are available. Takes user to `/boat/book`.
#### Stretch goals
- [ ] Allow only users who have booked boat to leave a review
- [ ] Edit review
- [ ] Delete review

## User profile page
### User Story:
As a user, I want to be able to view the profile details I signed up with, including: my name, email, phone number, city and current reservations
### Goals
#### Acceptance criteria
- [ ] The `/profile/:id` allows user to view all account information, past and upcoming reservations
- [ ] Profile page greets user with full name
- [ ] Profile page contains tiles with user's personal information, login & security, and bookings
- [ ] personal information tile contains full name, email, phone number, city
- [ ] login & security tile contains sign in email and the option to change password
- [ ] bookings tile contains all upcoming bookings as well as booking history

#### Stretch goals
- [ ] User profile picture
- [ ] Implement password reset functionality
- [ ] Edit profile



## Models
- Guest
    - id (primary key)
    - name
    - city
    - phone
    - email
    - password
- Host
    - id (primary key)
    - name
    - city
    - phone
    - email
    - password
- Boat
    - id (primary key)
    - boat name
    - boat type
    - boat description
    - availability 
    - rate
    - hostId (foreign key references Host.id)
- Bookings (join table for guests and boats)
    - id (primary key)
    - guestId (foreign key references Guest.id)
    - BoatId (foreign key references Boat.id)

# Routes
- Main routes
    - `/` - homepage - greeting with user name, lists featued boats, search bar to search for available boats
    - `/login` - login form for registered users
    - `/signup` - sign up page for new users
    - `/boats/city` - view boats in a city
    - `/boat/details` - view boat details including reviews
    - `/boat/book` - book a boat
- protected routes
    - `/profile/:id/personal-info` - view personal information on profile
    - `/profile/:id/login-security` - view sign in and change password options
    - `/profile/:id/bookings` - view upcoming bookings and booking history
    - `/new-boat` - add new boat to host
