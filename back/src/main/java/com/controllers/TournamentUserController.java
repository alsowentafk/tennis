package com.controllers;

import com.properties.FileStorageProperties;
import com.repositorys.TournamentUserRepository;
import com.repositorys.UserRepository;
import com.services.FileStorageService;
import com.services.TournamentService;
import com.services.TournamentUserService;
import com.transoformers.TournamentTournamentDTO;
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
@RequestMapping("/api/tournamentUser")
public class TournamentUserController {
    private final FileStorageService fileStorageService;
    private final TournamentUserService tournamentUserService;
    private final FileStorageProperties fileStorageProperties;
    private final TournamentUserTournamentUserDTO converter;
    private final UserRepository userRepository;
    private final TournamentUserRepository tournamentUserRepository;
}
