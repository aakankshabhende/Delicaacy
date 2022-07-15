import React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const Card = (props) => {
  const [itemCount, setItemCount] = React.useState(1); // To maintain state of number of items in cart

  const deletenote = () => {
    props.deleteitem(props.id); // Passing id of card to be deleted to ondelete function of MakeOrder.jsx
  };

  return (
    <>
      <div className="note">
        <div class="card" style={{ width: "18rem" }}>
          <img class="card-img-top" src={props.img} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
          </div>

          <div class="row">
            <div class="col-sm-2">
              <Badge color="secondary" badgeContent={itemCount}>
                <ShoppingCartIcon />
              </Badge>
            </div>
            <div class="col-sm-3">
              <Button
                onClick={() => {
                  setItemCount(Math.max(itemCount - 1, 0)); // Decreasing item number
                }}
              >
                <RemoveIcon fontSize="small" />
              </Button>
            </div>
            <div className="col-sm-3">
              {/* Deleting card item */}
              <Button onClick={deletenote}>
                <DeleteOutlineIcon />
              </Button>
            </div>
            <div className="col-sm-3">
              <Button
                onClick={() => {
                  setItemCount(itemCount + 1); // Increasing item number
                }}
              >
                <AddIcon fontSize="small" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
