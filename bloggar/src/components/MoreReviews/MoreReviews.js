// 参考 HighlightsNews.js
// import React from "react";
// import { Link } from 'react-router-dom'
// import Highlight from '../../api/Highlight'
// import add from '../../images/add.jpg'

// const MoreReviews = (props) => {

//     const ClickHandler = () => {
//         window.scrollTo(10, 0);
//     }

//     return (
//         <section className="wpo-reviews-section">
//             <div className="container">
//                 {/* <div className="wpo-section-title">
//                     <h2>Reviews</h2>
//                 </div> */}
//                 <div className="row">

//                     <div className={`col col-lg-8 col-12 ${props.colClass}`}>
//                     <div className="wpo-section-title">
//                         <h2>Reviews</h2>
//                     </div>
//                         <div className="wpo-reviews-wrap">
//                             <div className="wpo-reviews-items">
//                                 <div className="row">
//                                     {Highlight.slice(0, 4).map((blog, bitem) => (
//                                         <div className="col col-lg-6 col-md-6 col-12" key={bitem}>
//                                             <div className="wpo-reviews-item">
//                                                 <div className="wpo-reviews-img">
//                                                     <img src={blog.screens} alt="" />
//                                                     <div className="thumb">{blog.thumb}</div>
//                                                 </div>
//                                                 <div className="wpo-reviews-content">
//                                                     <h3><Link onClick={ClickHandler} to={`/highlight-single/${blog.slug}`}>{blog.title}</Link></h3>
//                                                     <ul>
//                                                         <li><img src={blog.avater} alt="" />
//                                                         </li>
//                                                         <li>By <Link onClick={ClickHandler}  to={`/highlight-single/${blog.slug}`}>Admin</Link></li>
//                                                         <li>{blog.create_at}</li>
//                                                     </ul>
//                                                     <p>{blog.description}</p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))}

//                                 </div>
//                             </div>
//                         </div>
//                     </div>
                
                    
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default MoreReviews;




// 参考 SponsoredNews.js
import React from "react";
import { Link } from 'react-router-dom'
import Sponsored from '../../api/Sponsored'

const MoreReviews = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="wpo-blog-reviews-section ">
            <div className="container">
                <div className="row">
                    <div className="wpo-blog-sponsored-wrap">
                        <div className="wpo-blog-items">
                            <div className="row">
                                {Sponsored.slice(0, 6).map((blog, bitem) => (
                                    <div className="col col-xl-3 col-lg-6 col-md-6 col-12" key={bitem}>
                                        <div className="wpo-blog-item">
                                            <div className="wpo-blog-img">
                                                <img src={blog.screens} alt="" />
                                                <div className="thumb">{blog.thumb}</div>
                                            </div>
                                            <div className="wpo-blog-content">
                                                <h3><Link onClick={ClickHandler} to={`/sponsor-single/${blog.slug}`}>{blog.title}</Link></h3>
                                                <ul>
                                                    <li><img src={blog.avater} alt="" />
                                                    </li>
                                                    <li>By <Link onClick={ClickHandler} to={`/sponsor-single/${blog.slug}`}>Admin</Link></li>
                                                    <li>{blog.create_at}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MoreReviews;