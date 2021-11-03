
// import React from 'react';
import keys from '../data/keys_data'

const Note = (props) => {
    let column = `${props.column+3}/${props.column+3}`
    let note = `note ${props.note}`
    // let bgcolor = keys.find((k) => k.note === props.note).color
    let bgcolor = (keys.find(({note}) => note === props.note) || {}).color || 'clear' 

    return (
        (bgcolor !== 'clear') ? 
         <span className={note} 
            style={{
              gridColumn: column,
              backgroundColor: bgcolor
            }} />
        : 
        null
    )
}
export default Note;