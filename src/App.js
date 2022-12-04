import React from "react";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import Main from "./layout/Main/Main";

function App() {

    const resp = fetch('http://www.omdbapi.com/?apikey=1780b93d&s=matrix')
        .then(response => response.json())
        .then(data => data);

    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>

    );
}

export default App;
