import React, { useEffect, useState } from "react";
import { stories } from "../assets/Stories";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import {
    MdOutlineArrowBackIos,
    MdOutlineArrowForwardIos,
    MdOutlineClose,
} from "react-icons/md";
import { FaRegFaceSmile, FaPlus } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";

const StatusViewer = () => {
    const [currentStoriesIndex, setCurrentStoriesIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [replyMessage, setReplyMessage] = useState("");
    const navigate = useNavigate();

    const handleNextStory = () => {
        if (currentStoriesIndex < stories.length - 1) {
            setCurrentStoriesIndex(currentStoriesIndex + 1);
            setActiveIndex(activeIndex + 1);
        } else {
            setCurrentStoriesIndex(0);
            setActiveIndex(0);
        }
    };

    const handleBackStory = () => {
        if (currentStoriesIndex > 0) {
            setCurrentStoriesIndex(currentStoriesIndex - 1);
            setActiveIndex(activeIndex - 1);
        } else {
            setCurrentStoriesIndex(0);
            setActiveIndex(0);
        }
    };

    useEffect(() => {
        // Auto-advance to the next story every 3 seconds
        const intervalId = setInterval(() => {
            handleNextStory();
        }, 3000);

        // Cleanup: Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [currentStoriesIndex]);

    const handleReplyMessage = () => {
        // Handle sending the reply message
    };

    return (
        <div className="w-full h-screen bg-[#222E35] overflow-hidden">
            <div className="w-full md:w-[95%] h-screen flex justify-between mx-auto">
                {/* Left arrow and close button */}
                <div>
                    <div className="text-white text-2xl h-full space-y-64 mt-5">
                        <IoMdArrowBack
                            className="cursor-pointer"
                            onClick={() => navigate(-1)}
                        />
                        {currentStoriesIndex > 0 && (
                            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                                <MdOutlineArrowBackIos
                                    className="cursor-pointer"
                                    onClick={handleBackStory}
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* Story content */}
                <div className="flex flex-1 justify-center mt-5">
                    <div className="relative">
                        <img
                            className="max-h-[84vh] object-contain"
                            src={stories?.[currentStoriesIndex].image}
                            alt=""
                        />
                        <div className="absolute top-0 w-full flex space-x-2 mt-3">
                            {
                                stories.map((item, index)=><ProgressBar key={index} duration={3000} index={index} activeIndex={activeIndex}/>)
                            }
                        </div>
                    </div>
                </div>

                {/* Right arrow and close button */}
                <div>
                    <div className="text-white text-2xl h-full space-y-64 mt-5">
                        <MdOutlineClose
                            className="cursor-pointer"
                            onClick={() => navigate(-1)}
                        />
                        {currentStoriesIndex < stories.length - 1 && (
                            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                                <MdOutlineArrowForwardIos
                                    className="cursor-pointer"
                                    onClick={handleNextStory}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-center fixed bottom-3 w-full">
                <div>
                    <div className="bg-[#111b21a6] rounded-lg">
                        <div className="w-full h-14 flex items-center justify-between mx-auto">
                            {/* Smile and Plus icons */}
                            <div className="flex space-x-6 p-3 text-2xl my-auto text-gray-400">
                                <FaRegFaceSmile className="cursor-pointer" />
                            </div>
                            {/* Input for text message */}
                            <div className="w-[85%] h-10 rounded-lg flex justify-items-start items-center space-x-8 bg-[#2A3942]">
                                <input
                                    type="text"
                                    className="bg-transparent focus:outline-none text-white text-sm w-full p-4 md:min-w-[50vw]"
                                    placeholder="Search or start new chat"
                                    value={replyMessage}
                                    onChange={(e) =>
                                        setReplyMessage(e.target.value)
                                    }
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            handleReplyMessage();
                                            setReplyMessage("");
                                        }
                                    }}
                                />
                            </div>
                            {/* Send button or microphone based on text input */}
                            <div className="p-4">
                                <IoSend
                                    className="cursor-pointer text-[#8696A0] text-2xl"
                                    onClick={handleReplyMessage}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatusViewer;
