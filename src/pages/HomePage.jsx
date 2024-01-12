import { PiCircleDashedBold } from "react-icons/pi";
import { MdOutlineChat } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import ChatCard from "../components/ChatCard";

function HomePage(){
    return(
        <div className="w-full h-screen bg-[#222E35] flex overflow-hidden">
            <div className="w-[40%] bg-[#111B21]">
                <div className="h-14 bg-[#222e35da] flex items-center">
                    <div className="w-[95%] mx-auto flex justify-between">
                        <div className="w-10 h-10 rounded-full bg-white cursor-pointer">
                            <img className=" w-full h-full rounded-full object-cover" src="https://cdn.pixabay.com/photo/2016/10/17/19/40/indians-1748464_1280.jpg" alt="" />
                        </div>
                        <div className="flex space-x-8 text-2xl my-auto text-gray-400">
                            <PiCircleDashedBold className="cursor-pointer"/>
                            <MdOutlineChat className="cursor-pointer"/>
                            <BiDotsVerticalRounded className="cursor-pointer"/>
                        </div>
                    </div>  
                </div>
                <div className="ml-3 mt-2 flex items-center">
                    <div className="w-[92%] h-9 rounded-lg flex justify-items-start items-center space-x-8 bg-[#202C33]">
                        <IoIosSearch  className="text-gray-400 ml-4 text-xl cursor-pointer"/>
                        <input type="text" 
                            className="bg-transparent focus:outline-none text-white text-sm w-full" 
                            placeholder="Search or start new chat"
                        />
                    </div>
                    <IoFilter className="text-gray-400 mx-auto text-base cursor-pointer"/>
                </div>
                <div 
                className="w-full h-full ml-3 mt-2  overflow-y-auto">
                    {
                        [1,2,3,4,5,6,7,8,9].map(item=><ChatCard/>)

                    }
                </div>
            </div>
            <div className="">
            </div>
    
        </div>
    );
}

export default HomePage;