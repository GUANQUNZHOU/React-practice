import React from 'react';
import './App.css';
import Alist from "../side-component/Alist";
import Blist from "../side-component/Blist";
import WithDataComponent from "../data/WithDataComponent";
const url:string = 'https://jsonplaceholder.typicode.com/users';
const App = () =>  {
    return (
        <div>
            <WithDataComponent Component={Alist} url={url}></WithDataComponent>
            <WithDataComponent Component={Blist} url={url}></WithDataComponent>
        </div>
    )
}

export default App;
