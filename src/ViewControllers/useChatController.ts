import {useState} from 'react';

const useChatController = () => {
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: 'Hello developer',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/people',
      },
    },
  ]);

  return {messages, setMessages};
};

export default useChatController;
