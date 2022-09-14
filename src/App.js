import { getBlogs } from './services/fakeBlogServices';
import { getMembers } from './services/fakeMembresService';
import Landing from './pages/Landing';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import JoinFrom from './pages/JoinForm';
import Completed from './components/others/Completed';
import Error404 from './components/others/Error404';
import FormationForm from './pages/FormationForm';
import Approved from './components/others/Approved';
import BlogsPage from './pages/BlogsPage';
import Blog from './pages/Blog';



function App() {
  const blogs = getBlogs();
  const members = getMembers();
  const message = 'You will be E-mailed or texted with the stands locations and times for payment';


  return (
    <>
       <Routes>
        <Route path='/completed/:success/:day?/:place?/:hour?' element={ <Completed />} />
        <Route path='/blogs/:id' element={<Blog />} />
        <Route path='/blogs' element={<BlogsPage blogs={blogs} itemsPerPage={2}/>} />
        <Route path='/join-form' element={<JoinFrom />}/>
        <Route path='/join-form/approved' element={<Approved message={message} />}/>
        <Route path='/formation-form/approved' element={<Approved message={message} />} />
        <Route path='/formation-form' element={<FormationForm />} />
        <Route path='/' element={<Landing blogs={blogs} members={members} />}/>
        <Route path='*' element={<Error404 />} />
        
      </Routes>  
    </>
  );
}

export default App;
