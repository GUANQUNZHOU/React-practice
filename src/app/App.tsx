import React from 'react';
import './App.css';
import Alist from "../side-component/Alist";
import Blist from "../side-component/Blist";
import {render} from "@testing-library/react";

function App() {
    return (
        render(
            <div>
                <Alist></Alist>
                <Blist></Blist>
            </div>)
    )
}

export default App;
