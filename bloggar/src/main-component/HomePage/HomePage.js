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
import Highlight from '../../api/Highlight';
import NewsExplorer from '../../components/NewsAllSidebar/NewsAllSidebar';
import HomeSidebar from '../../components/HomeSidebar/HomeSidebar';
import NewsSidebar from '../../components/NewsSidebar/NewsSidebar';
// import ReviewSidebar from '../ReviewSidebar/ReviewSidebar.js';


const HomePage =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-1'} topbarNone={'topbar-none'}/>
            <div className="main-blog-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <Hero />
                            <Reviews/>
                            {/* <FeaturesNews />
                            <VideoNews />
                            <HighlightsNews colClass={'col-lg-12'} hideClass={'d-none'} /> */}
                        </div>
                        {/* <HomeSidebar/> */}
                        <NewsSidebar/>
                        

                        {/* <ReviewSidebar/> */}
                    </div>
                </div>
            </div>
            
            
            <Videos/>
            <Guides/>

            
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