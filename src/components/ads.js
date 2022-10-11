import '../css/style.css'
import menu1 from '../img/menu/menu-1.png'
import menu2 from '../img/menu/menu-2.png'
import menu3 from '../img/menu/menu-3.png'
import menu4 from '../img/menu/menu-4.png'
import menu5 from '../img/menu/menu-5.png'
import menu6 from '../img/menu/menu-6.png'
import banner1 from '../img/banner/banner-1.png'
import banner2 from '../img/banner/banner-2.png'
import banner3 from '../img/banner/banner-3.png'

export default function AdSection(){

    return(

        <>

<section class="banner">

    <div class="row-banner">
        <div class="content">
            <span>Double Cheese</span>
            <h3>BURGER</h3>
            <p>With Cococola And Fries</p>
            <a href="#" class="btn">Order Now</a>
        </div>
    </div>

    <div class="grid-banner">
        <div class="grid">
            <img src={banner1}alt=""/>
            <div class="content">
                <span>Special Offer</span>
                <h3>Upto 50% Off</h3>
                <a href="#" class="btn">Order Now</a>
            </div>
        </div>
        <div class="grid ">
            <img src={banner2} alt=""/>
            <div class="content center">
                <span>Special Offer</span>
                <h3>Upto 50% Off</h3>
                <a href="#" class="btn">Order Now</a>
            </div>
        </div>
        <div class="grid">
            <img src={banner3} alt=""/>
            <div class="content">
                <span>Special Offer</span>
                <h3>Upto 50% Off</h3>
                <a href="#" class="btn">Order Now</a>
            </div>
        </div>
    </div>

</section>

{/* Menu */}
<section class="menu" id="menu">

    <div class="heading">
        <span>Our Menu</span>
        <h3>Our Top Dishes</h3>
    </div>

    <div class="box-container">
        <a href="#" class="box">
            <img src={menu1} alt=""/>
            <div class="content">
                <h3>Delicious Food</h3>
                <span class="price">$40.00</span>
            </div>
        </a>
        <a href="#" class="box">
            <img src={menu2} alt=""/>
            <div class="content">
                <h3>Delicious Food</h3>
                <span class="price">$40.00</span>
            </div>
        </a>
        <a href="#" class="box">
            <img src={menu3} alt=""/>
            <div class="content">
                <h3>Delicious Food</h3>
                <span class="price">$40.00</span>
            </div>
        </a>
        <a href="#" class="box">
            <img src={menu4} alt=""/>
            <div class="content">
                <h3>Delicious Food</h3>
                <span class="price">$40.00</span>
            </div>
        </a>
        <a href="#" class="box">
            <img src={menu5} alt=""/>
            <div class="content">
                <h3>Delicious Food</h3>
                <span class="price">$40.00</span>
            </div>
        </a>
        <a href="#" class="box">
            <img src={menu6} alt="" />
            <div class="content">
                <h3>Delicious Food</h3>
                <span class="price">$40.00</span>
            </div>
        </a>
    </div>

</section>
        </>
    )
}