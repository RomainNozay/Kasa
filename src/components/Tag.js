import React from "react"
import PropTypes  from "prop-types";

function Tag({ title }) {
    return(
            <div className="tag">
            <div className="tag_text">{title} </div>
            </div>
        
    );
}

Tag.propTypes = {
    title: PropTypes.string,
}

export default Tag;