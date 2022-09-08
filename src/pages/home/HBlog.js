

import Title from '../Common/title/Title'
import { blog } from '../../Data'



const HBlog = () => {
  return (
    <>
        <section className="blog">
            <div className="container">
                <Title title="Varieties" subtitle="potato varieties" />
                <div className="grid2">
                {blog.map((val) => {
                    return(
                        <div className="items shadow">
                            <div className="img">
                                <img src={val.cover} alt="" />
                            </div>
                            <div className="text">
                               
                                <h1>{val.title}</h1>
                                <p>{val.desc}</p>
                            </div>
                        </div>
                    )
            })}
                </div>
            </div>
        </section> 
    </>
  )
}

export default HBlog