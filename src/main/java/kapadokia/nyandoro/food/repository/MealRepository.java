package kapadokia.nyandoro.food.repository;

import kapadokia.nyandoro.food.model.Meal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public class MealRepository {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public MealRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Meal> selectAllMeals(){
        String sql=""+
                " SELECT meal_id,meal_title, meal_description, meal_image, meal_ingredients, meal_cooking_time " +
                "FROM meal";
        // return a list of meals from JDBC
        // the jdbcTemplate takes in the sql query, fetches that data and return's to us as a java object format
        return jdbcTemplate.query(sql, (resultSet, i)->{

            // get id from the result set
            String mealIdStr = resultSet.getString("meal_id");
            // convert the Id to a UUID
            UUID mealId = UUID.fromString(mealIdStr);

            //grab other details
            String mealTitle = resultSet.getString("meal_title");
            String mealDescription = resultSet.getString("meal_description");
            String mealImage = resultSet.getString("meal_image");
            String mealIngredients = resultSet.getString("meal_ingredients");
            String mealCookingTime = resultSet.getString("meal_cooking_time");

            // return the meal data
            return new Meal(mealId, mealTitle, mealDescription, mealImage, mealIngredients, mealCookingTime);
        });

    }
}
