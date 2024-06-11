import {useEffect,useState} from "react";
interface Information{
    name:string;
}

const Blist = () => {
    const [list, setList] = useState<Information[]>([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                const names:Information[] = data.map((user: {name: string}) => ({name: user.name}));
                setList(names);
            });
    }, []);
    return (
        <ul>
            {list.map((check,index) => (
                <li key={index}>{check.name}</li>
            ))}
        </ul>
    );
}

export default Blist;