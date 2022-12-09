import React from "react"

function Tag({ title }) {
    return(
            <div className="tag">
            <div className="tag_text">{title} </div>
            </div>
        
    );
}

export default Tag;