import React from 'react';

export default ({triggerSectionState}) => (
    <div>
        <button onClick = {triggerSectionState.bind(null, 'objections')}>Objections</button>
        <button onClick = {triggerSectionState.bind(null, 'competitors')}>Competitors</button>
        <button onClick = {() => {console.log('profiles')}}>Profiles</button>
        <button onClick = {() => {console.log('discoverires')}}>Discoveries</button>
    </div>
)