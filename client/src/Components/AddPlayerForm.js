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
                     <label htmlFor="player">Add New Player</label>
                     <input
                     id="player"
                     placeholder="player name"
                     value={player}
                     onChange={handleChanges}
                     name="player"
                     />
                     <button 
                     data-testid='button' 
                     type="submit">Submit New Player</button>
                 </fieldset>




             </form>
         </div>
     )
    
}