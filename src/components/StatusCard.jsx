import { IoCheckmarkOutline } from "react-icons/io5";

function StatusCard({userName, statusImages,stausTimeStamp}){

    console.log(userName);
    console.log(statusImages);
    console.log(stausTimeStamp);
    return(
        <div className="w-[98%] p-3 border-t-2 border-gray-800 flex justify-between cursor-pointer hover:bg-[#222E35]">
            <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-white cursor-pointer">
                    <img className=" w-full h-full rounded-full object-cover" src={statusImages} alt="" />
                </div>
                <div className="">
                    <div>
                       <p className="text-base font-medium text-gray-200">{userName}</p> 
                    </div>
                    <div className="flex items-center space-x-1">
                        <p className="text-sm text-gray-400">{stausTimeStamp}</p>
                    </div> 
                </div> 
            </div>
        </div>
    )
}

export default StatusCard;