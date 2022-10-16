package kapadokia.nyandoro.food.service;

import kapadokia.nyandoro.food.model.Users;
import kapadokia.nyandoro.food.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    public final  UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<Users> getAllUsers() {
        return userRepository.selectAllUsers();
    }
}
