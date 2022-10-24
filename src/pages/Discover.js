import about from '../img/about-img.png'
import '../css/style.css'
import { useEffect, useState } from 'react';
import { getAllMeals } from '../client/Client';
import RecipeCard from '../components/RecipeCard';
import { Input, InputGroup } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';

// start dummy data
const data = [
    'Vegan Diet',
    'Slim Diet',
    'Creative Diet',
    'Meat Diet'
  ].map(item => ({ label: item, value: item }));


export default function Discover(){

     // a variable that will hold the data
     const [meals, setMeals]= useState([]); 
     const [mealsCategory, setMealCategory]= useState("All"); 
    console.log(mealsCategory)

     // useEffect to fetch data and store it in the {meal} variable once
     useEffect(()=>{
         getAllMeals()
         .then(res => res.json())
         .then(data =>setMeals(data))
         .catch(e=>console.log(e))
     }, [])


    //  filtered Meal List
    const filteredMealByCategory = meals.filter(item => {
        //if no input the return the original
        if (mealsCategory === 'All') {
            return item;
        }
        //return the item which contains the user input
        else {
            return item.mealTitle.toLowerCase().includes(mealsCategory)
        }
    })

    return(
        <>
        
        <section className="about" id="about">

        <div className="about-left-side">
            <img src={about} alt="" className="about-img"/>
        </div>
        <div className="about-right-side">
            <span>Why Choose Us?</span>
            <h3>What's Make Our Food Delicious!</h3>
            <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Eos Ut Explicabo, Numquam Iusto Est A Ipsum
                Assumenda Tempore Esse Corporis?</p>
            <div className="about-services">
                <div>
                    <img src="./images/serv-1.png" alt=""/>
                    <p>Fast Delivery</p>
                </div>
                <div>
                    <img src="./images/serv-2.png" alt=""/>
                    <p>Fresh Food</p>
                </div>
                <div>
                    <img src="./images/serv-3.png" alt=""/>
                    <p>Best Quality</p>
                </div>
                <div>
                    <img src="./images/serv-4.png" alt=""/>
                    <p>24/7 Support</p>
                </div>
            </div>
        </div>

    </section>
    

    {/*  search form */}
    <section className="about">
    <div className="heading">
         <span>Tell us what you preffer to cook?</span>
    </div>
    <div className="about-right-side">
    <InputGroup>
        <Input placeholder='e.g. Brocolli, Biriani' onChange={e=>setMealCategory(e)} />
        <InputGroup.Addon>
            <SearchIcon />
        </InputGroup.Addon>
        </InputGroup>
       
    </div>

   
    </section>
    <section className="blog" id="blog">
    <div className="blog-container">
        {filteredMealByCategory?.map(data=>(
                <RecipeCard key={data.mealId} desc={data.mealDescription} title={data.mealTitle} img={data.mealImage}/>
            ))}

     </div>
    </section>
    </>
    )
}