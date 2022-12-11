import { useState } from "react";
import vector from "../img/vector.png";

export default function Dropdown(props) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`dropdownContainer ${props.className ? props.className : ""}`}>
      <div className="dropdownMenu">
        <div className="dropdownTitle">{props.title}</div>
        <div className="dropdownToogle" onClick={() => {setOpen(!open);}}>
          <img className={`vectorState ${open ? "active" : "inactive"}`} alt="vector" src={vector}></img>
        </div>
      </div>
      <div className={`dropdownInfo ${open ? "active" : "inactive"}`}>
        {props.children}
      </div>
    </div>
  );
}
