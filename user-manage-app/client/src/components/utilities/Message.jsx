 const Message = (props) => {

    const classOfThis = () => { // Type Of Color!
        switch (props.type) {
            case "success":
                return "green";
            case "info":
                return "blue";
            case "warning":
                return "orange";
            default:
                return ""
        }
    }
    return (
        <div className={`ui ${classOfThis()} icon message`}>
            <i className="inbox icon"></i>
            <div className="content">
                <div className="header">
                    {props.header}
                </div>
                {props.content}
            </div>
            <i class="close icon" onClick={props.closeMessage()}></i>
        </div>
    )
}


Message.defaultProps = {
    header: "پیغام",
    content: "لطفا ایمیل خود را چک کنید"
}

export default Message;
