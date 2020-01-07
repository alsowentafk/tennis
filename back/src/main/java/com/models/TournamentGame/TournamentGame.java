package com.models.TournamentGame;

import com.models.Game.Game;
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
public class TournamentGame {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, unique = true)
    private Long id;
    @ManyToOne(targetEntity = Tournament.class, fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "tournament.id")
    private Tournament tournament_id;
    @ManyToOne(targetEntity = Game.class, fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "game.id")
    private Game game_id;
}
