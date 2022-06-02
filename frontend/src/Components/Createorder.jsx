import React, {useState} from 'react'
import AddIcon from '@material-ui/icons/Add';
const Createorder = (props) => {
    const [expand, setexpand] = useState(false);

    const [note,setnote] = useState({
        title:"",
        content:"",
    });

    const cso = (event) =>{
        const {name , value} = event.target;
        setnote((prevdata) => {
            return{
                ...prevdata,
                [name]: value,  // checks among all prev. data in note if it matches value is put in name
            }
        });
    };
    const add = () =>{
       props.passnote(note);
    }
    const expandit = () =>{
        setexpand(true);
    }
    const contr = () => {
        setexpand(false);
    }
    return (
        <>
        <div className="place">
            <br/>
            <input className="placein" 
            placeholder="Write your order here.." 
            value={props.title}
            name="title"
            onChange={cso}
            autoComplete="off"
            onClick={expandit}
            onDoubleClick={contr}
            />
            <br/>
            { expand ? (
            <textarea 
            placeholder="Quantity" className="ta" rows="" column="" 
            autoComplete="off"
            onChange={cso}
            name="content"
            value={props.content}
            />) : null}
            <br/>
            { expand ? (
            <button className="bs" onClick={add}><AddIcon/></button> ) : null}
            <br/>
            <br/>
        </div>
            
        </>
    );
}

export default Createorder;
