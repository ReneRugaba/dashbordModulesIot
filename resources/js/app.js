import '../css/app.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ScreenApp } from './src/screenApp';
import { ToastProvider } from 'react-toast-notifications';

const App = () => {
    return (
        <div className='container'>
            <BrowserRouter>
                <ToastProvider>
                    <ScreenApp />
                </ToastProvider>
            </BrowserRouter>
        </div>
    )
}



ReactDOM.render(<App />, document.getElementById("root"))
