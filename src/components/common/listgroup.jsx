import React from "react";

const ListGroup = ({ items }) => {
  return (
    <div>
      <ul className="list-group mt-3 ml-1">
        {items.map((item) => (
          <li key={item._id} className=" list-group-item mouse-hover ">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
