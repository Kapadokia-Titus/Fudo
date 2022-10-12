package kapadokia.nyandoro.food.repository;

import kapadokia.nyandoro.food.model.Meal;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public class MealRepository {

    public List<Meal> selectAllMeals(){
        return  List.of(new Meal(UUID.randomUUID(),
                        "VEGETABLE STIR FRY(VEGAN)",
                        "Simple to cook vegan cousine",
                        "https://www.dinneratthezoo.com/wp-content/uploads/2019/02/vegetable-stir-fry-3.jpg",
                        "Prep: 10 Min, Cook: 25 Min, Total: 35 Mins, Servings: 4 INGREDIENTS" +
                                "French Beans(Mishiri), 1 large Onion, 2 Cloves garlic, Carrots, 1 Tomato, Salt to taste, Cooking Oil",
                        "35 Min"),

                new Meal(UUID.randomUUID(),
                        "MEATLESS PILAU(VEGAN)",
                        "Simple to cook pilau cousine for vegan people",
                        "https://tildaricelive.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/04/19150057/veg-pilau-2.png",
                        "Prep: 15 Mins, Cook: 30 Mins, Total: 45 Mins, Servings: 4, INGREDIENTS, Rice, 3 Cloves garlic, A piece of ginger, 2 tomatoes, Pilau Masala, Onions, Cooking Oil",
                        "45 Min"),
                new Meal(UUID.randomUUID(),
                        "Sweet Potato Butternut Squash Soup",
                        "How to Make Sweet Potato Butternut Squash Soup:",
                        "https://tildaricelive.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/04/19150057/veg-pilau-2.png",
                        "It’s made with tomatoes, Italian sausage, and garbanzo beans is a perfect fall soup recipe!",
                        "45 Min"),
                new Meal(UUID.randomUUID(),
                        "Sweet Potato Butternut Squash Soup",
                        "How to Make Sweet Potato Butternut Squash Soup:",
                        "https://tastesbetterfromscratch.com/wp-content/uploads/2015/10/Butternut-Squash-Squash-Soup-1.jpg",
                        "It’s made with tomatoes, Italian sausage, and garbanzo beans is a perfect fall soup recipe!",
                        "45 Min"),
                new Meal(UUID.randomUUID(),
                        "Chicken Kabobs",
                        "How to make kabobs in the oven",
                        "https://tastesbetterfromscratch.com/wp-content/uploads/2013/06/Chicken-Kebabs-3.jpg",
                        "Soy sauce, Sprite, Oil, Garlic powder, Horseradish, Chicken, Bell pepper, Onion,Wooden skewers",
                        "20 Min"),
                new Meal(UUID.randomUUID(),
                        "BBQ Chicken Tacos",
                        "How to make BBQ Chicken Tacos",
                        "https://tastesbetterfromscratch.com/wp-content/uploads/2018/07/BBQ-Chicken-Tacos-6-1-1024x1536.jpg",
                        "Marinated BBQ chicken is served in a warm tortilla topped with black beans, corn, onion, cilantro, avocado and a creamy cilantro lime sauce.",
                        "35 Min")
        );
    }
}
