import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { selectUser } from './features/userSlice';
import {useSelector} from "react-redux"
import Login from './components/Login';
import { useEffect} from "react"
import {auth, onAuthStateChanged } from "./firebase"
import { useDispatch } from 'react-redux';
import { login, logout } from "./features/userSlice"
import {useState } from "react"
import Widgets from './components/Widgets';

function App() {
  const [loading, setLoading] = useState(true);
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, userAuth => {
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL
        }))
      }else {
        dispatch(logout())
      }
    })
    setLoading(false)
  },[])
  return (
    <>
    {!loading && (
      <div className="app">
        <Header />
        {!user && (
          <Login />
        )}
        {user && (
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
            {/* Widget */}
          </div>
        )}
      </div>
    )}
    </>
  );
}

export default App;
