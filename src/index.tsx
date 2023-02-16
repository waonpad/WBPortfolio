import React from "react";
import { createRoot } from "react-dom/client";
import View from './View';
import { AppProvider } from "./providers/app";
import AppRoutes from "./routes";

function Root ():React.ReactElement {
    return (
        <View>
            <AppProvider>
                <AppRoutes />
            </AppProvider>
        </View>
    );
};

export default Root;

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Root />);