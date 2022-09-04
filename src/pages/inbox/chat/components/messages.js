import Message from "./message";


const Messages = ({messages}) => {
  return (
    <main className="h-[calc(100%-144px)] p-4 overflow-auto flex flex-col gap-y-2">
      {messages.map((message, key) => 
        <Message message={message} key={key} />)}
    </main>
  );
};
export default Messages;
