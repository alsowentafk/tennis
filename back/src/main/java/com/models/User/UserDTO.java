package com.models.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    private Long id;
    @NotNull
    @NotEmpty
    private String email;
    @NotNull
    private Boolean is_confirmed;
    @NotNull
    @NotEmpty
    private String password;
    @NotNull
    @NotEmpty
    private String image;
    @NotNull
    @NotEmpty
    private String first_name;
    @NotNull
    @NotEmpty
    private String second_name;
    @NotNull
    @NotEmpty
    private String surname;
    @NotNull
    private Date birthday;
    @NotNull
    @NotEmpty
    private String city;
    @NotNull
    @NotEmpty
    private String hand;
    @NotNull
    @NotEmpty
    private String role;
}