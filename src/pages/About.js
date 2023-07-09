import React, {useEffect} from 'react'
import Footer from '../components/Footer/Footer'
import TeamCard from '../components/TeamCard'
import image from '../images/TeamCard.jpg' 
import { useUserAuthContext } from '../context/UserContext';
import FinalHeader from '../components/Header/FinalHeader';
function About() {
  const {setcurrentPage} = useUserAuthContext();
  useEffect(() => {
    setcurrentPage(window.location.pathname)
  }, [])
  
  return (
    <>
        <FinalHeader></FinalHeader>
        <div className='rounded bg-white w-11/12 mx-auto my-10 self-center p-6'>
          <h1 className='text-3xl'>About JAA </h1>
          <p>Our JNU days are the common thread that binds us and being alumni of JNU is a natural 
          continuation of that journey. We all should be connected and cherish the memories of the most 
          important years of our lives spent in the environs of JNU. A major credit for our success in life 
          is attributed to JNU and its unique way of formal and informal teaching, learning and training. 
          Despite being settled in our respective routines and careers and striving for greater heights, 
          we can never forget the contribution of JNU in shaping our lives. We must resolve to find time 
          to pay back to our alma mater in a way which will make JNU a better place to live and study. 
          The Alumni Association of JNU (JAA ) is a forum that can help connect you to your alma mater.
          JAA  is dedicated to bringing together the alumni on a common platform and building a channel 
          of personal and professional support for members through 'self-help' offered from within the 
          community. JAA  is proud to have, as its alumni, a collective of more than 80,000 social scientists, 
          scientists, civil servants, literary critics, media experts, foreign language experts, journalists, 
          political leaders, social activists, technologists, managers and entrepreneurs, who have served and 
          still contributing meaningfully to the growth and betterment of our society. This number needs to and 
          will continue to grow. JAA , apart from serving as a base for information about the alumni, has been 
          initiating and implementing programs and organizing events important for the alumni and the alma 
          mater. JNU is a leading national centre of excellence in higher education which aims to rank among 
          the top universities of the world. JNU believes in excellence combined with social responsibility 
          and commitment, and strives to become a benchmark for Indian universities. It is envisioned that 
          the members of JAA  will work as ambassadors of JNU and make it a global brand. JAA  recognizes the 
          alumni as important stakeholders in JNU's continuing quest to provide quality and meaningful
          education. It realises the enormous benefits that can be attained from the engagement and support 
          of its alumni who have considerable expertise in diverse fields and can help identify strategic 
          directions for JNU in the 21st century. One of the key objectives of JAA  is also to expand its 
          base of Life Members, who could be associated with JNU and the fellow alumni in various productive
           ways. Association of an alumnus with JNU as a Life Member of JAA  serves as a bridge between the 
           alumni community and the university. In this spirit, JAA  exhorts the alumni to acquire Life 
           Membership of JAA . Information about the same and the relevant process for acquiring membership 
           have been provided in the website of JAA .</p>
        </div>
        <div>
          <h1 className='text-center text-4xl'>Executive committee</h1>
          <div className='w-11/12 p-3 gap-3 m-auto my-3 flex flex-wrap justify-center'>


  <div className="card p-4 shadow-sm" style={{width: "18rem"}}><div className="card-body "><center> <h1 className="card-title h3">Shri. Jyoti Singh</h1> <p className="card-text">President</p> <p className="card-text">Class of 1986-1990</p></center></div></div>
  <div className="card p-4 shadow-sm" style={{width: "18rem"}}><div className="card-body "><center> <h1 className="card-title h3">Shri. Jyoti Singh</h1> <p className="card-text">President</p> <p className="card-text">Class of 1986-1990</p></center></div></div>
  <div className="card p-4 shadow-sm" style={{width: "18rem"}}><div className="card-body "><center> <h1 className="card-title h3">Shri. Jyoti Singh</h1> <p className="card-text">President</p> <p className="card-text">Class of 1986-1990</p></center></div></div>
  <div className="card p-4 shadow-sm" style={{width: "18rem"}}><div className="card-body "><center> <h1 className="card-title h3">Shri. Jyoti Singh</h1> <p className="card-text">President</p> <p className="card-text">Class of 1986-1990</p></center></div></div>
  <div className="card p-4 shadow-sm" style={{width: "18rem"}}><div className="card-body "><center> <h1 className="card-title h3">Shri. Jyoti Singh</h1> <p className="card-text">President</p> <p className="card-text">Class of 1986-1990</p></center></div></div>
  <div className="card p-4 shadow-sm" style={{width: "18rem"}}><div className="card-body "><center> <h1 className="card-title h3">Shri. Jyoti Singh</h1> <p className="card-text">President</p> <p className="card-text">Class of 1986-1990</p></center></div></div>
  <div className="card p-4 shadow-sm" style={{width: "18rem"}}><div className="card-body "><center> <h1 className="card-title h3">Shri. Jyoti Singh</h1> <p className="card-text">President</p> <p className="card-text">Class of 1986-1990</p></center></div></div>
  <div className="card p-4 shadow-sm" style={{width: "18rem"}}><div className="card-body "><center> <h1 className="card-title h3">Shri. Jyoti Singh</h1> <p className="card-text">President</p> <p className="card-text">Class of 1986-1990</p></center></div></div>
  <div className="card p-4 shadow-sm" style={{width: "18rem"}}><div className="card-body "><center> <h1 className="card-title h3">Shri. Jyoti Singh</h1> <p className="card-text">President</p> <p className="card-text">Class of 1986-1990</p></center></div></div>
  <div className="card p-4 shadow-sm" style={{width: "18rem"}}><div className="card-body "><center> <h1 className="card-title h3">Shri. Jyoti Singh</h1> <p className="card-text">President</p> <p className="card-text">Class of 1986-1990</p></center></div></div>
          
          </div>
        </div>
        <div>
          <h1 className='text-center text-4xl'>Development Team</h1>
          <div className='w-11/12 p-3 gap-3 m-auto my-3 flex flex-wrap justify-center'>
          <div className="card p-4 shadow-sm" style={{width: "18rem"}}><div className="card-body "><center> <h1 className="card-title h3">Shri. Jyoti Singh</h1> <p className="card-text">President</p> <p className="card-text">Class of 1986-1990</p></center></div></div>
          <div className="card p-4 shadow-sm" style={{width: "18rem"}}><div className="card-body "><center> <h1 className="card-title h3">Shri. Jyoti Singh</h1> <p className="card-text">President</p> <p className="card-text">Class of 1986-1990</p></center></div></div>
          <div className="card p-4 shadow-sm" style={{width: "18rem"}}><div className="card-body "><center> <h1 className="card-title h3">Shri. Jyoti Singh</h1> <p className="card-text">President</p> <p className="card-text">Class of 1986-1990</p></center></div></div>
          <div className="card p-4 shadow-sm" style={{width: "18rem"}}><div className="card-body "><center> <h1 className="card-title h3">Shri. Jyoti Singh</h1> <p className="card-text">President</p> <p className="card-text">Class of 1986-1990</p></center></div></div>
          <div className="card p-4 shadow-sm" style={{width: "18rem"}}><div className="card-body "><center> <h1 className="card-title h3">Shri. Jyoti Singh</h1> <p className="card-text">President</p> <p className="card-text">Class of 1986-1990</p></center></div></div>
          <div className="card p-4 shadow-sm" style={{width: "18rem"}}><div className="card-body "><center> <h1 className="card-title h3">Shri. Jyoti Singh</h1> <p className="card-text">President</p> <p className="card-text">Class of 1986-1990</p></center></div></div>
          <div className="card p-4 shadow-sm" style={{width: "18rem"}}><div className="card-body "><center> <h1 className="card-title h3">Shri. Jyoti Singh</h1> <p className="card-text">President</p> <p className="card-text">Class of 1986-1990</p></center></div></div>
   
          </div>
        </div>
        <Footer></Footer>
    </>
  )
}

export default About;