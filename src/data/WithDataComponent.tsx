import React, {useEffect, useState} from "react";
import Information from "../resource/Interfaces";

interface WithDataComponentProps{
    Component: React.ComponentType<{data:Information[]}>;
    url:string;
}
const WithDataComponent = (withDataComponentProps: WithDataComponentProps) => {
    const [list,setList] = useState<Information[]>([]);
    useEffect(() => {
        fetch(withDataComponentProps.url)
            .then(response  => response.json())
            .then(data => {
                const names = data.map((user: { name: string; }) => ({name:user.name}));
                setList(names)
            });
    })
    return <withDataComponentProps.Component data = {list}></withDataComponentProps.Component>
}
export default WithDataComponent