import { PiCircleDashedBold } from "react-icons/pi";
import { MdOutlineChat } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { RiWechat2Line } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import ChatCard from "../components/ChatCard";
import { Profiler, useEffect, useState } from "react";
import chatsData from "../assets/chatsData";
import ChatDetails from "../components/ChatDetails";
import Profile from "../components/profile";
import { useNavigate } from "react-router-dom";
import Status from "../components/Status";
import { Menu, MenuItem } from "@mui/material";

function HomePage() {
    const [query, setQuery] = useState("");
    const [chats, setChats] = useState(chatsData);
    const [isFilterClicked, setIsFilterClicked] = useState(false);
    const [currentChat, setCurrentChat]= useState(false);
    const [isProfile, setIsProfile]= useState(false);
    const [isStatus, setIsStatus]= useState(false);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigate=useNavigate();

    const handleSearch = (query) => {
        const filteredChats = chatsData.filter((chat) =>
            chat.userName.toLowerCase().includes(query.toLowerCase())
        );
        setChats(filteredChats);
    };

    const handleFilterClick = () => {
        setIsFilterClicked(!isFilterClicked);
    };

    const handleCurrentChatClick=()=>{
        if (window.innerWidth < 640) {
            // for small devices
            navigate('/chat-details'); 
        } else {
            // for medium or larger devices
            setCurrentChat(true);
        }
    }

    const handleProfileClick=()=>{
        setIsProfile(true);
    }

    const closeOpenProfile=()=>{
        setIsProfile(false);
    }

    const closeOpenStatus=()=>{
        setIsStatus(false);
    }

    return (
        <div className="w-full h-screen bg-[#222E35] flex overflow-hidden">
            {/* Left Section */}
            <div className="w-[100%] md:w-[40%] bg-[#111B21] border-l-6 border-gray-200">
               
                    {isProfile && <Profile closeOpenProfile={closeOpenProfile} /> }
                    {isStatus && <Status closeOpenStatus={closeOpenStatus}/>}

                {   
                    !isProfile && !isStatus &&
                    (
                        <>
                        {/* Header */}
                        <div className="h-14 bg-[#222e35da] flex items-center">
                        <div className="w-[95%] mx-auto flex justify-between">
                            <div className="w-10 h-10 rounded-full bg-white cursor-pointer" onClick={handleProfileClick}>
                                <img
                                    className=" w-full h-full rounded-full object-cover"
                                    src="https://cdn.pixabay.com/photo/2016/10/17/19/40/indians-1748464_1280.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="flex space-x-7 text-2xl my-auto text-gray-400">
                                <FaPeopleGroup className="cursor-pointer"/>
                                <PiCircleDashedBold className="cursor-pointer" onClick={()=>setIsStatus(true)}/>
                                <RiWechat2Line className="cursor-pointer"/>
                                <MdOutlineChat className="cursor-pointer" />
                                <div>
                                    <BiDotsVerticalRounded className="cursor-pointer" onClick={handleClick}/>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>New group</MenuItem>
                                        <MenuItem onClick={handleClose}>New community</MenuItem>
                                        <MenuItem onClick={handleClose}>Starred messages</MenuItem>
                                        <MenuItem onClick={handleClose}>Select Chats</MenuItem>
                                        <MenuItem onClick={handleClose}>Settings</MenuItem>
                                        <MenuItem onClick={handleClose}>Log out</MenuItem>
                                    </Menu>
                                </div>
                            </div>
                        </div>
                        </div>
                        {/* Search Bar */}
                        <div className="ml-3 mt-2 flex items-center">
                            <div className="w-[87%] md:w-[92%] h-9 rounded-lg flex justify-items-start items-center space-x-8 bg-[#202C33]">
                                <IoIosSearch className="text-gray-400 ml-4 text-xl cursor-pointer" />
                                <input
                                    type="text"
                                    className="bg-transparent focus:outline-none text-white text-sm w-full"
                                    placeholder="Search or start new chat"
                                    onChange={(e) => {
                                        setQuery(e.target.value);
                                        handleSearch(e.target.value);
                                    }}
                                />
                            </div>
                            <div 
                                className={`m-auto w-8 h-8 md:w-6 md:h-6 rounded-full flex items-center justify-center ${
                                    isFilterClicked ? 'bg-[#00A884]' : ''
                                }`}
                                onClick={handleFilterClick}
                            >
                            <IoFilter className={`text-xl md:text-base cursor-pointer ${isFilterClicked?'text-white':'text-gray-400'}`}/>
                            </div>  
                        </div>
                        {/* Chat Cards */}
                        <div className="w-full h-[83vh] ml-3 mt-2 overflow-y-scroll pb-5">
                            {chats.map((item) => (
                                <div key={item.id} onClick={handleCurrentChatClick}>
                                    <ChatCard  {...item} />
                                </div>
                            ))}
                        </div>
                        </>
                    )
                }
                </div>
                
            {/* Right Section */}
            <div className="hidden md:flex md:w-[60%] border-l-2 border-gray-700">
                {
                    currentChat ? (
                        <ChatDetails/>
                    ):      
                    <div className="w-full h-screen flex flex-col items-center justify-center space-y-5">
                        {/* Image */}
                        <div className="w-[280px]">
                            <img
                                className="rounded-md brightness-90"
                                src="https://img.freepik.com/free-vector/business-people-arranging-appointment-digital-booking-app_74855-20006.jpg?w=826&t=st=1705066079~exp=1705066679~hmac=3cc2a5cbd4c09aaaeb62ba791709f1f7c2798a4718a6528cf30a6a6b74173ff3"
                                alt=""
                            />
                        </div>
                        {/* Text Content */}
                        <div className="text-white text-center space-y-5">
                            <h1 className="text-3xl font-semibold text-gray-200" >
                            Connect with your loved ones effortlessly
                            </h1>
                            <p className="text-sm text-gray-300">
                            Connect with your loved ones effortlessly. Stay in touch, <br />
                            share moments, and create lasting memories. Whether near or far, <br />
                            bring your conversations.
                            </p>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default HomePage;
