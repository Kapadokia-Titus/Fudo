package kapadokia.nyandoro.food.model;

import java.util.UUID;

public class Meal {

    private final UUID mealId;
    private final String mealTitle;
    private final String mealDescription;
    private final String mealImage;
    private final String mealIngredients;
    private final String mealCookingTime;

    public Meal(UUID mealId, String mealTitle, String mealDescription, String mealImage, String mealIngredients, String mealCookingTime) {
        this.mealId = mealId;
        this.mealTitle = mealTitle;
        this.mealDescription = mealDescription;
        this.mealImage = mealImage;
        this.mealIngredients = mealIngredients;
        this.mealCookingTime = mealCookingTime;
    }

    public UUID getMealId() {
        return mealId;
    }

    public String getMealTitle() {
        return mealTitle;
    }

    public String getMealDescription() {
        return mealDescription;
    }

    public String getMealImage() {
        return mealImage;
    }

    public String getMealIngredients() {
        return mealIngredients;
    }

    public String getMealCookingTime() {
        return mealCookingTime;
    }
}
