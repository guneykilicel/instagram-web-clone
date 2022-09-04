import Button from "components/Button"
import Icon from "components/Icon"


const Inbox= ()=> {
    return(
        <div className="w-full h-full gap-y-3 flex flex-col justify-center items-center">
            <Icon name="direct-empty" size={96} />
            <h2 className="text-[22px] font-light">Your Messages</h2>
            <p className="text-sm text-[#8e8e8e]">
                Send private photos and messages to a friend or group.
            </p>
            <diiv>
            <Button>Send Messages</Button>
            </diiv>
        </div>
    )
}
export default Inbox