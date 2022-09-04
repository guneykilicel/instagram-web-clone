import classNames from "classnames";
import { NavLink, useParams } from "react-router-dom";

const ChatList = () => {

  const { conversationId } = useParams();

  const chats = [
    {
      id: 1,
      user: {
        avatar:
          "https://pbs.twimg.com/profile_images/1545493638733520898/ZM560Rt6_400x400.jpg",
        name: "İrem",
      },
      lastMessage: "fsdafdasfaddfs",
    },
    {
      id: 2,
      user: {
        avatar:
          "https://pbs.twimg.com/profile_images/1545493638733520898/ZM560Rt6_400x400.jpg",
        name: "Kuzey Kılıçel",
      },
      unread: true,
      lastMessage: "Merhabaaa!",
    },
    {
      id: 3,
      user: {
        avatar:
          "https://pbs.twimg.com/profile_images/1545493638733520898/ZM560Rt6_400x400.jpg",
        name: "Osman Demirpolat",
      },
      lastMessage: "fsdafdasfaddfs",
    },
  ];

  return (
    <div className="h-[calc(100%-60px)] overflow-auto py-3">
      <header className="flex items-center justify-between px-5 mb-1">
        <h6 className="text-base font-semibold">Messages</h6>
        <button className="text-brand text-sm font-semibold">
          16 requests
        </button>
      </header>

      {chats.map((chat) => (
        <NavLink
          key={chat.id}
          to={`/inbox/${chat.id}`}
          className={classNames({
            "flex items-center gap-x-4 px-5 h-[72px] hover:bg-zinc-50": true,
            "font-bold": chat?.unread,
            "!bg-[#efefef]": +conversationId === chat.id
          })}
        >
          <img src={chat.user.avatar} className="w-14 h-14 rounded-full" />
          <div>
            <h6 className="text-sm">{chat.user.name}</h6>
            <p className={`text-sm ${!chat?.unread && "text-[#8e8e8e]"}`}>
              {chat.lastMessage}
            </p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};
export default ChatList;
