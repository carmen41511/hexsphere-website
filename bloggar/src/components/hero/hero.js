import React from "react";
import { Link } from 'react-router-dom'
import heroBlog from '../../api/heroBlogs'
import Highlight from '../../api/Highlight'
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const Hero = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="wpo-blog-hero-area">
            <div className="container">
                <div className="sortable-gallery">
                    <div className="gallery-filters"></div>
                    <div className="row">
                        <div className="col-lg-12">
                            
                            <div className="wpo-blog-grids -gallerycontainer clearfix">
                                
                                {heroBlog.slice(0, 1).map((blog, bitem) => (
                                    <div className="grid" key={bitem}>
                                        <div className="widget top-news-widget">
                                            {/* <h3>Today's Top Highlights</h3> */}
                                        </div>
                                        <div className="img-holder">
                                            <img src={blog.screens} alt className="img img-responsive" />
                                            <div className="wpo-blog-content">
                                                <div className="thumb">{blog.thumb}</div>
                                                <h2><Link to={`/hero-blog-single/${blog.slug}`}>{blog.title}</Link></h2>
                                                <p>{blog.description}</p>
                                                <ul>
                                                    <li><img src={blog.avater} alt="" /></li>
                                                    <li>By <Link to={`/hero-blog-single/${blog.slug}`}>{blog.author}</Link></li>
                                                    <li>{blog.create_at}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <div className="news-explorer">
                                    <div className="news-sidebar">
                            
                                        <div className="widget recent-post-widget">
                                            <h3>News Explorer</h3>
                                            {Highlight.slice(0, 7).map((blog, bitem) => (
                                                <div className="posts" key={bitem}>
                                                    <div className="post">
                                                        <div className="details">
                                                            <span className="date">{blog.create_at} </span>
                                                            <h4><Link onClick={ClickHandler} to={`/highlight-single/${blog.slug}`}>{blog.title}</Link></h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}

                                        </div>
                                        
                                    </div>
                                </div>

                                {/* <div className="grid s2">
                                    {heroBlog.slice(2, 4).map((blog, bitem) => (
                                        <div className="img-holder" key={bitem}>
                                            <img src={blog.screens} alt className="img img-responsive" />
                                            <div className="wpo-blog-content">
                                                <div className="thumb">{blog.thumb}</div>
                                                <h2><Link to={`/hero-blog-single/${blog.slug}`}>{blog.title}</Link></h2>
                                                <ul>
                                                    <li>By <Link to={`/hero-blog-single/${blog.slug}`}>{blog.author}</Link></li>
                                                    <li>{blog.create_at}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero;