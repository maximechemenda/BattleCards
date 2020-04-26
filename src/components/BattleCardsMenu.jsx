import React from 'react';

export default ({triggerObjectionState}) => (
    <div>
        <button onClick = {triggerObjectionState}>Objections</button>
        <button onClick = {() => {console.log('competitors')}}>Competitors</button>
        <button onClick = {() => {console.log('profiles')}}>Profiles</button>
        <button onClick = {() => {console.log('discoverires')}}>Discoveries</button>
    </div>
)