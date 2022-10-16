package kapadokia.nyandoro.food.repository;

import kapadokia.nyandoro.food.model.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public class UserRepository {
    public final JdbcTemplate jdbcTemplate;
    @Autowired
    public UserRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Users> selectAllUsers() {
        // sql statement
        String sql = "SELECT user_id,user_fname,user_lname,user_email,user_image,gender " +
                "FROM users";
        // create and set the users list
        return jdbcTemplate.query(sql, getUsersRowMapper());

    }

    private static RowMapper<Users> getUsersRowMapper() {
        return (resultSet, i) -> {
            String userIdStr = resultSet.getString("user_id");
            //convert user ID to UUID
            UUID userId = UUID.fromString(userIdStr);
            String userFName = resultSet.getString("user_fname");
            String userLName = resultSet.getString("user_lname");
            String userEmail = resultSet.getString("user_email");
            String userImage = resultSet.getString("user_image");
            // ensure to convert it to upper case to match our enums, then pass it to a gender datatype
            String genderStr = resultSet.getString("gender").toUpperCase();
            Users.Gender gender = Users.Gender.valueOf(genderStr);
            return new Users(
                    userId, userFName, userLName, gender, userEmail, userImage
            );
        };
    }
}
