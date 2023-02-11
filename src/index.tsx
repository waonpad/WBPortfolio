import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { lazyImport } from "./utils/lazyImport";
import View from './View';
import Header from "./components/Header";

const { Top } = lazyImport(() => import('./pages/Top'), 'Top');
const { Example } = lazyImport(() => import('./pages/Example'), 'Example');
const { Page404 } = lazyImport(() => import('./pages/Page404'), 'Page404');
const { Work } = lazyImport(() => import('./pages/Work'), 'Work');
const { Profile } = lazyImport(() => import('./pages/Profile'), 'Profile');

function Root ():React.ReactElement {
    return (
        <View>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Header>
                    <Routes>
                        <Route path='/' element={<Top />} />
                        <Route path='/works' element={<Top />} />
                        <Route path='/about' element={<Profile />} />
                        <Route path='/work/:workId' element={<Work />} />
                        <Route path='/example' element={<Example />} />
                        <Route path='*' element={<Page404 />} />
                    </Routes>
                </Header>
            </BrowserRouter>
        </View>
    );
};

export default Root;

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Root />);