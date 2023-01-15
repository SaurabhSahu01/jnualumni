import React, {useEffect} from 'react'
import FinalHeader from '../components/FinalHeader'
import Footer from '../components/Footer/Footer'
import FeedCards from '../components/FeedCards';
import AddPost from '../components/AddPost';
import EventCard from '../components/EventCard';
import { useUserAuthContext } from '../context/UserContext';
import "../style/Feeds.css"
function Feeds() {
const {setcurrentPage} = useUserAuthContext();

// const showfeed = async () => {

// }

useEffect(() => {
  setcurrentPage(window.location.pathname);
}, [])

// useEffect(()=>{
//   // fetch data from the database, on change display the feeds
//   showfeed();
// }, [])

  return (
    <>
        <FinalHeader></FinalHeader>
        
        <div className="h-[100vh] w-11/12 mx-auto gap-2 grid grid-cols-9 justify-items-center">
          <div className='cards col-span-6 h-[100%] w-[100%]'>
            <AddPost></AddPost>
            <FeedCards name="saurabh" message="hi"></FeedCards>
            <FeedCards name="saurabh" message="hi"></FeedCards>
            <FeedCards name="saurabh" message="hi"></FeedCards>
            <FeedCards name="saurabh" message="hi"></FeedCards>
            <FeedCards name="saurabh" message="hi"></FeedCards>
            <FeedCards name="saurabh" message="hi"></FeedCards>
            <FeedCards name="saurabh" message="hi"></FeedCards>
            <FeedCards name="saurabh" message="hi"></FeedCards>
            <FeedCards name="saurabh" message="hi"></FeedCards>
            <FeedCards name="saurabh" message="hi"></FeedCards>
            <FeedCards name="saurabh" message="hi"></FeedCards>
            <FeedCards name="saurabh" message="hi"></FeedCards>
            <FeedCards name="saurabh" message="hi"></FeedCards>
            <FeedCards name="saurabh" message="hi"></FeedCards>
            <FeedCards name="saurabh" message="hi"></FeedCards>
            <FeedCards name="saurabh" message="hi"></FeedCards>
            <FeedCards name="saurabh" message="hi"></FeedCards>
            <FeedCards name="saurabh" message="hi"></FeedCards>
            <FeedCards name="saurabh" message="hi"></FeedCards>
          </div>
          <div className='cards col-span-3 w-[80%] mx-auto'>
              <EventCard></EventCard>
              <EventCard></EventCard>
              <EventCard></EventCard>
              <EventCard></EventCard>
              <EventCard></EventCard>
              <EventCard></EventCard>
              <EventCard></EventCard>
              <EventCard></EventCard>
              <EventCard></EventCard>
              <EventCard></EventCard>
              <EventCard></EventCard>
              <EventCard></EventCard>
              <EventCard></EventCard>
          </div>
        </div>
        <Footer></Footer>
    </>
  )
}

export default Feeds