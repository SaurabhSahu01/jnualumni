import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Car2 from '../images/NirmalaSitaraman.webp';
import {db} from '../firebase/firebase';
import { collection, doc,getDocs } from "firebase/firestore";
import "./Pages.css"

function ShowGallary() {

  const[imagearr, setimagearr] = useState([])
    
    const getImageUrl = async()=>{
        try{
            const docref = await collection(db,"gallary");
            // console.log("dataurl" ,docref)
            const data = await getDocs(docref);
            // data.docs.map((doc) => (console.log({ ...doc.data() })))
            setimagearr(data.docs.map((doc) => ({ ...doc.data() })))
        if(data){
           console.log(imagearr)
        }
 
        }catch(err){
            alert(err)
        }
       

    }

    useEffect(() => {
      getImageUrl();
    }, []);

   

    return (
        <div className='show__gallary'>
        <div className='event__name'> Gallery</div>
        {imagearr.map((image)=>{
            return(
            <div div className='sm:w-[18rem] w-[12rem] '>
            <Card >
                 <Card.Img variant="top" src={image.imageurl}  key={Math.random()}/>  
            <Card.Body >{image.title}</Card.Body>  
            </Card> 
            <br></br>
            </div>
            )
        })}
           
         
        </div>
    )
}

export default ShowGallary