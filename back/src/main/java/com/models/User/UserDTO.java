package com.models.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    private Long id;
    private String email;
    private Boolean is_confirmed;
    private String password;
    private String image;
    private String first_name;
    private String second_name;
    private String surname;
    private Date birthday;
    private String city;
    private String hand;
    private enum role {admin, user}
}