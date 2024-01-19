import React, { useEffect, useState } from "react";
import { IoIosSearch, IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import SelectedGroupMember from "./SelectedGroupMember";
import chatUserData from "../assets/chatUserData";
import ChatUserCard from "./ChatUserCard";

const AddNewUser = ({ closeAddNewUserSection }) => {
    
    const [query, setQuery] = useState("");
    const [isSearchClicked, setIsSearchClicked]=useState(false);
    const [chatUsers, setChatUsers] = useState(chatUserData);

    // Function to handle search
    const handleSearch = (query) => {
        const filteredChatUsers = chatUserData.filter((chatUser) =>
            chatUser.userName.toLowerCase().includes(query.toLowerCase())
        );
        setChatUsers(filteredChatUsers);
    };

    return (
        <div className="flex w-full h-full flex-col justify-between">
            {/* Group header */}
            <div className="w-full h-14 md:h-28 bg-[#222e35] ">
                <div className="w-full h-full flex flex-col justify-center md:justify-end">
                    <div className="w-full flex space-x-7 items-center font-semibold text-gray-300 ml-2 md:ml-6 md:mb-4">
                        <IoMdArrowBack
                            className="cursor-pointer text-2xl"
                            onClick={closeAddNewUserSection}
                        />
                        <p className="text-xl">New chat</p>
                    </div>
                </div>
            </div>

            {/* Search input */}
            <div className="h-9 rounded-lg flex justify-items-start items-center space-x-5 bg-[#202C33] my-2 mx-1 md:mx-3">
                <div className="w-12 h-12 ml-1 flex items-center justify-center">
                    {
                        !isSearchClicked ?
                        <IoIosSearch 
                            className="text-gray-400 text-xl cursor-pointer" 
                            onClick={()=>setIsSearchClicked(true)}
                        /> :
                        <IoMdArrowBack
                            className="text-[#00A884] text-2xl cursor-pointer"
                            onClick={()=>setIsSearchClicked(false)}
                        />
                    }
                </div>
                <input
                    type="text"
                    className="bg-transparent focus:outline-none text-white text-sm w-full"
                    placeholder="Search name or number"
                    autoFocus={isSearchClicked}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        handleSearch(e.target.value);
                    }}
                    onClick={()=>setIsSearchClicked(true)}
                />
            </div>

            <div className="flex-1 overflow-y-scroll">
                <div>
                    <p className="text-base text-[#00a884ab] p-8">CONTACTS ON WHATSAPP</p>
                </div>

                {/* Display available chat users */}
                <div >
                    {chatUsers.map((item, index) => (
                        <div key={index} onClick={() => addGroupMember(item)}>
                            <ChatUserCard {...item} />
                        </div>
                    ))}
                </div>
            </div>

           
        </div>
    );
};

export default AddNewUser;
