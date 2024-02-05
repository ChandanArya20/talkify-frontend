import { IoCheckmarkOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

function ChatCard(item) {

    const {currentUser} = useSelector(state=>state.userStore);
    const {chatName, chatImage, isGroup, members, messages} = {...item};
    
    const chatUser = members.filter(member=>members.id!==currentUser.id)[0];

    return (
        <div className="w-[98%] p-3 border-b-2 border-gray-800 flex justify-between cursor-pointer hover:bg-[#222E35]">
            <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white cursor-pointer">
                    <img
                        className=" w-full h-full rounded-full object-cover"
                        src={ isGroup ? chatImage || 'https://cdn.pixabay.com/photo/2018/01/24/19/49/friendship-day-3104635_1280.jpg' : chatUser.profileImage || 'https://cdn.pixabay.com/photo/2016/03/27/21/52/woman-1284411_1280.jpg'}
                        alt=""
                    />
                </div>
                <div className="ml-3 text-white">
                    <div>
                        <p className="text-base">{isGroup ? chatName : chatUser.name}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                        <IoCheckmarkOutline className="text-gray-200" />
                        <p className="text-sm text-gray-200">messages</p>
                    </div>
                </div>
            </div>
            <div className="space-y-2 flex flex-col items-end">
                <div>
                    <p className="text-white text-xs">12:08 pm</p>
                </div>
                <div className="w-5 h-5 rounded-full bg-[#00A884] text-center">
                    <p className="text-sm font-medium">3</p>
                </div>
            </div>
        </div>
    );
}

export default ChatCard;
