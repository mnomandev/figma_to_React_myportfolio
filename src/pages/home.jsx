
import HeroSection from "../components/heroSection.jsx"
import Animation from "../components/animation.jsx"
import Services from "../components/services.jsx"
import RecentProjects from "../components/recentProjects.jsx"
import AboutStats from "../components/aboutStat.jsx"
import Testimonials from "../components/testimonials.jsx"
import FAQ from "../components/faq.jsx";
import Dest from "../components/dest.jsx"
import Footer from "../components/footer.jsx"

const Home = () => {
  return (
   <>
   <HeroSection/>
     <Animation/>
     <Services/>
     <RecentProjects/>
     <AboutStats/>
     <Testimonials/>
     <FAQ/>
     <Dest/>
     <Footer/>
   </>
  )
}

export default Home
