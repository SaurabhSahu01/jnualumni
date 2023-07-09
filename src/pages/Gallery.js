import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Car2 from '../images/NirmalaSitaraman.webp';
import {db} from '../firebase/firebase';
import { collection, doc,getDocs } from "firebase/firestore";
import "./Pages.css"
import FinalHeader from '../components/Header/FinalHeader';
import Footer from '../components/Footer/Footer'


function Gallery() {

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

    <div>
            <FinalHeader></FinalHeader>

            <div className="container mb-6">
            <h6 className="mt-5  fs-1 fw-bold">Gallary</h6>
            <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
			
            {/* Horizontal image scroll  */}


            {imagearr.map((image)=>{
            return<>
       	    <div className="col-5  "style={{marginRight:'-6%'}}>

                    <div className="content top-card">
                    <div className="content-overlay"></div> <img className="content-image" src={image.imageurl} />
                    <div className="content-details fadeIn-bottom">
                         <h3 className="content-title">{image.title}</h3>
                         {/* <p className="content-text"><i className="fa fa-map-marker"></i> Russia</p> */}
                    </div>
                    </div>            

			</div>  
            </>
        })}


	 
            </div>
        </div>


      
           




    <div className="container">
{/* verical image cards */}
    <div className="row row-cols-4">

    {imagearr.map((image)=>{
    return<>

    <div className="col mb-5">
        
    <div className="content-bottom "> 
        <div className="content-overlay"></div> <img className="img-fluid content-image" src={image.imageurl} />
        <div className="content-details fadeIn-bottom">
        <h3 className="content-title">{image.title}</h3>
            {/* <p className="content-text"><i className="fa fa-map-marker"></i> Russia</p> */}
        </div>
        </div>            

    </div>  


</>
      })}

 
  </div>
</div>


<Footer></Footer>
 
        </div>
    )
}

export default Gallery