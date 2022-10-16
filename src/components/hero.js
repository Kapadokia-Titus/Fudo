import '../css/style.css'
import image1 from '../img/home/home-img.png'
import image2 from '../img/home/home-parallax-img.png'

export default function Hero(){

    return(

    <section className="home" id="home">

        <div className="left-side">
            <span>Welcome Foodies</span>
            <h3> Choose a healthy lifestyle, by following a Personalised Meal Plan 😋</h3>
            <p>"DaChef is the best. Besides the many and delicious meals, the service is also very good, especially in the very  fast delivey. 
                I highly recommend DaChef to you”.</p>
            <button className="btn">Order Now</button>
        </div>

        <div className="right-side">
            <img src={image1} alt="" className="home-img"/>
            <img src={image2} alt="" className="home-parallax"/>
        </div>

    </section>

    )
}