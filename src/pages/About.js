import React from 'react'
import Header from "../components/Header";
import Footer from '../components/Footer'
import TeamCard from '../components/TeamCard'
import image from '../images/TeamCard.jpg' 
import { useUserAuthContext } from '../context/UserContext';
import HeaderLogin from '../components/HeaderLogin';
function About() {
  const {userData} = useUserAuthContext();
  return (
    <>
        <div className="w-full">
        {(userData) ? (<HeaderLogin></HeaderLogin>) : (<Header></Header>)}
        
        <div className='rounded bg-white w-11/12 mx-auto my-10 self-center p-6'>
          <h1 className='text-3xl'>About AAJ</h1>
          <p>Our JNU days are the common thread that binds us and being alumni of JNU is a natural 
          continuation of that journey. We all should be connected and cherish the memories of the most 
          important years of our lives spent in the environs of JNU. A major credit for our success in life 
          is attributed to JNU and its unique way of formal and informal teaching, learning and training. 
          Despite being settled in our respective routines and careers and striving for greater heights, 
          we can never forget the contribution of JNU in shaping our lives. We must resolve to find time 
          to pay back to our alma mater in a way which will make JNU a better place to live and study. 
          The Alumni Association of JNU (AAJ) is a forum that can help connect you to your alma mater.
          AAJ is dedicated to bringing together the alumni on a common platform and building a channel 
          of personal and professional support for members through 'self-help' offered from within the 
          community. AAJ is proud to have, as its alumni, a collective of more than 80,000 social scientists, 
          scientists, civil servants, literary critics, media experts, foreign language experts, journalists, 
          political leaders, social activists, technologists, managers and entrepreneurs, who have served and 
          still contributing meaningfully to the growth and betterment of our society. This number needs to and 
          will continue to grow. AAJ, apart from serving as a base for information about the alumni, has been 
          initiating and implementing programs and organizing events important for the alumni and the alma 
          mater. JNU is a leading national centre of excellence in higher education which aims to rank among 
          the top universities of the world. JNU believes in excellence combined with social responsibility 
          and commitment, and strives to become a benchmark for Indian universities. It is envisioned that 
          the members of AAJ will work as ambassadors of JNU and make it a global brand. AAJ recognizes the 
          alumni as important stakeholders in JNU's continuing quest to provide quality and meaningful
          education. It realises the enormous benefits that can be attained from the engagement and support 
          of its alumni who have considerable expertise in diverse fields and can help identify strategic 
          directions for JNU in the 21st century. One of the key objectives of AAJ is also to expand its 
          base of Life Members, who could be associated with JNU and the fellow alumni in various productive
           ways. Association of an alumnus with JNU as a Life Member of AAJ serves as a bridge between the 
           alumni community and the university. In this spirit, AAJ exhorts the alumni to acquire Life 
           Membership of AAJ. Information about the same and the relevant process for acquiring membership 
           have been provided in the website of AAJ.</p>
        </div>
        </div>
        <div>
          <h1 className='text-center text-4xl'>Executive committee</h1>
          <div className='w-11/12 p-3 gap-3 m-auto my-3 flex flex-wrap justify-center'>
            <TeamCard className='inline-block' src={image} title='Shri. Rajesh Kumar' year='Class of 1986-1990' position='President'></TeamCard>
            <TeamCard className='inline-block' src={image} title='Shri. Rajesh Kumar' year='Class of 1986-1990' position='President'></TeamCard>
            <TeamCard className='inline-block' src={image} title='Shri. Rajesh Kumar' year='Class of 1986-1990' position='President'></TeamCard>
            <TeamCard className='inline-block' src={image} title='Shri. Rajesh Kumar' year='Class of 1986-1990' position='President'></TeamCard>
            <TeamCard className='inline-block' src={image} title='Shri. Rajesh Kumar' year='Class of 1986-1990' position='President'></TeamCard>
            <TeamCard className='inline-block' src={image} title='Shri. Rajesh Kumar' year='Class of 1986-1990' position='President'></TeamCard>
            <TeamCard className='inline-block' src={image} title='Shri. Rajesh Kumar' year='Class of 1986-1990' position='President'></TeamCard>
          </div>
        </div>
        <div>
          <h1 className='text-center text-4xl'>Development Team</h1>
          <div className='w-11/12 p-3 gap-3 m-auto my-3 flex flex-wrap justify-center'>
            <TeamCard className='inline-block' src={image} title='Shri. Rajesh Kumar' year='Class of 1986-1990' position='President'></TeamCard>
            <TeamCard className='inline-block' src={image} title='Shri. Rajesh Kumar' year='Class of 1986-1990' position='President'></TeamCard>
            <TeamCard className='inline-block' src={image} title='Shri. Rajesh Kumar' year='Class of 1986-1990' position='President'></TeamCard>
            <TeamCard className='inline-block' src={image} title='Shri. Rajesh Kumar' year='Class of 1986-1990' position='President'></TeamCard>
          </div>
        </div>
        <Footer></Footer>
    </>
  )
}

export default About;