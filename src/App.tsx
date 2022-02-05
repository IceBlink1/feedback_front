import React from 'react';
import './App.css';
import {Main} from "./Main";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Main method="POST" action="http://37.46.129.242:8080/post/"/>
            </header>
        </div>
    );
}

export default App;
