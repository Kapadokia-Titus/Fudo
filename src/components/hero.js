import '../css/style.css'
import image1 from '../img/home/home-img.png'
import image2 from '../img/home/home-parallax-img.png'

export default function Hero(){

    return(

    <section class="home" id="home">

        <div class="left-side">
            <span>Welcome Foodies</span>
            <h3> Choose a healthy lifestyle, by following a Personalised Meal Plan 😋</h3>
            <p>"DaChef is the best. Besides the many and delicious meals, the service is also very good, especially in the very  fast delivey. 
                I highly recommend DaChef to you”.</p>
            <button class="btn">Order Now</button>
        </div>

        <div class="right-side">
            <img src={image1} alt="" class="home-img"/>
            <img src={image2} alt="" class="home-parallax"/>
        </div>

    </section>

    )
}