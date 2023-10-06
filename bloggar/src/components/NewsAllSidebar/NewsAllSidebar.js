import React from 'react';
import { Link } from 'react-router-dom'
import about from '../../images/blog/about-widget.jpg'
import Breaking from '../../api/breaking'
import add from '../../images/add.jpg'
import Highlight from '../../api/Highlight'
// 参考 HomeSidebar.js

const SubmitHandler = (e) => {
    e.preventDefault()
}

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const NewsAllSidebar = (props) => {
    return (

        <div className="widget recent-post-widget">
            <h3>All News</h3>
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
        // <div className={`col col-lg-4 col-12 ${props.hideClass}`}>
            // <div>

            // <div className="wpo-section-title">
            //     <h2>All News</h2>
            // </div>
            // <div className="news-explorer">
            //     <div className="news-sidebar">
            //         <div className="widget recent-post-widget">
            //             {Highlight.slice(0, 10).map((blog, bitem) => (
            //                 <div className="posts" key={bitem}>
            //                     <div className="post">
            //                         <div className="details">
            //                             <span className="date">{blog.create_at} </span>
            //                             <h4><Link onClick={ClickHandler} to={`/highlight-single/${blog.slug}`}>{blog.title}</Link></h4>
            //                         </div>
            //                     </div>
            //                 </div>
            //             ))}
            //         </div>
            //     </div>
                
            // </div>
            // </div>
        // </div>
        // <div className={`col col-lg-3 col-12 ${props.blLeft}`}>
        //     <div className="blog-sidebar">
        //         <div className="news-explorer">
        //             <div className="news-sidebar">
            
        //                 <div className="widget recent-post-widget">
        //                     <h3>News Explorer</h3>
        //                     {Highlight.slice(0, 7).map((blog, bitem) => (
        //                         <div className="posts" key={bitem}>
        //                             <div className="post">
        //                                 <div className="details">
        //                                     <span className="date">{blog.create_at} </span>
        //                                     <h4><Link onClick={ClickHandler} to={`/highlight-single/${blog.slug}`}>{blog.title}</Link></h4>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     ))}

        //                 </div>
                        
        //             </div>
        //         </div>
                
        //     </div>
        // </div>
    )

}

export default NewsAllSidebar;
