import '../css/style.css'
import image1 from '../img/cat/cat-1.png'
import image2 from '../img/cat/cat-2.png'
import image3 from '../img/cat/cat-3.png'
import image4 from '../img/cat/cat-4.png'
import image5 from '../img/cat/cat-5.png'
import image6 from '../img/cat/cat-6.png'

export default function Category(){

    return(
        <section className="category">

        <a href="#" className="box">
            <img src={image1} alt=""/>
            <h3>Combo</h3>
        </a>
        <a href="#" className="box">
            <img src={image2} alt=""/>
            <h3>Pizza</h3>
        </a>
        <a href="#" className="box">
            <img src={image3} alt=""/>
            <h3>Burger</h3>
        </a>
        <a href="#" className="box">
            <img src={image4}  alt=""/>
            <h3>Chicken</h3>
        </a>
        <a href="#" className="box">
            <img src={image5} alt=""/>
            <h3>Dinner</h3>
        </a>
        <a href="#" className="box">
            <img src={image6} alt=""/>
            <h3>Coffee</h3>
        </a>

    </section>

    )
}