package com.transoformers;

import com.models.User.User;
import com.models.User.UserDTO;
import org.springframework.stereotype.Service;

@Service
public class UserUserDTO {

    public User ConvertToUser(UserDTO userDTO) {
        User user = new User();
        user.setId(userDTO.getId());
        user.setEmail(userDTO.getEmail());
        user.setIs_confirmed(userDTO.getIs_confirmed());
        user.setPassword(userDTO.getPassword());
        user.setImage(userDTO.getImage());
        user.setFirst_name(userDTO.getFirst_name());
        user.setSecond_name(userDTO.getSecond_name());
        user.setSurname(userDTO.getSurname());
        user.setBirthday(userDTO.getBirthday());
        user.setCity(userDTO.getCity());
        user.setHand(userDTO.getHand());
        user.setRole(userDTO.getRole());
        return user;
    }

    public UserDTO ConvertToUserDTO(User user) {
        UserDTO userDTO = new UserDTO();
        userDTO.setId(user.getId());
        userDTO.setEmail(user.getEmail());
        userDTO.setIs_confirmed(user.getIs_confirmed());
        userDTO.setPassword(user.getPassword());
        userDTO.setImage(user.getImage());
        userDTO.setFirst_name(user.getFirst_name());
        userDTO.setSecond_name(user.getSecond_name());
        userDTO.setSurname(user.getSurname());
        userDTO.setBirthday(user.getBirthday());
        userDTO.setCity(user.getCity());
        userDTO.setHand(user.getHand());
        userDTO.setRole(user.getRole());
        return userDTO;
    }
}
