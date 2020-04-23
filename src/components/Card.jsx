import React from 'react';

export default ({text, onDelete}) => (

    <div style={{borderStyle: 'ridge'}}>
        {text}
        <button onClick={onDelete}>x</button>
    </div>
        

)

