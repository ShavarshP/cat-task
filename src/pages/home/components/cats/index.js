import React from "react";
import CatsCard from "../../../../components/cateCard";

const CatsBlok = ({ cats }) => {
  console.log(cats);
  return (
    <div className="catsBlok">
      <div className="list-filter-container">
        {cats.map((item, index) => (
          <CatsCard key={item.id + index} cat={item} />
        ))}
      </div>
    </div>
  );
};

export default CatsBlok;
