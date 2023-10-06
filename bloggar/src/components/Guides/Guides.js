import React from "react";
import { Link } from 'react-router-dom'
import Sponsored from '../../api/Sponsored'
// 参考 SponsoredNews.js

const Guides = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="wpo-blog-guides-section section-padding">
            <div className="container">
                <div className="wpo-section-title">
                    <h2>Guides</h2>
                </div>
                <div className="row">
                    <div className="wpo-blog-guides-wrap">
                        <div className="wpo-blog-items ">
                            <div className="row">
                                {Sponsored.slice(0, 6).map((blog, bitem) => (
                                    <div className="col col-xl-3 col-lg-6 col-md-6 col-12 " key={bitem}>
                                        <div className="wpo-blog-item pixel-borders">
                                            <div className="wpo-blog-img ">
                                                <img src={blog.screens} alt="" />
                                                <div className="thumb">{blog.thumb}</div>                                            </div>
                                            <div className="wpo-blog-content">
                                                <h3><Link onClick={ClickHandler} to={`/sponsor-single/${blog.slug}`}>{blog.title}</Link></h3>
                                                <ul>
                                                    {/* <li><img src={blog.avater} alt="" /> */}
                                                    {/* </li> */}
                                                    <li>By <Link onClick={ClickHandler} to={`/sponsor-single/${blog.slug}`}>Admin</Link></li>
                                                    <li>{blog.create_at}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                
                                <div className="all-guides-tab">
                                    <a href="/guides">All Guides -&gt;</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Guides;