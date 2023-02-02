import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { createRoot } from "react-dom/client";
import View from './View';
import Example from "./pages/Example";
import Top from "./pages/Top";
import Page404 from "./pages/Page404";
import Work from "./pages/Work";
import Profile from "./pages/Profile";
import Header from "./components/Header";

function Root ():React.ReactElement {
    return (
        <View>
            <BrowserRouter>
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