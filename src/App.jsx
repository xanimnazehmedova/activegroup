import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Router } from 'react-router-dom';
import Home from './pages/home/Home'
import About from './pages/about/About';
import Brands from './pages/brandspage/Brands';
import BrandDetail from './pages/brand-detail/BrandDetail';
import Contact from './pages/contact/Contact';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Photogallery from './pages/photogallery/Photogallery';
import Blog from './pages/blogpage/Blog';
import BlogDetail from './pages/blog-detail/BlogDetail';
import ScrollTop from "./ScrollTop";

function App() {

  return (
 <>
  <>

  <ScrollTop/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/brands' element={<Brands/>}/>
  <Route path='/brands/:name' element={<BrandDetail/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/photogallery' element={<Photogallery/>}/>
  <Route path='/blogs' element={<Blog/>}/>
  <Route path='/blogs/:slug' element={<BlogDetail/>}/>
 </Routes>

  </>
 </>
  )
}

export default App
