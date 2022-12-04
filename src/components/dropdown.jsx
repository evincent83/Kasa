import {useState} from 'react';
import vector from '../img/vector.png';

export default function Dropdown (props) {
    const [open, setOpen] = useState(false);
    return (
        <>
        <div className="dropdown_menu">
            <div className="dropdown_title">{props.title}</div>
            <div className="dropdown_toogle" onClick={()=>{setOpen(!open)}}>
                <img className={`vector_state ${open? 'active' : 'inactive'}`} src={vector}></img>
            </div>
        </div>
        <div className={`dropdown_info ${open? 'active' : 'inactive'}`}>
            <p>{props.dp_text}</p>
        </div>
        </>
    )
}