import { useEffect } from "react";
import { connect } from "react-redux";
import { postFetchRequested } from "../actions";

const Com = (props) => {
    const handleDetail = () => {
        console.log(props.id);
        props.postFetchRequested(props.id);
    }
    return (
        <>
            <div className="ui bottom blue  attached button" onClick={(e) => handleDetail(e)}>
                <i className="eye icon"></i>
                Detail
            </div>
        </>
    )
}

export default connect(null, {
    postFetchRequested
})(Com);