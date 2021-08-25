import React from 'react';
import styled from 'styled-components';
import { propToStyle } from '../../theme/utils/propToStyle';

export const Box = styled.div`
    display: block;
    background-color: rgba(255,255,255,1);
    width: 80%;
    border-radius: 8px;
    padding: 10px;

    
    ${propToStyle('backgroundColor')};
    ${propToStyle('display')}
    ${propToStyle('flexDirection')}
    ${propToStyle('alignItems')}
    ${propToStyle('margin')}
    ${propToStyle('width')}
`;