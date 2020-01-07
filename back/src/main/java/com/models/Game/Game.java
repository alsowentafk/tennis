package com.models.Game;

import com.models.Tournament.Tournament;
import com.models.User.User;
import lombok.*;

import javax.persistence.*;

@Data
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, unique = true)
    private Long id;
    private Integer first_player;
    private Integer second_player;
    private Integer first_score;
    private Integer second_score;
    private Integer winner;
    private Boolean completed;
    private String type;
}
