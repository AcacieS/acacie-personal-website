import AboutMeSection from './about-me/AboutMeSection'
import ProfileSection from './profile/ProfileSection'
import PortfolioSection from './portfolio/PortfolioSection'
import ContactSection from './contact/ContactSection'
import './MainPage.css'

function MainPage(){
  return (
    <div className="main-page-container">
      <AboutMeSection/>
      <ProfileSection/>
      <PortfolioSection/>
      <ContactSection/>
    </div>
  );
}

export default MainPage