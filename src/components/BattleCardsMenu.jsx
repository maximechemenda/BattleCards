import React from 'react';

export default ({triggerSectionState}) => (
    <div>
        <button onClick = {triggerSectionState.bind(null, 'objections')}>Objections</button>
        <button onClick = {triggerSectionState.bind(null, 'competitors')}>Competitors</button>
        <button onClick = {triggerSectionState.bind(null, 'profiles')}>Profiles</button>
        <button onClick = {triggerSectionState.bind(null, 'discoveries')}>Discoveries</button>
    </div>
)