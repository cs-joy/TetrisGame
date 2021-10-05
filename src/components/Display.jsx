import React from 'react';
import { StyledDisplay } from './styles/StyledDisplay';

const Display = ({ gameOver, text }) => {
    return (
        <StyledDisplay gaveOver={gameOver}>
            {text}
        </StyledDisplay>
    )
}

export default Display;
