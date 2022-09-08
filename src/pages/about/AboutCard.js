
import styles from '../../styles/About.module.css'

import Title from '../../Components/Title'
import InfoImg from '../../Assets/794.jpg'
import { homeAbout } from '../../Data'


const AboutCard = () => {
  return (
    <>
        <section className={styles.aboutHome}>
            <div className={styles.container.flexSB}>
                <div className={styles.left.row}>
                    <img src={InfoImg} alt="" />
                </div>
                <div className={styles.right.row}>
                    <Title subtitle="WE ARE THE LEADING SUPPLIER OF SWEET POTATO PRODUCTS IN KENYA" title="MAKE AN ORDER"/>
                    <div className={styles.items}>
                        {homeAbout.map((val) => (
                            <div className={styles.item.flexSB}>
                                <div className={styles.img}>
                                    <img src={val.cover} alt="" />
                                </div>
                                <div className={styles.text}>
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