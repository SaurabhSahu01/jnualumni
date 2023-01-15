import React, { useEffect } from 'react'
import FinalHeader from '../components/Header/FinalHeader'
import Footer from '../components/Footer/Footer'
import FeedCards from '../components/Feeds/FeedCards';
import AddPost from '../components/Feeds/AddPost';
import { useUserAuthContext } from '../context/UserContext';
import "../style/Feeds.css"
function Feeds() {
  const { setcurrentPage } = useUserAuthContext();

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

      <div className="h-[100vh] w-11/12 mx-auto grid justify-items-center">
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
      </div>
      <Footer></Footer>
    </>
  )
}

export default Feeds