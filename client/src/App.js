import './styles/App.css';
import {useEffect, useState} from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Favourite from "./pages/Favourite";
import logo from './img/weather-news.png'
import Header from "./components/Header/Header";


function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch("/api/hello")
            .then(res => res.json())
            .then(data => setMessage(data.message));
    }, []);

    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />}/>
                    <Route path="/favourite" element={<Favourite />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
