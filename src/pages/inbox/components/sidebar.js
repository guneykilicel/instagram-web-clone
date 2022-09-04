import Icon from "components/Icon"
import { useSelector } from "react-redux"
import ChatList from "./chatlist"


const Sidebar = ()=>{

    const user = useSelector(state => state.auth.user)

    return(
        <aside className="w-[349px] flex-shrink-0 border-r border-gray-300"> 
        {/*flex-shring-0 kendini küçültmesin diye */} 
            <header className="h-[60px] border-b border-gray-300 flex justify-between items-center px-5">
                <button className="flex items-center mx-auto gap-x-2 text-base font-bold">
                    {user.username}
                    <Icon className="rotate-180" name="chevron-down" size={20} />
                </button>
                <Icon name="new-message" size={24} />
            </header>
            <ChatList />
        </aside>
    )
}
export default Sidebar