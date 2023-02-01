import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { createRoot } from "react-dom/client";
import View from './View';
import Example from "./pages/Example";
import Top from "./pages/Top";
import Header from "./components/Header";

function Root ():React.ReactElement {
    return (
        <View>
            <BrowserRouter>
                <Header>
                    <Routes>
                        <Route path='/' element={<Top />} />
                        <Route path='/example' element={<Example />} />
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