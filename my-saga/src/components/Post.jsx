import LikeButton from "./LikeButton"
import DetailButton from './DetailButton';

export default ({post}) => {
    return (
        <div className="card column" key={post.id}>
            <div className="content">
                <div className="header">{post.title}</div>
            </div>
           <LikeButton id={post.id}/>
           <DetailButton id={post.id} />
        </div>
    )
}