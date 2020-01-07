package com.services;

import com.models.Game.Game;
import com.repositorys.GameRepository;
import com.repositorys.TournamentRepository;
import com.transoformers.GameGameDTO;
import com.transoformers.TournamentTournamentDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GameService {
    @Autowired
    private GameRepository repository;

    @Autowired
    private GameGameDTO converter;
    public Game saveGame(Game game){
        return repository.save(game);
    }
}
