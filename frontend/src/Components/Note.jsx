import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Note = (props) => {
    const deletenote = () =>{
        props.deleteitem(props.id);
    }
    return (
        <>
        <div className="note">
            <h3>{props.title}</h3>
            <br/>
            <p>{props.content}</p>
            <button className="b" onClick={deletenote}>
                <DeleteOutlineIcon />
            </button>
        </div>
            
        </>
    );
}

export default Note;
