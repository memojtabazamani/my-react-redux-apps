import React, {useEffect} from 'react';
import {connect} from 'react-redux';

/*
MY OTHER COMPONENT IN HERE
 */
import { DetailPost } from "./Loadings";

const MyComponent = ({currentPost, isLoadingDetail}) => {
    if( currentPost ) {
        return (
            <div className="card column">
                <div className="content">
                    <div className="header">{currentPost.title}</div>
                    <div className="description">
                        {currentPost.body}
                    </div>
                </div>
            </div>
        );
    }
    if(isLoadingDetail) {
        return (
            <DetailPost/>
        )
    }
    return (<>  </>)

}

function mapStateToProps(state) {
    return {
        currentPost: Object.values(state.currentPost)[0],
        isLoadingDetail: state.isLoadingDetail
    };
}

export default connect(
    mapStateToProps,
)(MyComponent);
