
import Title from '../../Common/title/Title'
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Title subtitle='We are the leading supplier of sweet potato vines in Kenya. We sell yellow 
              fleshed, orange fleshed and white fleshed sweet potato vines"' title='WELCOME TO KENYA SWEET POTATO' />
            
            <div className='button'>
              <button className='primary-btn'>
                Place Order <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero