import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ListBoardComponent from './component/ListBoardComponent';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent/>
                <div className="container">
                    <Routes>
                        <Route path = "/" exact element = {ListBoardComponent}></Route>
                        <Route path = "/board" element = {ListBoardComponent}></Route>
                    </Routes>
                </div>
                <FooterComponent/>
            </Router>
        </div>
    );
}

export default App;