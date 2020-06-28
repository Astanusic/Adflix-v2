import React from "react";
import "./header-item.scss";

const HeaderItem = React.forwardRef((props, ref) => (
  <div
    className={"header_item " + props.className ? props.className : ""}
    ref={ref}
  >
    {props.children}
  </div>
));

export default HeaderItem;
