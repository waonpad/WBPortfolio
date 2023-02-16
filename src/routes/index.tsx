import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { lazyImport } from "../utils/lazyImport";
import Header from "../components/Header";

import { ENV, PUBLIC_URL } from "../config";

const { Top } = lazyImport(() => import('../pages/Top'), 'Top');
const { Page404 } = lazyImport(() => import('../pages/Page404'), 'Page404');
const { Work } = lazyImport(() => import('../pages/Work'), 'Work');
const { Profile } = lazyImport(() => import('../pages/Profile'), 'Profile');

function AppRoutes ():React.ReactElement {
    return (
        <BrowserRouter basename={ENV === 'production' ? PUBLIC_URL : '/'}>
            <Header>
                <Routes>
                    <Route path='/' element={<Top />} />
                    <Route path='/works' element={<Top />} />
                    <Route path='/about' element={<Profile />} />
                    <Route path='/work/:workId' element={<Work />} />
                    <Route path='*' element={<Page404 />} />
                </Routes>
            </Header>
        </BrowserRouter>
    );
};

export default AppRoutes;