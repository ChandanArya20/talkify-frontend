import { IoCheckmarkOutline } from "react-icons/io5";

function ChatCard(){
    return(
        <div className="w-[98%] p-3 border-b-2 border-gray-800 flex justify-between cursor-pointer hover:bg-[#222E35]">
            <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white cursor-pointer">
                    <img className=" w-full h-full rounded-full object-cover" src="https://cdn.pixabay.com/photo/2016/03/27/21/52/woman-1284411_1280.jpg" alt="" />
                </div>
                <div className="ml-3 text-white">
                    <div>
                       <p className="text-xl font-medium">Gulshan</p> 
                    </div>
                    <div className="flex items-center space-x-1">
                        <IoCheckmarkOutline className="text-gray-200"/>
                        <p className="text-sm text-gray-200">How are you?</p>
                    </div>
                </div> 
            </div>
            <div className="space-y-1 flex flex-col items-end">
                <div>
                    <p className="text-white text-xs">4:56 pm</p>
                </div>
                <div className="w-5 h-5 rounded-full bg-[#00A884] text-center">
                    <p className="text-sm font-medium">12</p>
                </div>
            </div>
            
        </div>
    )
}

export default ChatCard;