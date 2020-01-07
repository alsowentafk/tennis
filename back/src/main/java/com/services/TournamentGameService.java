package com.services;

import com.repositorys.TournamentGameRepository;
import com.transoformers.TournamentGameTournamentGameDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TournamentGameService {
    @Autowired
    private TournamentGameRepository tournamentGameRepository;
    @Autowired
    private TournamentGameTournamentGameDTO converter;
}
