import {useEffect, useState} from "react";

function StudentForm(props){
    const [name, setName] = useState(props.nameValue);
    const [email, setEmail] = useState(props.emailValue);
    const [rollNo, setRollNo] = useState(props.rollNoValue);

    useEffect(()=>{
        setName(props.nameValue);
        setEmail(props.emailValue);
        setRollNo(props.rollNoValue);
    }, [props.nameValue, props.emailValue, props.rollNoValue])

    const arr = [name, email, rollNo];

    const handleClick = () =>{
        props.getState(arr);
    }

    return(
        <div style={{maxWidth:"40%", margin: "0px auto"}} >
            <input defaultValue = {props.nameValue} onChange={(event)=>setName(event.target.value)} class="form-control my-3" placeholder="Enter your Name" />
            <input defaultValue = {props.emailValue} onChange={(event)=>setEmail(event.target.value)} class="form-control my-3" placeholder="Enter your Email" />
            <input defaultValue = {props.rollNoValue} onChange={(event)=>setRollNo(event.target.value)} class="form-control my-3" placeholder="Enter your RollNo" />
            <button onClick={handleClick} class="btn btn-success my-3 d-block mx-auto" type="submit" >{props.children}</button>
        </div>
    )
}

export default StudentForm;