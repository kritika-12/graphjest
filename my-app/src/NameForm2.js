import React from 'react';
import { useInput } from '../src/hooks/input-hook';
import {useEffect} from 'react';
import "./style.css";
export default function NameForm2() {
    const { value:fname, bind:bindfname, reset:resetfname } = useInput('');
    const{value:lname,bind:bindlname,reset:resetlname}=useInput('');
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Your Name is: ${fname} ${lname}`);
        resetfname();resetlname();
    }
 useEffect(()=>{
     document.title=`You have entered ${fname} ${lname}`;
 })
  return (
        <form onSubmit={handleSubmit}>
      
            FirstName:   <input type="text" {...bindfname} placeholder="firstname"/><br/><br/>
            LastName: <input type="text" {...bindlname} placeholder="lastname"/><br/><br/>
            <input type="submit" value="Submit" />
              <p>You have entered {fname} {lname}</p>
        </form>

    )

}