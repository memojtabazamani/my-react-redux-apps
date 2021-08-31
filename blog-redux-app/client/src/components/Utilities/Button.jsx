/*
This is my button component!

PROPS:
IsLoading: when a need to show loading !
icon: show cutome icon!
content: Show Content of Button!
type: Show Type of Button Like Green, Blue, Danger


*/

const Button = ({ isLoading, icon, content, type, handleClick }) => {
    const handleClickButton = (e) => {
        handleClick();
    };
    return (
        <button className={`ui active ${type} ${isLoading && "loading"} button`} onClick={(e) => handleClickButton}>
            <i className={`${icon} icon`} />
            {content}
        </button>
    )
};

Button.defaultProps = {
    isLoading: false,
    icon: "pen",
    content: "Click",
    Type: ""
};

export default Button;