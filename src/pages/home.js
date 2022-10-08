import React from "react";
import { Carousel } from 'rsuite';

const styles ={
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain"
}


export default function Home(){

    return(
        <Carousel autoplay className="custom-slider">
            <img style={styles} src="https://media.istockphoto.com/photos/collage-of-various-spices-banner-picture-id1144169442?k=20&m=1144169442&s=170667a&w=0&h=ngnrOJbvwWgIfZ85JGgW0ffjk0mC72QeZpsRKoYE99o=" />
            <img style={styles} src="https://t3.ftcdn.net/jpg/02/48/12/90/360_F_248129008_90eM7dDT1vL176OPnbTZG5QwBfx8AXM9.jpg" height="250" />
            <img style={styles} src="https://previews.123rf.com/images/gioiak2/gioiak21903/gioiak2190300447/120186242-spices-and-herbs-colorful-spices-flat-lay-on-wooden-table-banner.jpg" height="250" />
            <img style={styles} src="https://cdn.pixabay.com/photo/2022/04/30/19/12/cooking-banner-7166200__340.jpg" height="250" />
            <img style={styles} src="https://thumbs.dreamstime.com/b/spices-herbs-various-condiments-around-plate-white-stone-table-top-view-banner-healthy-cooking-indian-food-background-195414183.jpg" height="250" />
        </Carousel>
    )
}