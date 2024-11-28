import React,{useState, useEffect} from 'react'
import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../utils/axiosinstance'
import TravelStoryCard from '../../components/Cards/TravelStoryCard'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {MdAdd} from "react-icons/md"
import Modal from "react-modal"


export default function Home() {

  const navigate=useNavigate()
  const [userInfo, setuserInfo] = useState(null)
const [allStories, setallStories] = useState([])
  const [openAddEditModal,setOpenAddEditModal]=useState({isShown:false,type:"add",data:null})


  // get User info
  const getUserInfo=async()=>{
    try {
      const response=await axiosInstance.get("/get-user")
      if(response.data && response.data.user)
      {
        setuserInfo(response.data.user)
      }
    } catch (error) {
      if(error.response.status===401){
        localStorage.clear();
        navigate("/login")
      }
    }
  }

  // get all travel stories
  const getAllTravelStories=async()=>{
    try {
      const response=await axiosInstance.get("/get-all-stories")
      if(response.data && response.data.stories)
      {
        setallStories(response.data.stories)
      }
    } catch (error) {
     console.log("An unexpected error occurred. Please try again.")
  }}

  
  // Handle Edit Story Click
  const handleEdit=(data)=>{}


  // Handle Update Favourite
  const updateIsFavourite=async (storyData)=>{
    const storyId=storyData._id
    try {
      const response=await axiosInstance.put(
        "/update-is-favourite/"+storyId,
        {isFavourite:!storyData.isFavourite}
      )
      if (response.data && response.data.story) {
        toast.success("Story Updated Successfully")
        getAllTravelStories()
      }
    } catch (error) {
      
    }
  }

  useEffect(() => {
    getAllTravelStories()
    getUserInfo()
  
  
  }, [])
  

  return (
    <>
    <div>
      <Navbar userInfo={userInfo}/>
     <div className='container mx-auto py-10'>
      <div className='flex gap-7'>
        <div className='flex-1'>
          {allStories.length>0?(
            <div className='grid grid-cols-2 gap-4'>
              {allStories.map((item)=>{
                return (<TravelStoryCard key={item._id}
                imgUrl={item.imageUrl}
                title={item.title}
                story={item.story}
                date={item.visitedDate}
                visitedLocation={item.visitedLocation}
                isFavourite={item.isFavourite}
                onEdit={()=>handleEdit(item)}
                onClick={()=>handleViewStory(item)}
                onFavouriteClick={()=>updateIsFavourite(item)}
                />)
              })}
              </div>
          ):(<>Empty Card here</>)}
        </div>
      </div>
      <div className='w-[320px]'></div>
     </div>
    </div>

{/* Add and Edit Travel Story */}
<Modal isOpen={openAddEditModal.isShown} onRequestClose={()=>{}}
  style={{overlay:{backgroundColor:"rgba(0,0,0,0,2)",zIndex:999}}}
  appElement={document.getElementById("root")}
  className="modal-box">
    {/* <AddEditTravelStory/> */}
  </Modal>

    <button className='w-16 h-16 flex items-center justify-center rounded-full bg-primary hover:bg-cyan-400 fixed right-10 bottom-10' onClick={()=>{setOpenAddEditModal({isShown:true,type:"add",data:null})}}>
      <MdAdd className="text-[32px]  text-white"></MdAdd>
    </button>
    <ToastContainer/>
    </>
  )
}
