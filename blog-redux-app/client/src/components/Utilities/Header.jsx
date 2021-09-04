import {Link} from 'react-router-dom';

const Header = () => {
    const { REACT_TITLE_HEADER } = process.env;
    return (
        <div className="ui fixed inverted menu">
            <div className="ui container">
                <a href="#" className="header item">
                    {REACT_TITLE_HEADER}
                </a>
                <Link className='item' to="/">
                    Home
                </Link>
                <Link className='item' to="/create">
                    Write New Post
                </Link>
            </div>
        </div>
    );
};

export default Header;