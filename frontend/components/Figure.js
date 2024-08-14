import React from 'react'
import styled from 'styled-components'

const StyledFigure = styled.figure`
    max-width: 450px;

    figcaption {
        font-style: italic;
    }
` 

export default function Figure( {imageURL, caption} ){
    return (
      <StyledFigure>
        <img src={imageURL}/>
        <figcaption>Awesome pic taken on {caption}</figcaption>
      </StyledFigure>
    )
  } 