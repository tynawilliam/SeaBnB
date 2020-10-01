import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Pages from './pages/Pages';
import { setUser } from './store/auth'


// const store = configureStore();
// if (process.env.NODE_ENV !== 'production') {
//     window.store = store;
// }

function App() {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch();

    useEffect(() => {
        const loadUser = async () => {
            try {
                const res = await fetch("/api/session");
                if (res.ok) {
                    res.data = await res.json();
                    // console.log(res.data.user)
                    dispatch(setUser(res.data.user));
                }
                setLoading(false);
            }
            catch(err){
                console.log(err)
            }
        }
        loadUser();
    }, [dispatch]);

    if (loading) return null;
  return (
    <>
        <BrowserRouter>
            <Pages />
        </BrowserRouter>
    </>
  );
}

export default App;
