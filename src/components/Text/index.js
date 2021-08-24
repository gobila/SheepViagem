import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const TextBase=styled.span`

`;

export default function Text({tag,children, ...prop}){
    return(
        <TextBase
            as={tag}
            {...prop}
            >
                {children}
            </TextBase>
    )
}

Text.propsType = {
    tag: PropTypes.string.isRequired,
    // variant: PropTypes.string,
    children: PropTypes.node,
  };
  
  Text.defaultProps = {
    tag: 'span',
    // variant: 'paragraph1',
    children: null, // por causa da teag input que nao tem filho de fato
  };