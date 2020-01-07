package com.models.Game;

import com.models.User.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.criteria.CriteriaBuilder;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class GameDTO {
    private Long id;
    private Integer first_player;
    private Integer second_player;
    private Integer first_score;
    private Integer second_score;
    private Integer winner;
    private Boolean completed;
    private String type;
}
