import React from 'react'
import styled from "styled-components";
export default function Locations() {
  return (
    <div>

    <h2 style={{color: 'black', fontSize: '32px;', textAlign:'center'}}>Locations</h2>
<LocationsWrapper>
<div>Salford</div>
<div>Stockport</div>
<div>Bolton</div>
<div>Rochdale</div>
<div>Bury</div>
<div>Oldham</div>
<div>Tameside</div>
<div>Wigan</div>
<div>Altrincham</div>
<div>Sale</div>
<div>Ashton-under-Lyne</div>
<div>Stretford</div>
<div>Eccles</div>
<div>Urmston</div>
<div>Middleton</div>
<div>Radcliffe</div>
<div>Leigh</div>
<div>Denton</div>
<div>Cheadle</div>
<div>Hyde</div>



    </LocationsWrapper>
    </div>
  )
}


const LocationsWrapper = styled.div`

display:grid;
grid-template-columns: repeat(4, 1fr);
align-items:center;
padding: 1.25rem;
height:auto;
font-size: 21px;
font-weight:bold;
color:white;
background-color:#0B093B;

@media (max-width: 768px) {
  
    grid-template-columns: repeat(2, 1fr); /* 2 columns on mobile */

}

`