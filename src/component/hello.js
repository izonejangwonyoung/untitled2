import {useState} from "react";
import UserName from "./userName";

export default function Hello(props) {
    //   let name = "mike";
    const [name, setName] = useState("민수");
    const [age, setAge] = useState(props.age);

    const msg = age > 19 ? "성인입니다" : "미성년자입니다"

    function changeName() {
        const newName = name === "민수" ? "지연" : "민수";
        setName(newName);
    }

    return (

        <div>
            <h1>state</h1>
            <h2 id="name">{name} {age}세 {msg}</h2>
            <UserName name={name}/>
            <button onClick={changeName}>change name</button>
            <button onClick={() => {
                setAge(age + 1)
            }}>add age
            </button>
        </div>

    );
}