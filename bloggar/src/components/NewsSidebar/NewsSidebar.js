import React from 'react';
import { Link } from 'react-router-dom'
import about from '../../images/blog/about-widget.jpg'
import Breaking from '../../api/breaking'
import add from '../../images/add.jpg'
import Highlight from '../../api/Highlight'
import NewsAllSidebar from '../NewsAllSidebar/NewsAllSidebar';
import NewsExplorer from '../NewsExplorer/NewsExplorer';

// 参考 HomeSidebar.js

const SubmitHandler = (e) => {
    e.preventDefault()
}

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const NewsSidebar = (props) => {
    return (
        <div className={`col col-lg-3 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">
                <div className="news-explorer">
                    <div className="news-sidebar">
                        <NewsExplorer/>
                        
                    </div>
                </div>
                <NewsAllSidebar/>
            </div>
            
        </div>
    )

}

export default NewsSidebar;
