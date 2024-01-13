import React, { useState } from 'react';
import { IoMdArrowBack } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import { IoCheckmarkOutline } from 'react-icons/io5';
import { FaRegFaceSmile } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const Profile = ({closeOpenProfile}) => {

    const [isPenClicked, setIsPenClicked]=useState(false);
    const [isAboutPenClicked, setIsAboutPenClicked]=useState(false);
    const [userName, setUserName]=useState('Missing');
    const [about, setAbout]=useState('If you are bad then I am your dad');
    const navigate=useNavigate();

    const handleRenameUserName=()=>{

        setIsPenClicked(false);
    }
    const handleRenameAbout=()=>{

        setIsAboutPenClicked(false);
    }

  return (
    <div>
        {/* profile header */}
        <div className='w-full md:w-[40%] h-28 bg-[#222e35da] fixed top-0 z-50'>
            <div className='w-full md:md:w-[46%] h-full flex flex-col justify-end'> 
                <div className='flex space-x-5 items-center text-xl font-medium text-gray-200 ml-6 mb-4'>
                    <IoMdArrowBack className='cursor-pointer' onClick={closeOpenProfile}/>
                    <p>Profile</p>
                </div>
            </div>
        </div>

        {/* main section  */}
        <div className='mt-28 overflow-y-scroll space-y-8 h-[80vh]'>

            {/* image section */}
            <div className='h-60 flex items-center justify-center'>  
                <div className='w-[15vw] h-[15vw] rounded-full bg-white cursor-pointer'>
                    <label htmlFor="imageInput">
                        <img className=' w-full h-full rounded-full object-cover cursor-pointer' src="https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045_1280.jpg" alt="" />
                    </label>
                    <input type="file" id='imageInput' accept="image/*" className=' w-full h-full rounded-full object-cover hidden' />
                </div>
            </div>

            {/* name section  */}
            <div className='h-30 flex flex-col space-y-2 px-8'>
                <div>
                    <p className='text-sm font-medium text-[#005C4B]'>Your name</p>
                </div>
                {
                    !isPenClicked ?
                    <div className='flex justify-between items-center'>
                        <p className='py-3 text-gray-300'>{userName}</p>
                        <FaPen className='cursor-pointer text-gray-400' onClick={()=>setIsPenClicked(true)}/>
                    </div>
                    :
                    <div className='flex py-2 items-center border-b-2 border-gray-400'>
                        <input type="text" value={userName} className='flex-1 bg-transparent outline-none text-gray-300' onChange={(e)=>{
                            setUserName(e.target.value);
                        }}/>
                        <div className='flex space-x-2'>
                            <FaRegFaceSmile className="text-gray-400 cursor-pointer text-xl"/>
                            <IoCheckmarkOutline className="text-gray-400 cursor-pointer text-2xl" onClick={handleRenameUserName}/>
                        </div>
                    </div>
                }
                <div>
                    <p className='text-gray-500 text-sm'>This is not your username or pin, This anme will be visisble to your WhatsApp contacts </p>
                </div>
            </div>

            {/* about section  */}
            <div className='h-30 flex flex-col space-y-2 px-8 pb-5'>
                <div>
                    <p className='text-sm font-medium text-[#005C4B]'>About</p>
                </div>
                {
                    !isAboutPenClicked ?
                    <div className='flex justify-between items-center'>
                        <p className='py-3 text-gray-300'>{about}</p>
                        <FaPen className='cursor-pointer text-gray-400' onClick={()=>setIsAboutPenClicked(true)}/>
                    </div>
                    :
                    <div className='flex py-2 items-center border-b-2 border-gray-400'>
                        <input type="text" value={about} className='flex-1 bg-transparent outline-none text-gray-300' onChange={(e)=>{
                            setAbout(e.target.value);
                        }}/>
                        <div className='flex space-x-2'>
                            <FaRegFaceSmile className="text-gray-400 cursor-pointer text-xl"/>
                            <IoCheckmarkOutline className="text-gray-400 cursor-pointer text-2xl" onClick={handleRenameAbout}/>
                        </div>
                    </div>
                }
            </div>
        </div>
    </div>
  )
}

export default Profile;