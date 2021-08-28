import React, {useState, useEffect} from "react";

export default ({ id }) => {
    // STATE
    const [like, setLike] = useState(null);

    useEffect(() => {
        setLike(localStorage.getItem(id));
    }, [])
    const handleLike = (e) => { // Handle Like
        if(localStorage.getItem(id)) { // If Exists Item Remove Last Like
            localStorage.removeItem(id);
            setLike(null);
        } else { // Otherwise Set new Local
            localStorage.setItem(id, id);
            setLike(id);
        }
    }
    return (
         <div className={`ui bottom ${like ? "red" : "" } attached button`} onClick={(e) => handleLike()}>
            <i className="heart icon"></i>
            Like
        </div>
    )
}