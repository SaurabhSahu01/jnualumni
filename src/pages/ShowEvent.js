import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Car2 from '../images/NirmalaSitaraman.webp';
import {db} from '../firebase/firebase';
import { collection, doc,getDocs } from "firebase/firestore";
import "./Pages.css"

function ShowEvent() { // do optimisation

  const[imagearr, setimagearr] = useState([])
    
    const getImageUrl = async()=>{
        try{
            const docref = await collection(db,"event");
           
            const data = await getDocs(docref);
            
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
        <div className='show__event' >
        <div className='event__name'> Event</div>
        {imagearr.map((image)=>{
            return<><Card style={{ width: '18rem' }} key={Math.random()}>  <Card.Body >{image.title}</Card.Body>  </Card> <br></br></>
        })}
           
         
        </div>
    )
}

export default ShowEvent