package com.controllers;

import com.models.Game.Game;
import com.properties.FileStorageProperties;
import com.services.FileStorageService;
import com.services.GameService;
import com.services.TournamentService;
import com.transoformers.GameGameDTO;
import com.transoformers.TournamentTournamentDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/game")
public class GameController {
    private final GameService gameService;
    private final GameGameDTO gameGameDTO;
    @PostMapping("/saveGame")
    public Game saveGame(@RequestBody Game game){
        return gameService.saveGame(game);
    }
}
