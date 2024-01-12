import { IoCheckmarkOutline } from "react-icons/io5";

function ChatCard({image,userName,lastMessage,timeStamp, messageCount}){
    return(
        <div className="w-[98%] p-3 border-b-2 border-gray-800 flex justify-between cursor-pointer hover:bg-[#222E35]">
            <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white cursor-pointer">
                    <img className=" w-full h-full rounded-full object-cover" src={image} alt="" />
                </div>
                <div className="ml-3 text-white">
                    <div>
                       <p className="text-xl font-medium">{userName}</p> 
                    </div>
                    <div className="flex items-center space-x-1">
                        <IoCheckmarkOutline className="text-gray-200"/>
                        <p className="text-sm text-gray-200">{lastMessage}</p>
                    </div>
                </div> 
            </div>
            <div className="space-y-1 flex flex-col items-end">
                <div>
                    <p className="text-white text-xs">{timeStamp} pm</p>
                </div>
                <div className="w-5 h-5 rounded-full bg-[#00A884] text-center">
                    <p className="text-sm font-medium">{messageCount}</p>
                </div>
            </div>
            
        </div>
    )
}

export default ChatCard;