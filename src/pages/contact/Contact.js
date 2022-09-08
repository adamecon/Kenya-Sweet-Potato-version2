
import './Contact.css'



const Contact = () => {

    const map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7979.393694869078!2d34.887134931857766!3d-0.44709713541133395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182ae0e9e5a91edf%3A0x80b0eb1afa9dbf06!2sKadongo!5e0!3m2!1sen!2ske!4v1662338275307!5m2!1sen!2ske";


  return (
    <>
        
        <section className="contact padding">
            <div className="container shadow flexSB">
               <div className="left row">
                    <iframe src={map} title="on the map"></iframe>
                </div> 
                <div className="right row">
                    <h1>Contact Us</h1>
                    <p>Place Your Order Of Vines And Potatoes By Reaching Out To Us</p>

                    <div className="items grid2">
                        <div className="box">
                            <h4>ADDRESS: </h4>
                            <p>8, Kadongo, Homa Bay</p>

                        </div>
                        <div className="box">
                            <h4>Email: </h4>
                            <p>ochanjijane@gmail.com</p>
                        </div>
                        <div className="box">
                            <h4>PHONE: </h4>
                            <p>+254725772524</p>
                        </div>
                    </div>
                    <form action="">
                        <div className="flexSB">
                            <input type="text" placeholder="Your Name" />
                            <input type="email" placeholder="Your Email" />
                        </div>
                        <input type="text" placeholder="Subject" />
                        <textarea cols='30' rws='10'>Your Message...</textarea>
                        <button className="primary-btn">Send</button>
                    </form>
                    <h3> Follow Us On</h3>
                    <span>Facebook Twitter Instagram</span>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact