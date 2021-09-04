/*
This Component For show message in app!

PROPS:
- Icon
- Header
- Content
*/

const Message = ({ icon, header, content, type }) => {
    return (
        <div className={`ui ${type} icon message`}>
            <i className={`${icon} icon`}></i>
            <div className="content">
                <div className="header">
                    {header}
                </div>
                <p>
                    {content}
                </p>
            </div>
        </div>
    )
};

Message.defaultProps = {
    icon: "inbox",
    header: "Some Message !",
    content: "Get the best news in your e-mail every day.",
    type: "basic"
};

export default Message;