import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
// import Business from '../../components/Business/Business';
import Reviews from '../../components/Reviews/Reviews';
import ReviewsPage from '../../components/ReviewsPage/ReviewsPage'

const ReviewsBlogPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Reviews'} pagesub={'Blog'}/> 
            <ReviewsPage/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ReviewsBlogPage;

