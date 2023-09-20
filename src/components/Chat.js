import React,{useEffect, useRef} from 'react'
import styled from 'styled-components';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/counterSlice';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import ChatInput from './ChatInput';
import Message from './Message';


function Chat() {
    const chatRef = useRef(null);

    const value = useSelector(selectRoomId);

    const [roomDetails] = useDocument(
        value && db.collection('rooms').doc(value)
    );

    const [roomMessages, loading] = useCollection(
        value && db.collection('rooms').doc(value).collection('messages').orderBy('timestamp','asc')
    );

    useEffect(()=>{
        chatRef?.current?.scrollIntoView({
            behavior: "smooth",
        });
    },[value,loading])


  return (
    <ChatContainer>
        {!roomDetails && !roomMessages && (
            <>
            <h1>Click on any Groovi to start chatting!!!</h1>
            <p>IMPORTANT: For now only Groovi's are functional as this
                application is still under development. So, please click on any Groovi to start chatting.
            </p>
            </>
            
        )}
        {roomDetails && roomMessages && (
            <>
            <Header>
                <HeaderLeft>
                    <h4>
                        <strong>#{roomDetails?.data().name}</strong>
                    </h4>
                    <StarBorderOutlinedIcon />
                </HeaderLeft>
    
                <HeaderRight>
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </HeaderRight>
            </Header>
            <ChatMessages>
                {roomMessages?.docs.map(doc=>{
                    const {message, timestamp, user, userImage}=doc.data();
                    return(
                        <Message
                        key={doc.id}
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImage={userImage}
                        />
                    )
    
                })}
                <ChatBottom ref={chatRef}/>
            </ChatMessages>
    
            <ChatInput
                chatRef={chatRef}
                channelName={roomDetails?.data().name}
                channelId={value}
            />
    
            </>
            )}
        
    </ChatContainer>
  )
}

export default Chat;

const ChatBottom = styled.div`
    padding-bottom: 200px;
`;
const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 58px;
  > h1 {
        text-align: center;
        margin-bottom: 100px;
        color: #6b8a3d;
    }
    > p {
        text-align: center;
        color: #6b8a3d;
        font-size: 16px;
        margin-bottom: 100px;
    }
`;

const ChatMessages = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid #6b8a3d;
`;

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    > h4 {
        display: flex;
        text-transform: lowercase;
        margin-right: 10px;
    }
    > h4 > .MuiSvgIcon-root {
        margin-left: 20px;
        font-size: 18px;
    }
`;
const HeaderRight = styled.div`
    > p {
        display: flex;
        align-items: center;
        font-size: 14px;
    }
    > p > .MuiSvgIcon-root {
        margin-right: 5px !important;
        font-size: 16px;
    }
    
`;
