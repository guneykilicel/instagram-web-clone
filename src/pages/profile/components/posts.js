import Icon from "components/Icon"


const ProfilePosts = ()=>{
    return(
        <div className="flex flex-col justify-center items-center gap-4 pt-10">
            <div className="w-[62px] h-[62px] border-2 rounded-full border-black flex items-center justify-center">
                <Icon name="post" size={36} /> {/* stroke ile oynamak lazım */}
            </div>
            <h6 className="text-[28px] font-light">No Posts Yet</h6>
        </div>
    )
}
export default ProfilePosts