import ChatHeader from "./ChatHeader"
import MatchesDisplay from "./MatchesDisplay"
import ChatDisplay from "./ChatDisplay"

const ChatContainer = () => {
    return (
        <div className="chat-container">
            <ChatHeader/>

            <div>
                <button className="option">interests</button>
                <button className="option">conversations</button>
            </div>
            <MatchesDisplay/>

            <ChatDisplay/>
        </div>
    )
}

export default ChatContainer