import React from "react";
import { Link } from 'react-router-dom'
import heroBlog from '../../api/heroBlogs'
import Highlight from '../../api/Highlight'




const Hero = () => {

    const ClickHandler = (props) => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="wpo-blog-hero-area">
            <div className="container">
                {/* <div className="sortable-gallery"> */}
                    {/* <div className="gallery-filters"></div> */}
                    <div className="row">
                        {/* <div className="col-lg-12"> */}
                            <div className="wpo-blog-grids gallery-container clearfix">
                                {heroBlog.slice(0, 1).map((blog, bitem) => (
                                    <div className="grid" key={bitem}>
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
                                
                                {/* <div className={`col col-lg-4 col-12 ${props.hideClass}`}> */}
                                <div className="blog-sidebar">
                                {/* <div className="widget category-widget"> */}
                                {   /* <h3>Post Categories</h3>
                                    <ul>
                                        <li><Link onClick={ClickHandler} to="/blog">Lifestyle<span>(05)</span></Link></li>
                                        <li><Link onClick={ClickHandler} to="/blog">Inspiration <span>(07)</span></Link></li>
                                        <li><Link onClick={ClickHandler} to="/blog">Fashion <span>(03)</span></Link></li>
                                        <li><Link onClick={ClickHandler} to="/blog">Photography <span>(06)</span></Link></li>
                                        <li><Link onClick={ClickHandler} to="/blog">Travel <span>(12)</span></Link></li>
                                        <li><Link onClick={ClickHandler} to="/blog">Business <span>(08)</span></Link></li>
                                    </ul> */}
                                {/* </div> */}
                                <div className="widget recent-post-widget">
                                    <h3>Related Posts</h3>
                                    {Highlight.slice(0, 5).map((blog, bitem) => (
                                        <div className="posts" key={bitem}>
                                            <div className="post">
                                                <div className="img-holder">
                                                    <img src={blog.screens} alt />
                                                </div>
                                                <div className="details">
                                                    <span className="date">{blog.create_at} </span>
                                                    <h4><Link onClick={ClickHandler} to={`/highlight-single/${blog.slug}`}>{blog.title}</Link></h4>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                                {/* <div className="wpo-add-widget">
                                    <Link to="/"><img src={add} alt=""/></Link>
                                </div> */}
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
                        {/* </div> */}


                        

                    </div>

                    
                {/* </div> */}

            </div>
        // </div>
    )
}

export default Hero;