import React from 'react';
import { useForm } from '../hooks/useForm';

const initialValue ={
    player:""
}

export default function AddPlayerForm(){
    const [{player}, handleChanges]= useForm('sign up form', initialValue);
    const handleSubmit= event=>{
        event.preventDefault();
        alert(player)
     }
     return(
         <div>
             <form onSubmit={handleSubmit}>
                 <fieldset>
                     <legend>Add New Player</legend>
                     <input
                     placeholder="player name"
                     value={player}
                     onChange={handleChanges}
                     name="player"
                     />
                     <button type="submit">Submit New Player</button>
                 </fieldset>




             </form>
         </div>
     )
    
}