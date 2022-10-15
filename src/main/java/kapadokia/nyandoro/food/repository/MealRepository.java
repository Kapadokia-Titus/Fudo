package kapadokia.nyandoro.food.repository;

import kapadokia.nyandoro.food.model.Meal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class MealRepository {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public MealRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Meal> selectAllMeals(){
        String sql="";
        // return a list of meals from JDBC
        // the jdbcTemplate takes in the sql query, fetches that data and return's to us as a java object format
        List<Meal> mealList = jdbcTemplate.query(sql, (resultSet, i)->{
            return null;
        });
      return null;
    }
}
