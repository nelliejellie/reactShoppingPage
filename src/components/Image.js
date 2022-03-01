import React from 'react'
import { useState, useRef, useContext} from 'react'
import mainImage from '../images/mainImage.jpg'
import imageone from '../images/image1thumbnail.jpg'
import imagetwo from '../images/image2thumbnail.jpg'
import imagethree from '../images/image3thumbnail.jpg'
import imagefour from '../images/image4thumbnail.jpg'
import { FiArrowLeftCircle, FiArrowRightCircle} from 'react-icons/fi'
import "../styles/image.css"
import { DataContext } from '../context/DataContext'

const Image = () => {
    const {data, setData} = useContext(DataContext);
    
    let mainImageDisplay = useRef(null); 
    const [imageCount, setImageCount] = useState(0)
    const imagesArray = [mainImage,imagetwo,imagethree,imagefour];
    const GetNextBackwardsImage = () =>{
        console.log("going back....")
        imageCount < 1 ? setImageCount(3) : setImageCount(imageCount - 1)
    } 
    const GetNextForwardsImage = () =>{
        console.log("going forward....")
        imageCount <= 2 ? setImageCount(imageCount + 1):setImageCount(0)
    }
    const ChangeMainImage = () =>{
        console.log(mainImageDisplay)
    }
    return (
    <div className='mt-4'>
        <img
         src={imagesArray[imageCount]}
         className='w-4/5 h-2/5 rounded-md sm:absolute top-16 sm:w-4/5 sm:ml-2' 
         ref={mainImageDisplay}
         onClick={ChangeMainImage}
         />
        <div className='flex justify-between w-4/5 mt-4 sm:hidden'>
            <img src={imageone} alt="" className='w-1/6 rounded-md img' onClick={()=>{setImageCount(0)}} />
            <img src={imagetwo} alt="" className='w-1/6 rounded-md img' onClick={()=>{setImageCount(1)}}/>
            <img src={imagethree} alt="" className='w-1/6 rounded-md img' onClick={()=>{setImageCount(2)}}/>
            <img src={imagefour} alt="" className='w-1/6 rounded-md img' onClick={()=>{setImageCount(3)}}/>
        </div>
        <div className='stuff sm:visible flex w-16 h-16 mt-48 w-80 ml-4 justify-between absolute top-0'>
            <FiArrowLeftCircle className='text-xl te bg-white rounded-lg' onClick={GetNextBackwardsImage}/>
            <FiArrowRightCircle className='text-xl te bg-white rounded-lg' onClick={GetNextForwardsImage}/>
        </div>
    </div>
  )
}

export default Image