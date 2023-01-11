import React ,{useState} from 'react'
import {addDoc, collection} from 'firebase/firestore';
import { auth ,db, storage} from '../firebase/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";



import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddGallary() {

  const [data, setdata] = useState({
    title: "",
    description: "",
    imageurl:""
  });
  const [file, setfile] = useState(null);

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setdata((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    })
    ;
  };

  const upload = async (e) => {
    e.preventDefault();
    e.preventDefault();
    if (!data.title || !data.description) {
      alert("invalid details");
    }
    try {
      const storageRef = await ref(storage,file.name);
      const uploadTask = await uploadBytesResumable(storageRef,file)
      console.log(uploadTask)
       const downloadurl = await getDownloadURL(uploadTask.ref);
       console.log(downloadurl)
       await setdata( (prev)=>({...prev, imageurl:downloadurl}))
       await addDoc(collection(db, "gallary"), {
        ...data,
        imageurl:downloadurl,

        
      });
      // await addDoc(collection(db, "gallaryimage"), {
        
      //   imageurl:downloadurl,

        
      // });




     
    } catch (err) {
      
      alert(err);
    }



  }

  return (
    <div>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label></Form.Label>Title
          <Form.Control type="text" placeholder="Title" name="title" value={data.title} onChange={inputEvent}/>
          <Form.Text className="text-muted">
            add title
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="add description" name="description" value={data.description} onChange={inputEvent}/>
        </Form.Group>

        <div>
          <label for="formFileLg" class="form-label">upload cover images</label>
          <input class="form-control form-control-lg"  type="file" name="imageurl" onChange={(e) =>{ setfile(()=> e.target.files[0])
          console.log(e.target.files[0].name)}} />
        </div>
        <Button variant="primary" type="submit" onClick={upload} > 
          Submit
        </Button>
      </Form>


    </div>
  )
}

export default AddGallary

//onClick={upload}
