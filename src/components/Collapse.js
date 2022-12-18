import React, { useState } from "react";
import Arrow from "../asset/img/Arrow_Back.png";
import PropTypes  from "prop-types";

function Collapse({title, description}) {
    
    const [open, setOpen] = useState(false);
 
    return(
        <div className="collapse">
            <div className="header_collapse">
                <div className="title_collapse">{title}</div>
                <span className={`arrow_collapse ${open}`} onClick={() => setOpen(!open)}>
                    <img src={Arrow} alt="Flèche orientée vers le bas pour ouvrir un menu"/>
                </span>
            </div>
            {
                open && <div className="description_collapse">{description}</div>
            }
        </div>
    );
}
Collapse.propTypes = {
    title: PropTypes.string,
    description: PropTypes.node
}

export default Collapse;
