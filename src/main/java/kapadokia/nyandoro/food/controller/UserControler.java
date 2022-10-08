package kapadokia.nyandoro.food.controller;

import kapadokia.nyandoro.food.model.Users;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/users")
public class UserControler {

    @GetMapping
    public List<Users> getAllUsers(){
        return List.of(new Users(UUID.randomUUID(),
                "Kapadokia",
                "Nyandoro",
                Users.Gender.MALE,
                "ktnyandoch@gmail.com",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkS8v2vSpIzK2HCPWDdfZP3vbvQhEm5fxuwkNENSNSswbBoWScLb0h3GjVFqgZB9FEpSg&usqp=CAU"),
        new Users(UUID.randomUUID(),
                "Rehema",
                "Kariuki",
                Users.Gender.FEMALE,
                "rehema@gmail.com",
                "https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg")

        );
    }
}
