package kapadokia.nyandoro.food.controller;

import kapadokia.nyandoro.food.model.Users;
import kapadokia.nyandoro.food.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("users")
public class UserControler {


    private final UserService userService;
    @Autowired
    public UserControler(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<Users> getAllUsers(){
        return  userService.getAllUsers();
    }
}
