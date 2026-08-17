import AboutMeSection from './about-me/AboutMeSection'
import ProfileSection from './profile/ProfileSection'
import PortfolioSection from './portfolio/PortfolioSection'
import './MainPage.css'

function MainPage(){
  return (
    <div className="main-page-container">
      <AboutMeSection/>
      <ProfileSection/>
      <PortfolioSection/>
    </div>
  );
}

export default MainPage