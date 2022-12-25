import React from "react";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import Main from "./layout/Main/Main";
import Container from "@mui/material/Container";

function App() {
    return (
        <>
            <Header/>
            <Container fixed style={{flex: 1, paddingTop: 120}}>
                <Main/>
            </Container>
            <Footer/>
        </>
    );
}

export default App;
