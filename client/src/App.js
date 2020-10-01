import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import configureStore from './store/configureStore';
import Pages from './pages/Pages';


const store = configureStore();
if (process.env.NODE_ENV !== 'production') {
    window.store = store;
}



function App() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadUser = async () => {
            try {
                const res = await fetch("/api/session");
                if (res.ok) {
                    res.data = await res.json();
                }
                setLoading(false);
            }
            catch(err){
                console.log(err)
            }
        }
        loadUser();
    }, []);

    if (loading) return null;
  return (
    <>
        <BrowserRouter>
            <Provider store={store}>
                <Pages />
            </Provider>

        </BrowserRouter>
    </>
  );
}

export default App;
