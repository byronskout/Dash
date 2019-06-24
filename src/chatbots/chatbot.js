import React from 'react';
import ChatBot from 'react-simple-chatbot';
import ChatbotContainer from '../ChatbotContainer';

class Chatbot extends React.Component {

  render() {
    return (
     <ChatbotContainer>
     <ChatBot
     headerTitle="Sassy Bot"
     // speechSynthesis={{ enable: true, lang: 'en' }}
     steps={[
       {
         id: '1',
         message: 'What is your name?',
         trigger: '2',
       },
       {
         id: '2',
         user: true,
         trigger: '3',
       },
       {
         id: '3',
         message: 'Hi {previousValue}, nice to meet you!',
         trigger: '4',
       },
       {
         id: '4',
         message: 'Ask me how old I am!',
         trigger: '5',
       },
       {
         id: '5',
         user: true,
         trigger: '6',
       },
       {
         id: '6',
         message: "You should never ask a bot's age!",
         trigger: '7',
       },
       {
         id: '7',
         message: "Bots will rule!",
         end: true,
       },
     ]}
/>
    </ChatbotContainer>
   )
  }
}

export default Chatbot
