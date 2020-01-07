package com.controllers;

import com.models.TournamentGame.TournamentGame;
import com.properties.FileStorageProperties;
import com.repositorys.GameRepository;
import com.repositorys.TournamentUserRepository;
import com.repositorys.UserRepository;
import com.services.FileStorageService;
import com.services.TournamentGameService;
import com.services.TournamentUserService;
import com.transoformers.TournamentGameTournamentGameDTO;
import com.transoformers.TournamentUserTournamentUserDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/tournamentGame")
public class TournamentGameController {
    private final TournamentGameService tournamentGameService;
    private final TournamentGameTournamentGameDTO converter;
    private final GameRepository gameRepository;
    private final TournamentUserRepository tournamentUserRepository;
}
