package kapadokia.nyandoro.food.model;

import java.util.UUID;

public class Users {

    private final UUID userId;
    private final String fname;
    private final String lname;
    private final Gender gender;
    private final String userEmail;
    private final String userImage;

    public Users(UUID userId, String fname, String lname, Gender gender, String userEmail, String userImage) {
        this.userId = userId;
        this.fname = fname;
        this.lname = lname;
        this.gender = gender;
        this.userEmail = userEmail;
        this.userImage = userImage;
    }

    public UUID getUserId() {
        return userId;
    }

    public String getFname() {
        return fname;
    }

    public String getLname() {
        return lname;
    }

    public Gender getGender() {
        return gender;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public String getUserImage() {
        return userImage;
    }

   public enum Gender{
        MALE, FEMALE, OTHER
    }
}
