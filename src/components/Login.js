import React, {useState} from 'react'
import "../styles/Login.css"
import {auth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword} from "../firebase";
import { useDispatch } from 'react-redux';
import { login }from "../features/userSlice";

function Login() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch()

  const register = (e) => {

    if(!name){
      return alert("Please enter a full name");
    }

    createUserWithEmailAndPassword(auth, email, password).then((userAuth) => {
      updateProfile(userAuth.user, {
        displayName : name,
        photoURL : profilePic
      }).then(() => {
        dispatch(login({
          email : userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoURL: profilePic
        }))
      })
    }).catch(err => {
      alert(err)
    })

  }
  
  const loginToApp = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password).then((userAuth) => {
      console.log("user logged in")
      dispatch(login({
        email : userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: userAuth.user.displayName,
        photoURL: userAuth.user.photoURL
      }))
    }).catch(err => {
      alert(err.message);
    })
  }

  return (
    <div className="login">
      <img
        src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011-2019.png"
        alt="linkedin"
      />  

      <form>
        <input value={name} placeholder="Full name (required if registered)" type="text" onChange={e => setName(e.target.value)} />
        <input value={profilePic} placeholder="Profile pic URL (optional)" type="text" onChange={e => setProfilePic(e.target.value)} />
        <input value={email} placeholder="Email" type="email" onChange={e => setEmail(e.target.value)} />
        <input value={password} type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <button type="submit" onClick={loginToApp}>Sign In</button>
      </form>
      <p>Not a member?{" "}
        <span className="login__register" onClick={register}>Register Now</span>
      </p>
    </div>
  )
}

export default Login