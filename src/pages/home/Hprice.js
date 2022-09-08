

import Title from '../Common/title/Title'
import PriceCard from '../pricing/PriceCard'

const HPrice = () => {
  return (
    <>
        <section className="hprice padding">
            <Title title="Product Pricing" subtitle="prices" />
            <div className="price container grid">
                <PriceCard />
               
            </div>
        </section>
    
    </>
  )
}

export default HPrice