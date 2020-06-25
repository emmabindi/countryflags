import React from 'react';

function Country(props) {
    return (
      <div>  
        <h6>{props.name}</h6>
        <img src={props.flag} alt="country flag image"/>
        {/* <p>{props.flag}</p> */}
      </div>
    )
}

export default Country;