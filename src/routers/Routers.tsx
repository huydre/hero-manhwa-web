import React from 'react';
import { Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import ManhwaDetail from '../pages/ManhwaDetail';

function Routers() {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='details/:id' element={<ManhwaDetail/>} />
        </Routes>
    )
}

export default Routers;