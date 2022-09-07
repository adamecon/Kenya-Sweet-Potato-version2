
import AboutCard from '../about/AboutCard'
import Hero from'../Home/hero/Hero'
import HBlog from './HBlog'
import HPrice from './HPrice'
import Contact from '../contact/Contact'


const Home = () => {
  return (
    <>
        <Hero />
        <AboutCard />
        <HPrice />
        <HBlog />
        <Contact />
        
    </>
  )
}

export default Home