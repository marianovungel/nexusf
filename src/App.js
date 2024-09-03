import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login, WellCome, Notification, Profile, Feed, Grup, MyChat, NovoArtigo, Editor, CreateDocs } from './pages/index';
import { Menu, Notify } from './components/index';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase';
import { useUserStore } from './lib/userStore';
import { useEffect } from 'react';
import NoPage from './pages/NoPage';
import VideoProvider from './pages/Video/VideoProvider';

function App() {


  const { 
    // isLoading, 
    currentUser, 
    fetchUserInfo 
  } = useUserStore()

  useEffect(()=>{
    const unSub = onAuthStateChanged(auth, (user)=>{
      fetchUserInfo(user?.uid)
    })

    return()=>{
      unSub();
    }
  }, [fetchUserInfo])

  // if(isLoading) return <div className='loading'>Processando...</div>

  return (
      <Router>
        <Menu />
        <Notify />
        <Routes> 
          <Route path="/" element={ <WellCome /> } exact />
          <Route path="/grupo" element={  currentUser ? <Grup /> : <Login />  } exact />
          <Route path="/feed" element={ currentUser ? <Feed /> : <Login />  } exact />
          <Route path="/notification" element={  currentUser ? <Notification /> : <Login />   } exact />
          <Route path="/profile" element={  currentUser ? <Profile /> : <Login />  } exact />
          <Route path="/novo-artigo" element={ currentUser ? <NovoArtigo /> : <Login /> } exact />
          <Route path="/documentos" element={  currentUser ? <Editor />  : <Login />  } exact />
          <Route path="/createDocs/:docsId" element={ currentUser ? <CreateDocs />  : <Login /> } />
          <Route path="/chat" element={ currentUser ? <MyChat />  : <Login /> } exact />
          <Route path="/video" element={ currentUser ? <VideoProvider />  : <Login /> } exact />
          <Route path="/login" element={currentUser ? <WellCome />  : <Login />} exact />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
  );
}

export default App;