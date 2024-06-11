import {useEffect,useState} from "react";
interface check{
    name:string;
}

const Alist = () => {
    const [list, setList] = useState<check[]>([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                const names = data.map((user: { name: string; }) => user.name);
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

export default Alist;