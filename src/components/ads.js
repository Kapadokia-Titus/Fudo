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

<section className="banner">

    <div className="row-banner">
        <div className="content">
            <span>Double Cheese</span>
            <h3>BURGER</h3>
            <p>With Cococola And Fries</p>
            <a href="#" className="btn">Order Now</a>
        </div>
    </div>

    <div className="grid-banner">
        <div className="grid">
            <img src={banner1}alt=""/>
            <div className="content">
                <span>Special Offer</span>
                <h3>Upto 50% Off</h3>
                <a href="#" className="btn">Order Now</a>
            </div>
        </div>
        <div className="grid ">
            <img src={banner2} alt=""/>
            <div className="content center">
                <span>Special Offer</span>
                <h3>Upto 50% Off</h3>
                <a href="#" className="btn">Order Now</a>
            </div>
        </div>
        <div className="grid">
            <img src={banner3} alt=""/>
            <div className="content">
                <span>Special Offer</span>
                <h3>Upto 50% Off</h3>
                <a href="#" className="btn">Order Now</a>
            </div>
        </div>
    </div>

</section>

{/* Menu */}
<section className="menu" id="menu">

    <div className="heading">
        <span>Our Menu</span>
        <h3>Our Top Dishes</h3>
    </div>

    <div className="box-container">
        <a href="#" className="box">
            <img src={menu1} alt=""/>
            <div className="content">
                <h3>Delicious Food</h3>
                <span className="price">$40.00</span>
            </div>
        </a>
        <a href="#" className="box">
            <img src={menu2} alt=""/>
            <div className="content">
                <h3>Delicious Food</h3>
                <span className="price">$40.00</span>
            </div>
        </a>
        <a href="#" className="box">
            <img src={menu3} alt=""/>
            <div className="content">
                <h3>Delicious Food</h3>
                <span className="price">$40.00</span>
            </div>
        </a>
        <a href="#" className="box">
            <img src={menu4} alt=""/>
            <div className="content">
                <h3>Delicious Food</h3>
                <span className="price">$40.00</span>
            </div>
        </a>
        <a href="#" className="box">
            <img src={menu5} alt=""/>
            <div className="content">
                <h3>Delicious Food</h3>
                <span className="price">$40.00</span>
            </div>
        </a>
        <a href="#" className="box">
            <img src={menu6} alt="" />
            <div className="content">
                <h3>Delicious Food</h3>
                <span className="price">$40.00</span>
            </div>
        </a>
    </div>

</section>
        </>
    )
}