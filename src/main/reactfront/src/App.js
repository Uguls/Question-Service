// import './App.css';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import ListBoardComponent from './component/ListBoardComponent';
// import HeaderComponent from './component/HeaderComponent';
// import FooterComponent from './component/FooterComponent';
//
// function App() {
//     return (
//         <div>
//             <Router>
//                 <HeaderComponent/>
//                 <div className="container">
//                     <Routes>
//                         <Route path = "/" exact={true} element = {ListBoardComponent}></Route>
//                         <Route path = "/board" element = {ListBoardComponent}></Route>
//                     </Routes>
//                 </div>
//                 <FooterComponent/>
//             </Router>
//         </div>
//     );
// }
//
// export default App;

import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
    const [hello, setHello] = useState('')

    useEffect(() => {
        axios.get('/api/hello')
            .then(response => setHello(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div>
            백엔드에서 가져온 데이터입니다 : {hello}
        </div>
    );
}

export default App;