import React from 'react';
import styled from "styled-components"
import useLightMode from '../hooks/useLightMode'

const PlayerCard = styled.div`
border:1px solid red;
height:15vh;
width:150px;
`
const Container = styled.div`
display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-align-content: stretch;
    -ms-flex-line-pack: stretch;
    align-content: stretch;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    margin-bottom:1%;
    margin-left:1%;
    height:100%;
`



const Card = ({players}) =>{
    const [lightMode, setLightMode] = useLightMode(true);
    const toggleLightMode = e => {
        e.preventDefault();
        setLightMode(!lightMode);
      };
    
  
    return(
        <Container>
            <button data-testid="button" onClick={toggleLightMode}>Toggle to incinerate your eyes</button>
                {players.map(player=>(
                    <PlayerCard>
                        <p>{player.name}</p>
                        <p>{player.searches}</p>
                        <p>{player.country}</p>
                    </PlayerCard>
                ))}
        </Container>
    )


}

export default Card