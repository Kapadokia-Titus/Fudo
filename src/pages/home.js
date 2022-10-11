import React, {useState, useEffect} from "react";
import { Carousel,Popover,Col, Row, FlexboxGrid } from 'rsuite';
import Card from "../components/Card";
import { getAllMeals } from "../client/Client";
import '../styles.css'
import logo from '../img/logo.png'; 
import Hero from "../components/hero";
import Category from "../components/category";
import AdSection from "../components/ads";
import '../css/style.css'
import RecipeCard from "../components/RecipeCard";
import Footer from "../components/Footer";
const styles ={
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain"
}


export default function Home(){

    // a variable that will hold the data
    const [meals, setMeals]= useState([]); 

    // useEffect to fetch data and store it in the {meal} variable once
    useEffect(()=>{
        getAllMeals()
        .then(res => res.json())
        .then(data =>setMeals(data))
        .catch(e=>console.log(e))
    }, [])



    return(
        <>
       

        {/* import  hero  */}
        <Hero />

        {/* Category section */}
        <Category />

        {/* product grid */}

        <section class="blog" id="blog">
    
            <div class="heading">
                <span>Start Cooking</span>
                <h3>Our Daily Recommendations</h3>
            </div>
    
            <div class="blog-container">
            {meals?.map(data=>(
                    <RecipeCard key={data.mealId} desc={data.mealDescription} title={data.mealTitle} img={data.mealImage}/>
                ))}

            </div>
          </section> 


        {/* Ad section */}
        <AdSection />
        
        {/* Footer */}
        <Footer />
        
        </>
    )
}