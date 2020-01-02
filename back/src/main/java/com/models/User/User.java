package com.models.User;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, unique = true)
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
    User(Long id) {
        this.id = id;
    }
}
