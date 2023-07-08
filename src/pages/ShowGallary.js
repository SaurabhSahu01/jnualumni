import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Car2 from '../images/NirmalaSitaraman.webp';
import {db} from '../firebase/firebase';
import { collection, doc,getDocs } from "firebase/firestore";
import "./Pages.css"
import FinalHeader from '../components/Header/FinalHeader';


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

        <div className=''>
                  <FinalHeader></FinalHeader>

        {/* <div className='event__name float-left'> Gallery</div> */}


        <div class="container mb-6">
    <h6 class="mt-5  fs-1 fw-bold">Gallary</h6>
    <div class="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
			
{/* Horizontal image scroll  */}


{imagearr.map((image)=>{
            return<>
       	<div class="col-5  "style={{marginRight:'-6%'}}>

				<div class="card card-block card-1 top-card " >
                    <img src={image.imageurl} alt="" srcset="" style={{borderRadius:'10px',height:'350px'}}  />
                </div>                

			</div>     
            
            
            </>
        })}


		


    
    </div>
</div>


      
           




           <div class="container">

  <div class="row row-cols-4">

  {imagearr.map((image)=>{

return<>

<div class="col mb-5">
    

<div class="card card-block card-1 bottom-card " >
    <img src={image.imageurl} alt="" srcset="" style={{borderRadius:'10px',height:'250px'}}  />
</div>                

    
</div>


</>
      })}

 
  </div>
</div>


         
        </div>
    )
}

export default ShowGallary