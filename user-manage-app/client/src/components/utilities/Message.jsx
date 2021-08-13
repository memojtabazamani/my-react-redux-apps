 const Message = (props) => {
    return (
        <div class="ui icon message">
            <i class="inbox icon"></i>
            <div class="content">
                <div class="header">
                    {props.header}
                </div>
                {props.content}
            </div>
        </div>
    )
}


Message.defaultProps = {
    header: "A New Message",
    content: "Check Your Email!"
}

export default Message;
