package com.models.User;

import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;

@Data
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User{

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
    private String role;
    User(Long id) {
        this.id = id;
    }
}
