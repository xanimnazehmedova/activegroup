import React, { useEffect } from 'react'
import blog_detail from '../../data/blog-detail';
import blogs from '../../data/blogs';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import './BlogDetail.css';
import '../blogpage/Blog.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import twemoji from 'twemoji';


const BlogDetail = () => {
  const {slug}= useParams()
  const detail = blog_detail.find((b)=> b.slug === slug)
const otherBlogs = blogs.filter((b) => b.slug !== slug).slice(0, 7);



   useEffect(() => {
          AOS.init({
              duration: 750, 
              once: false, 
              easing: 'ease-out', 
              offset: 100, 
          });
      }, []); 
      
    useEffect(() => {
      twemoji.parse(document.body, {
        folder: 'svg',
        ext: '.svg',attributes: () => ({
           class: "emoji"
        })
      });
    }, []);
  return (
    <div>
      <header className='sticky-top'>
        <Navbar/>
      </header>
      <main>
        <div className="row ">
       <section className="ui-blogDetail col-md-9">
         <div className="breadcrumb d-flex gap-2 text-center" >
          <Link to="/">Əsas Səhifə</Link>
          <span>&gt;&gt;</span>
          <Link to="/blogs">Bloq</Link>
          <span>&gt;&gt;</span>
          <span>{detail.title}</span>
        </div>
            <div className="ui-blogDetail-hero" style={{ backgroundImage: `url(${detail.banner})`}}>
                <div className="overlay">
                    <h1>{detail.title}</h1>
                    <p>{detail.date}</p>
                </div>
            </div>

            <div className="container">
               <div className='post'>
                 <div className='post-content'>
                      <p className="post-content-introText">{detail.heading1}</p>
                      <p className="post-content-introText">{detail.heading2}</p>
                      <>
                      <div className='post-content-imgGrid'>
                      {detail.images_1 && detail.images_1.map((img, index) => (
                        <div 
                          className={`post-content-image ${img.size === 'large' ? 'large-image' : ''}`} 
                          key={index}
                        >
                          <img src={img.url} data-aos="fade-up" className='w-100' alt={`Blog image ${index}`} />
                        </div>
                      ))}
                    </div>

                      </>


                    <div className='text'>
                      {detail.text1 &&  detail.text1.map((paragraph, index) => (
                      <p className='post-content-maintext ' key={index}>{paragraph}</p>
                    ))}
                    </div>
                     <div>
                    {detail.media1 && (
                      <div className="video-wrapper" >
                        <video className='w-100' controls muted loop>
                         <source src={detail.media1} type="video/mp4" />
                       </video>
                      </div>
                    )}
                   </div>

                   <div className='text'>
                     {detail.text2 &&  detail.text2.map((paragraph, index) => (
                      <p className='post-content-maintext ' key={index}>{paragraph}</p>
                    ))}
                   </div>
                    <div>
                    {detail.media2 && (
                      <div className="video-wrapper" >
                        <video className='w-100' controls muted loop>
                         <source src={detail.media2} type="video/mp4" />
                       </video>
                      </div>
                    )}
                   </div>
                      <>
                      <div className='post-content-imgGrid'>
                      {detail.images_2 && detail.images_2.map((img, index) => (
                        <div 
                          className={`post-content-image ${img.size === 'large' ? 'large-image' : ''}`} 
                          key={index}
                        >
                          <img src={img.url} data-aos="fade-up" className='w-100' alt={`Blog image ${index}`} />
                        </div>
                      ))}
                    </div>

                      </>

                   <div className='text'>
                     {detail.text3 &&  detail.text3.map((paragraph, index) => (
                      <p className='post-content-maintext ' key={index}>{paragraph}</p>
                    ))}
                   </div>
                    <div className='text'>
                     {detail.text4 &&  detail.text4.map((paragraph, index) => (
                      <p className='post-content-maintext ' key={index}>{paragraph}</p>
                    ))}
                   </div>
                   <div>
                    {detail.media && (
                      <div className="video-wrapper" >
                        <video className='w-100' controls muted loop>
                         <source src={detail.media} type="video/mp4" />
                       </video>
                      </div>
                    )}
                   </div>

                   <div>
                    {detail.youtubeLink && (
                      <div className="yt-wrapper" > 
                        <iframe className='w-100'
                          title={`${detail.title} - Youtube Video`}
                          src={detail.youtubeLink}
                          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    )}
                   </div>
                    
                 </div>
                 <div className='post-footer text-center'>
                  {detail.tags && <span className='post-footer-tags text-primary '>{detail.tags}</span>}
                 </div>
               </div>
            </div>
        </section>

    <div className="col-md-3">
  <div className="related-blogs d-flex flex-column gap-4 px-4 my-2">
    {otherBlogs.map((blog, index) => (
      <div key={index} className="ui-blog-content-card card related-card">
        <div className="card-img">
          <img src={blog.img} alt={blog.title} />
        </div>
        <div className="card-content">
          <h3>{blog.title}</h3>
          <p>{blog.preTitle}</p>
          <Link to={`/blogs/${blog.slug}`} className="detail-link">Daha çox →</Link>
        </div>
      </div>
    ))}
  </div>
    </div>



        </div>
        
        
     
      </main>
        <footer>
          <Footer/>
        </footer>
      
    </div>
  )
}

export default BlogDetail