import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoIosSearch, IoMdArrowBack } from "react-icons/io";
import { FaRegFaceSmile } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { HiMicrophone } from "react-icons/hi2";
import { useState } from "react";
import { IoSend } from "react-icons/io5";
import MessageCard from "./MessageCard";
import { useNavigate } from "react-router-dom";

function ChatDetails({ userName }) {

    const [textMessage, setTextMessage] = useState("");
    const navigate = useNavigate();

    const handleSendMessage = () => {};

    return (
        <div className="w-full md:w-[60%] h-screen md:h-screen flex flex-col justify-between fixed">
            <div className="bg-[#222e35da]">
                {/* Header */}
                <div className="w-[95%] h-14 flex items-center justify-between mx-auto">
                    <div className="flex space-x-3 items-center">
                        {window.innerWidth < 640 && (
                            <IoMdArrowBack
                                className="cursor-pointer text-2xl text-gray-400"
                                onClick={() => navigate(-1)}
                            />
                        )}
                        {/* User avatar */}
                        <div className="w-10 h-10 rounded-full bg-white cursor-pointer">
                            <img
                                className="w-full h-full rounded-full object-cover"
                                src="https://cdn.pixabay.com/photo/2016/03/27/21/52/woman-1284411_1280.jpg"
                                alt=""
                            />
                        </div>
                        {/* User details */}
                        <div className="">
                            <p className="text-white font-medium text-lg">
                                {userName}
                            </p>
                            <p className="text-gray-400 text-sm">last seen</p>
                        </div>
                    </div>
                    {/* Search and more options icons */}
                    <div className="flex space-x-8 text-2xl my-auto text-gray-400">
                        <IoIosSearch className="cursor-pointer" />
                        <BiDotsVerticalRounded className="cursor-pointer" />
                    </div>
                </div>
            </div>

            {/* Middle content */}
            <div className="flex-1 bg-[#111B21] overflow-y-scroll">
                <div className="flex flex-col space-y-1 p-3 md:p-10 ">
                    {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, i) => (
                        <MessageCard
                            key={i}
                            isReqUserMsg={i % 3 == 0}
                            textMessage={"message"}
                        />
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="bg-[#222e35da]">
                <div className="w-full h-14 flex items-center justify-between">
                    <div className="flex space-x-4 md:space-x-6 p-3 md:p-6 text-2xl text-gray-400">
                        {/* Smile and Plus icons */}
                        <FaRegFaceSmile className="cursor-pointer" />
                        <FaPlus className="cursor-pointer" />
                    </div>
                    {/* Input for text message */}
                    <div className="w-[85%] h-10 rounded-lg flex justify-items-start items-center space-x-8 bg-[#2A3942]">
                        <input
                            type="text"
                            className="bg-transparent focus:outline-none text-white text-sm w-full p-4"
                            placeholder="Search or start new chat"
                            value={textMessage}
                            onChange={(e) => {
                                setTextMessage(e.target.value);
                            }}
                            onKeyDown={(e) => {
                                if (e.key == "Enter") {
                                    handleSendMessage();
                                    setTextMessage("");
                                }
                            }}
                        />
                    </div>
                    {/* Send button or microphone based on text input */}
                    <div className="p-3 md:p-4">
                        {textMessage ? (
                            <IoSend
                                className="cursor-pointer text-[#8696A0] text-2xl"
                                onClick={handleSendMessage}
                            />
                        ) : (
                            <HiMicrophone className="cursor-pointer text-[#8696A0] text-2xl" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatDetails;
