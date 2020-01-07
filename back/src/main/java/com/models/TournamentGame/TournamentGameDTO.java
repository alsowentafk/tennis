package com.models.TournamentGame;

import com.models.Game.Game;
import com.models.Tournament.Tournament;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TournamentGameDTO {
    private Long id;
    private Tournament tournament_id;
    private Game game_id;
}
