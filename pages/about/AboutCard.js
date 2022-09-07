
import './About.css'

import Title from '../Common/title/Title'
import InfoImg from '../../Assets/794.jpg'
import { homeAbout } from '../../Data'


const AboutCard = () => {
  return (
    <>
        <section className="aboutHome">
            <div className="container flexSB">
                <div className="left row">
                    <img src={InfoImg} alt="" />
                </div>
                <div className="right row">
                    <Title subtitle="WE ARE THE LEADING SUPPLIER OF SWEET POTATO PRODUCTS IN KENYA" title="MAKE AN ORDER"/>
                    <div className="items">
                        {homeAbout.map((val) => (
                            <div className="item flexSB">
                                <div className="img">
                                    <img src={val.cover} alt="" />
                                </div>
                                <div className="text">
                                    <h2>{val.title}</h2>
                                    <p>{val.desc}</p>
                                </div>
                            </div>
                    
                        ))}
                    </div>
                </div>
            </div>
        </section>

        
    </>
  )
}

export default AboutCard