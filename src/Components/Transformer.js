import React from 'react';

function Transformer(props) {

  return (
      <img 
        onClick={() => props.changeTransformer()}
        src={props.proptimii[props.id].url}
        alt={props.proptimii[props.id].name}
      />
  );
}



export default Transformer;
