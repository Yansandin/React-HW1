import './Message.css'

function Message({text}) {
    return (
        <div className="message">
            <p className="text-message">{text}</p>
        </div>
    );
}

export default Message;