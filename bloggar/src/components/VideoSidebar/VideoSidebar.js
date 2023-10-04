import React from 'react';
import { Link } from 'react-router-dom'
import about from '../../images/blog/about-widget.jpg'
import Breaking from '../../api/breaking'
// 参考 ReviewSidebar.js

const SubmitHandler = (e) => {
    e.preventDefault()
}

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const VideoSidebar = (props) => {
    return (
        <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">
                
                <div className="widget reviews-post-widget">
                    {Breaking.slice(0, 8).map((blog, bitem) => (
                        <div className="posts" key={bitem}>
                            <div className="post">
                                <div className="img-holder">
                                    <img src={blog.screens} alt />
                                </div>
                                <div className="details">
                                    <span className="date">{blog.create_at} </span>
                                    <h4><Link onClick={ClickHandler} to={`/breaking-single/${blog.slug}`}>{blog.title}</Link></h4>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )

}

export default VideoSidebar;
