import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import VideosPage from '../../components/VideosPage/VideosPage'
import FeaturesNews from '../../components/FeaturesNews/FeaturesNews';
import NewsPage from '../../components/NewsPage/NewsPage';

const NewsBlogPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'All News'} pagesub={'Blog'}/> 
            <NewsPage/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default NewsBlogPage;

