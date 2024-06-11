import Information from "../resource/Interfaces";

interface DisplayData{
    data:Information[];
}

const Blist = (displayData:DisplayData) => {
    return (
        <ul>
            {displayData.data.map((information,index) => (
                <li key={index}>{information.name}</li>
            ))}
        </ul>
    );
}

export default Blist;