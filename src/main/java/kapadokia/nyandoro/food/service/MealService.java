package kapadokia.nyandoro.food.service;

import kapadokia.nyandoro.food.model.Meal;
import kapadokia.nyandoro.food.repository.MealRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MealService {


    private final MealRepository mealRepository;
    @Autowired
    public MealService(MealRepository mealRepository) {
        this.mealRepository = mealRepository;
    }

    public List<Meal> getAllMeals(){
        return  mealRepository.selectAllMeals();
    }
}
