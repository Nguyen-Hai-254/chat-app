import { PrettyChatWindow } from "react-chat-engine-pretty";
import {
    MultiChatWindow,
    MultiChatSocket,
    useMultiChatLogic,
} from 'react-chat-engine-advanced';

/* 2 UI */
// const ChatsPage = (props) => {
//     return (
//         <div className="background">
//             <PrettyChatWindow
//                 projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
//                 username={props.user.username}
//                 secret={props.user.secret}
//             />
//         </div>
//     );
// };

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID,
        props.user.username,
        props.user.secret
    );
    return (
        <div style={{height:"100vh"}}>
            <MultiChatWindow {...chatProps} />
            <MultiChatSocket {...chatProps} style={{height:"100%"}}/>
        </div>
    );
}

export default ChatsPage;