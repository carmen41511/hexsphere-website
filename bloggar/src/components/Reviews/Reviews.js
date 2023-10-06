import React from "react";
import { Link } from 'react-router-dom'
import Highlight from '../../api/Highlight'
import add from '../../images/add.jpg'
import ReviewSidebar from '../ReviewSidebar/ReviewSidebar.js'

// 参考 HighlightsNews.js

const Reviews = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="wpo-reviews-section">
            <div className="container">
                {/* <div className="wpo-section-title">
                    <h2>Reviews</h2>
                </div> */}
                {/* <div className="row"> */}

                    {/* <div className={`col col-lg-8 col-12 ${props.colClass}`}> */}
                    <div className="wpo-section-title">
                        <h2>Reviews</h2>
                    </div>
                        <div className="wpo-reviews-wrap">
                            <div className="wpo-reviews-items">
                                <div className="row">
                                    {Highlight.slice(0, 4).map((blog, bitem) => (
                                        <div className="col col-lg-6 col-md-6 col-12 " key={bitem}>
                                            <div className="wpo-reviews-item pixel-box ">
                                                <div className="wpo-reviews-img">
                                                    <img src={blog.screens} alt="" />
                                                    <div className="thumb">{blog.thumb}</div>
                                                </div>
                                                <div className="wpo-reviews-content">
                                                    <h3><Link onClick={ClickHandler} to={`/highlight-single/${blog.slug}`}>{blog.title}</Link></h3>
                                                    <ul>
                                                        <li><img src={blog.avater} alt="" />
                                                        </li>
                                                        <li>By <Link onClick={ClickHandler}  to={`/highlight-single/${blog.slug}`}>Admin</Link></li>
                                                        <li>{blog.create_at}</li>
                                                    </ul>
                                                    <p>{blog.description}</p>
                                                </div>
                                            </div>
                                            {/* <div></div> */}
                                        </div>
                                    ))}
                                    <div className="all-reviews-tab">
                                        <a href="/reviews">All Reviews -&gt;</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
                
                    {/* <div className={`col col-lg-4 col-12 ${props.hideClass}`}>
                        <div className="wpo-section-title">
                            <h2>All News</h2>
                        </div>
                        <div className="news-explorer">
                            <div className="news-sidebar">
                                <div className="widget recent-post-widget">
                                    {Highlight.slice(0, 10).map((blog, bitem) => (
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
                    </div> */}
                    {/* <ReviewSidebar blLeft={props.blLeft}/> */}
                {/* </div> */}
            </div>
        </section>
    )
}

export default Reviews;