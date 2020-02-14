import React from 'react';
import styled from "styled-components"

const PlayerCard = styled.div`
`



const Card = ({players}) =>{
    return(
        <div>
                {players.map(player=>(
                    <PlayerCard>
                        <p>{player.name}</p>
                        <p>{player.searches}</p>
                        <p>{player.country}</p>
                    </PlayerCard>
                ))}
        </div>
    )


}

export default Card