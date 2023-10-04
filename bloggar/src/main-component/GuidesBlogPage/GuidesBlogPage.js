import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Foods from '../../components/Foods/Foods';
import GuidesPage from '../../components/GuidesPage/GuidesPage';

const GuidesBlogPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Guides'} pagesub={'Blog'}/> 
            {/* <Foods/> */}
            <GuidesPage/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default GuidesBlogPage;

