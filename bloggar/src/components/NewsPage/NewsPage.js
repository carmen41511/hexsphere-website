import React from 'react';
import {Link} from 'react-router-dom'
import ReviewSidebar from '../ReviewSidebar/ReviewSidebar.js'
import VideoModal from '../ModalVideo/VideoModal.js'
import Guides from '../Guides/Guides.js'
import MoreReviews from '../MoreReviews/MoreReviews.js'
import Reviews from '../Reviews/Reviews.js'


import blogs from '../../api/blogs.js'
import SponsoredNews from '../SponsoredNews/SponsoredNews.js';
import VideoNews from '../VideoNews/VideoNews.js';
import AllNews from '../AllNews/AllNews.js';


const ClickHandler = () =>{
    window.scrollTo(10, 0);
 }

const NewsPage = (props) => {
    return(
        <section className="wpo-blog-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className={`col col-lg-8 col-12 ${props.blRight}`}>
                        <div className="wpo-blog-reviews-content">
                            {blogs.slice(12,13).map((blog, bitem) => (
                                <div className={`post  ${blog.blClass}`}key={bitem}>
                                    
                                    
                                    {/* <div className="entry-details">
                                        <h4><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link></h4>
                                        <p>Law is a great career path if you want to build a broad skill set that includes everything from critical thinking and strategic planning to communications. If you love rising to a challenge.</p>
                                        <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`} className="read-more">READ MORE...</Link>
                                    </div> */}
                                    <div className="entry-media video-holder">
                                        <img src={blog.screens} alt=""/>
                                        <VideoModal/>
                                        <div className="entry-meta">
                                            <ul>
                                                <li><i className="fi flaticon-user"></i> By <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.authorTitle}</Link> </li>
                                                <li><i className="fi flaticon-comment-white-oval-bubble"></i> Comments {blog.comment} </li>
                                                <li><i className="fi flaticon-calendar"></i> {blog.create_at}</li>
                                            </ul>
                                        </div>
                                        
                                    </div>
                                    <div className="entry-details">
                                        <h4><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link></h4>
                                        <p>Law is a great career path if you want to build a broad skill set that includes everything from critical thinking and strategic planning to communications. If you love rising to a challenge.</p>
                                        <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`} className="read-more">READ MORE...</Link>
                                    </div>


                                </div>
                            ))}

                            {/* <div className="pagination-wrapper pagination-wrapper-left">
                                <ul className="pg-pagination">
                                    <li>
                                        <Link to="/blog-left-sidebar" aria-label="Previous">
                                            <i className="fi ti-angle-left"></i>
                                        </Link>
                                    </li>
                                    <li className="active"><Link to="/blog-left-sidebar">1</Link></li>
                                    <li><Link to="/blog-left-sidebar">2</Link></li>
                                    <li><Link to="/blog-left-sidebar">3</Link></li>
                                    <li>
                                        <Link to="/blog-left-sidebar" aria-label="Next">
                                            <i className="fi ti-angle-right"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                    <ReviewSidebar blLeft={props.blLeft}/>
                </div>
                <AllNews/>
                {/* <SponsoredNews/> */}
                {/* <MoreReviews/>
                <MoreReviews/> */}
            </div>
        </section>

     )
        
}

export default NewsPage;
