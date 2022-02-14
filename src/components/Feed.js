import React, {useState, useEffect} from 'react'
import "../styles/Feed.css";
import CreateIcon from "@material-ui/icons/Create"
import InputOption from './InputOption';
import ImageIcon from "@material-ui/icons/Image"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from './Post';
import { postColRef, serverTimestamp , getDocs, addDoc, onSnapshot, query, orderBy } from '../firebase';
import { selectUser } from "../features/userSlice"
import { useSelector } from "react-redux"
import FlipMove from 'react-flip-move';

function Feed() {

   const [posts,setPosts] = useState([]);
   const [input, setInput] = useState("");
   const user = useSelector(selectUser)
   
   useEffect(() => {
       onSnapshot(query(postColRef, orderBy("timestamp", "desc") ), (snapshot) => {
           let posts = []
               snapshot.docs.forEach((doc) => {
                   const toReturn = {
                    id: doc.id,
                    data: {...doc.data()}
                    }
                    posts = [...posts, toReturn]
                    console.log(toReturn)
               })  
            console.log("markup" ,posts)
            setPosts(posts)
       })
   }, [])

   const sendPost = e => {
       e.preventDefault();

       addDoc(postColRef,
        {
            name: user.displayName,
            description : user.email,
            message : input,
            photoUrl : user.photoURL || '',
            timestamp : serverTimestamp()
        })

        setInput("");
   }

  return (
    <div className="feed">
      <div className="feed__inputContainer">
          <div className="feed__input">
              <CreateIcon />
              <form>
                  <input value={input} type="text" onChange={e => setInput(e.target.value)}/>
                  <button type="submit" onClick={sendPost}>Send</button>
              </form>
          </div>
          <div className="feed__inputOptions">
              <InputOption title="photo" Icon={ImageIcon} color="#70b5f9"/>
              <InputOption title="Video" Icon={SubscriptionsIcon} color="#e7a33e"/>
              <InputOption title="Event" Icon={EventNoteIcon} color="#c0cbcd"/>
              <InputOption title="Write article" Icon={CalendarViewDayIcon} color="#7fc15e"/>
          </div>
      </div>
      {/* Posts */}
      <FlipMove>
        {posts && posts.map(({id, data : {name,message,description,photoUrl}}) => (
            <Post key={id} name={name} description={description} photoUrl={photoUrl} message={message} />
        ))}
      </FlipMove>  

       {/* <Post name="Ibrahim Chahboune" description="This is a test" message="Wow this worked" />   */}

    </div>
  )
}

export default Feed
