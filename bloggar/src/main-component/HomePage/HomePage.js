import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/hero/hero';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Videos from '../../components/Videos/Videos'
import Guides from '../../components/Guides/Guides'
import Reviews  from '../../components/Reviews/Reviews'; 
import BreakingNews from '../../components/BreakingNews/BreakingNews';
import HighlightsNews from '../../components/HighlightsNews/HighlightsNews';
import SponsoredNews from '../../components/SponsoredNews/SponsoredNews';
import Footer from '../../components/footer/Footer';
import Subscribe from '../../components/Subscribe/Subscribe';

const HomePage =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-1'} topbarNone={'topbar-none'}/>
            <Hero/>
            <Videos/>
            <Guides/>
            <Reviews/>
            {/* <SponsoredNews/> */}
            {/* can make BreakingNews into video section */}
            {/* <BreakingNews/> */}
            {/* <HighlightsNews/> */}
            
            {/* <Subscribe/> */}
            <Footer/> 
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage;