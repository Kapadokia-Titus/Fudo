import Footer from "../components/Footer";
import '../css/style.css'
import { Grid, Row, Col } from 'rsuite';
import {useEffect, useState, useRef} from "react";

export default function Admin(){

    const [recipe, setRecipe] = useState({
        meal_title:'meal title', 
        meal_description:'some meal description',
        meal_image: 'https://...', 
        meal_ingredients:'ingredients', 
        meal_cooking_time:'15 min'
    })
    // declare form useRef
    const form = useRef(null); 
    // Handle Onsubmit
    function handleOnsubmit(event){
        event.preventDefault();
        // log the recipe
        console.log(recipe)
        // reset the form
        form.current.reset()
        
    }
    // handle onChange
    function handleOnChange(e){
     // get the key
     const key = e.target.id; 
     // listen to change and update our state
     setRecipe({...recipe, [key]:e.target.value})
    }

    return(
        <>
    <section className="admin" >
    <h3 className="add_meal">Add Meal Recipe</h3>
        <Grid fluid>
        <form onSubmit={handleOnsubmit} id="form">
            <Row className="show-grid">
            <Col xs={24}><input id='meal_title' onChange={handleOnChange} type="text" placeholder={recipe.meal_title}/></Col>
            <Col xs={24}><input id='meal_description' onChange={handleOnChange} type="text" placeholder={recipe.meal_description}/></Col>
            <Col xs={24}><input id='meal_image' type="text" onChange={handleOnChange} placeholder={recipe.meal_image}/></Col>
            <Col xs={24}> <input id='meal_ingredients' onChange={handleOnChange} type="text" placeholder={recipe.meal_ingredients}/></Col>
            <Col xs={24}><input id='meal_cooking_time' onChange={handleOnChange} type="text" placeholder={recipe.meal_cooking_time}/></Col>
            <Col xs={24}><input type="submit" value="+ Add Recipe"/></Col>
            </Row>
        </form>
        </Grid>
        
        </section>
        
        
        
        </>
    )
}