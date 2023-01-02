import Container from "@mui/material/Container";
import Header from './layout/Header/Header';
import Main from "./layout/Main/Main";
import Footer from "./layout/Footer/Footer";

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
