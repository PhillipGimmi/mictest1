import React from 'react';
import CloseApp from "./commands/closeApp";
import OpenApp from './commands/openApp';

const CommandList = () => {
  const startListening = (command) => {
    switch (command) {
      case 'open app':
        return <OpenApp />;
      case 'close app':
        return <CloseApp />;
      case 'set alarm':
        // code to set an alarm
        break;
      case 'time':
        // code to display the current time
        break;
      case 'next meeting':
        // code to display the user's next meeting
        break;
      case 'book an uber':
        // code to book an Uber ride
        break;
      case 'uber eats':
        // code to order food from Uber Eats
        break;
      default:
        console.error('Invalid command');
        break;
    }
  };

  return (
    <>
      {startListening()}
    </>
  );
};

export default CommandList;