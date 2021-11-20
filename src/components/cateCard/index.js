import React from "react";
// import { NavLink } from "react-router-dom";

const CatsCard = ({ cat }) => {
  return (
    <div className="product-item">
      <div className="product-img">
        <img src={cat.url} />
      </div>
      {/* <div className="product-list">
        <h3>{"props.state.street"}</h3>
        <div className="actions">
          <div className="add-to-links"> */}
      {/* <NavLink to={"/myhome/" + props.state._id} className="cart-button">
              {props.state.rooms}.room
            </NavLink>
            <NavLink
              to={"/home/" + props.state._id}
              className="compare"
            ></NavLink> */}
      {/* </div>
        </div>
      </div> */}
    </div>
  );
};

export default CatsCard;
