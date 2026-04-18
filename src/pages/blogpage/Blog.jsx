import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import './Blog.css'
import blogs from '../../data/blogs'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blog = () => {

    useEffect(() => {
        AOS.init({
            duration: 750,
            once: false,
            easing: 'ease-out',
            offset: 100,
        });
    }, []);

    return (
        <div>
            <header className='sticky-top'>
                <Navbar />
            </header>
            <main>
                <div className='ui-blog'>
                    <div className='container'>
                        <div className='ui-blog-content d-flex flex-column gap-5'>
                            <div className='row gap-4'>
                                <h1 data-aos="fade-up" >
                                    Avtomobil Sənayesinin Daxilindən Baxa Biləcəyiniz Pəncərə

                                </h1>
                                <h3 data-aos="fade-up" >
                                    Dünyaca tanınmış avtomobil brendlərinin rəsmi distribüteri olaraq, sizə texniki biliklər, istifadə tövsiyələri və trendlərlə dolu dolğun məqalələr təqdim edirik. Bu blog sizin üçün həm öyrədici, həm də ilhamverici olacaq.
                                </h3>

                            </div>

                            <div className='ui-blog-grid'>
                                {blogs.map((blog, index) => (
                                    <div key={index} className='ui-blog-content-card card'>
                                        <div className='card-img'>
                                            <img src={blog.img} alt={blog.title} />
                                        </div>
                                        <div className='card-content'>
                                            <h3 className="card-title">{blog.title}</h3>

                                            <div className="card-hidden">
                                                <p>{blog.preTitle}</p>
                                                <Link to={`/blogs/${blog.slug}`} className="detail-link">
                                                    Daha çox →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Blog