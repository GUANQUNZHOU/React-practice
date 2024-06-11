import withDataComponent from "./WithDataComponent";
import React, {Component} from "react";
import WithDataComponent from "./WithDataComponent";
const WithData = (Compont:React.ComponentType,url:string) => {
    return <WithDataComponent Component={Component} url={url}></WithDataComponent>
}

export default  WithData;