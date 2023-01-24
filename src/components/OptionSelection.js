import React from "react";

function OptionSelection({ arrayItems }) {
  return (
    <>
      <h1 className="heading">React AI APP</h1>

      <div className="grid-main">
        {arrayItems.map((item) => {
          return (
            <div key={item.id} className="grid-child">
              <h3>{item.name} </h3>
              <p>{item.description} </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default OptionSelection;
