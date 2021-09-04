/*
This is my button component!

PROPS:
IsLoading: when a need to show loading !
icon: show custome icon!
content: Show Content of Button!
type: Show Type of Button Like Green, Blue, Danger

*/

const Button = ({ isLoading, icon, content, type, handleClick }) => {
    return (
        <button
            className={`ui active ${type} ${isLoading ? "loading" : ""} button`}
            onClick={(e) => handleClick()}
        >
             <i className={`${icon} icon`} />
            {content}
        </button>
    )
};

Button.defaultProps = {
    isLoading: false,
    icon: "edit",
    content: "Click",
    Type: ""
};

export default Button;