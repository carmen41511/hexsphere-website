import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import VideosPage from '../../components/VideosPage/VideosPage'

const VideosBlogPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Videos'} pagesub={'Blog'}/> 
            <VideosPage/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default VideosBlogPage;

