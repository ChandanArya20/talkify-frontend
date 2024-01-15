import React, { useState } from 'react'
import StatusCard from './StatusCard'
import { IoMdArrowBack } from 'react-icons/io'
import MyStatusCard from './MyStatusCard'
import { BsLockFill } from "react-icons/bs";
import statusData from '../assets/statusData';
import StatusViewer from './StatusViewer';
import loginuser from '../assets/loginuser.jpg';

const Status = ({closeOpenStatus}) => {

    const [status, setStatus] = useState(statusData);
    const [isViewerOpen, setIsViewerOpen] = useState(false); 
    const [selectedStatus, setSelectedStatus] = useState(null); 

    const openStatusViewer = (status) => {
        setSelectedStatus(status);
        setIsViewerOpen(true);
    };
    
    const closeStatusViewer = () => {
        console.log("close status viewer");
        setIsViewerOpen(false);
    };

    const item={
        statusImages:loginuser,
        statusTimeStamp:"no updates"
    }

  return (
    <div className='flex flex-col'>
        {/* status header  */}
        <div className='w-full md:w-[40%] fixed top-0 z-50'>
            <div className='w-full h-28 bg-[#222e35da] '>
                <div className='w-full md:md:w-[40%] h-full flex flex-col justify-end'> 
                    <div className='flex space-x-5 items-center text-xl font-medium text-gray-200 ml-6 mb-4'>
                        <IoMdArrowBack className='cursor-pointer' onClick={closeOpenStatus}/>
                        <p>Status</p>
                    </div>
                </div>
            </div>
            <div className='px-2 mt-5'>
                <MyStatusCard {...item} />
            </div>
        </div>

        {/* user status  */}
        <div className='mt-[200px] w-full overflow-y-auto h-[65vh] '>
            <div >
                <p className='text-base text-[#216b5d] p-8'>RECENT</p>
            </div>

            <div className='flex flex-col space-y-2 '>
                {
                    statusData.map((item)=>
                        <div key={item.id} onClick={() => openStatusViewer(item)}>
                            <StatusCard {...item}/>
                        </div>
                    )
                }
            </div>
            <div className=' mx-auto'>
                <div className='w-[100%] py-10 flex items-center justify-center space-x-1 text-xs text-gray-400'>
                    <BsLockFill className='text-xs text-gray-400' />
                    <p className>
                        Your status updates are  
                        <span className='text-[#53BDEB] ml-1'>end-to-end-encrypted</span>
                    </p>
                </div>
            </div>
        </div>
        {/* StatusViewer modal */}
        {isViewerOpen && (
        <StatusViewer
          status={selectedStatus}
          closeStatusViewer={closeStatusViewer}
        />
      )}
    </div>
  )
}

export default Status