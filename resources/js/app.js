import '../css/app.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ScreenApp } from './src/screenApp';

const App = () => {
    return (
        <div className='container'>
           <BrowserRouter>
                <ScreenApp/>
           </BrowserRouter>
        </div>
    )
}



ReactDOM.render(<App/>, document.getElementById("root"))
