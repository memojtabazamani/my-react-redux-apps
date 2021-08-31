const Header = () => {
    const { REACT_APP_MY_ENV } = process.env;
    return (
        <div className="ui fixed inverted menu">
            <div className="ui container">
                <a href="#" className="header item">
                    {REACT_APP_MY_ENV}
                </a>
                <a href="#" className="item">Home</a>
            </div>
        </div>
    );
};

export default Header;