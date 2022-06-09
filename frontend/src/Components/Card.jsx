import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Card = (props) => {
  const deletenote = () =>{
    props.deleteitem(props.id);
}
  return (
    <>
    <div className='note'>
    <div class="card" style={{width: "18rem"}}>
  <img class="card-img-top" src={props.img} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
  </div>
  <button className="b" onClick={deletenote}>
     <DeleteOutlineIcon />
  </button>
  <div class="card-body">
  
  </div>
</div>
</div>
    </>
  )
}

export default Card