import React from 'react';
import './App.css';
import {Main} from "./Main";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Main method="POST" action="http://localhost:8000/post/"/>
            </header>
        </div>
    );
}

export default App;
