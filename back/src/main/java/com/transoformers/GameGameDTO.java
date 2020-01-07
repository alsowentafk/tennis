package com.transoformers;

import com.models.Game.Game;
import com.models.Game.GameDTO;
import org.springframework.stereotype.Service;

@Service
public class GameGameDTO {

    public Game ConvertToGame(GameDTO gameDTO) {
        Game game = new Game();
        game.setId(gameDTO.getId());
        game.setFirst_player(gameDTO.getFirst_player());
        game.setSecond_player(gameDTO.getSecond_player());
        game.setFirst_score(gameDTO.getFirst_score());
        game.setSecond_score(gameDTO.getSecond_score());
        game.setWinner(gameDTO.getWinner());
        game.setCompleted(gameDTO.getCompleted());
        game.setType(gameDTO.getType());
        return game;
    }

    public GameDTO ConvertToGameDTO(Game game) {
        GameDTO gameDTO = new GameDTO();
        gameDTO.setId(game.getId());
        gameDTO.setFirst_player(game.getFirst_player());
        gameDTO.setSecond_player(game.getSecond_player());
        gameDTO.setFirst_score(game.getFirst_score());
        gameDTO.setSecond_score(game.getSecond_score());
        gameDTO.setWinner(game.getWinner());
        gameDTO.setCompleted(game.getCompleted());
        gameDTO.setType(game.getType());
        return gameDTO;
    }
}
