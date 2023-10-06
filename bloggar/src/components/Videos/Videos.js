import React, {useState} from "react";
import { Link } from 'react-router-dom'
import Video from '../../api/Video'
import VideoModal from "../ModalVideo/VideoModal";
import Breaking from '../../api/breaking'
import Slider from "react-slick";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

var settings = {
    dots: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }   
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};



const Videos = () => {

    const [selectedVideo, setSelectedVideo] = useState(null);
    const handleVideoClick = (video) => {
        setSelectedVideo(video);
    }
    return (

        <section className="wpo-videos-area video-content">
            <div className="container">
                <div className="wpo-section-title">
                    <h2>Videos</h2>
                </div>
                {/* 这里以后考虑如何实现big video screen。点击下方小视频窗口时
                    ，大窗口会切换 */}
                {/* <div className="wpo-blog-img">
                        <img src={blog.screens} alt="" />
                        <VideoModal/>
                    </div> */}
                <div className="wpo-video-highlights-wrap">

                    <div className="wpo-blog-items">

                        {Video.slice(0, 1).map((video, bitem) => (
                            <div className="wpo-blog-item" key={bitem}>
                                <div className="wpo-blog-img">
                                    <img src={video.screens} alt="" />
                                    <p>{video.title}</p>
                                    <VideoModal/>
                                </div>
                                <div className="wpo-video-text">
                                        <span>{video.create_at}</span>
                                        <h3><Link onClick={ClickHandler} to={`/breaking-single/${video.slug}`}>{video.title}</Link></h3>
                                </div>
                                {/* 弄好视频之后可以考虑wpo-blog-content（视频标题作者信息之类的）要不要放在视频下面 */}
                                {/* <div className="wpo-blog-content">
                                    <h2><Link onClick={ClickHandler} to={`/video-single/${video.slug}`}>{blog.title}</Link></h2>
                                    <ul>
                                        <li><img src={video.avater} alt="" />
                                        </li>
                                        <li>By <Link onClick={ClickHandler} to={`/video-single/${video.slug}`}>Admin</Link></li>
                                        <li>{video.create_at}</li>
                                    </ul>
                                    <p>{video.description}</p>
                                </div> */}
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            <div className="wpo-video-sliding">
            <div className="container">
                <div className="row">
                    <div className="wpo-video-wrap">
                        <Slider {...settings}>
                            {Video.slice(0, 7).map((video, bitem) => (
                                <div className="wpo-breacking-slide" key={bitem}>
                                    <div className="wpo-breacking-item">
                                        <div className="wpo-breacking-img">
                                            <img src={video.screens} alt=""/>
                                            {/* <VideoModal/> */}
                                        </div>  
                                        {/* <div className="wpo-breacking-text">
                                            <span>{video.create_at}</span>
                                            <h3><Link onClick={ClickHandler} to={`/breaking-single/${video.slug}`}>{video.title}</Link></h3>
                                        </div> */}
                                    </div>
                                    <div className="wpo-video-text">
                                        <span>{video.create_at}</span>
                                        <h3><Link onClick={ClickHandler} to={`/breaking-single/${video.slug}`}>{video.title}</Link></h3>
                                    </div>
                                </div>
                            ))}
                            
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Videos;