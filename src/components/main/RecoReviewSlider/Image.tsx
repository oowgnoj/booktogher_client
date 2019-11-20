import React, { ReactElement } from "react";

const Image: React.SFC = (): ReactElement => {
  return (
    <div className="main_slider_image">
      <img
        src={
          "https://images.unsplash.com/photo-1530532460978-98828bd8a771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        }
        alt="표지"
        width="500"
      />
    </div>
  );
};

export default Image;
