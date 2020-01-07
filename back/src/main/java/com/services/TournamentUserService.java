package com.services;

import com.repositorys.TournamentRepository;
import com.repositorys.TournamentUserRepository;
import com.transoformers.TournamentTournamentDTO;
import com.transoformers.TournamentUserTournamentUserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TournamentUserService {
    @Autowired
    private TournamentUserRepository repository;

    @Autowired
    private TournamentUserTournamentUserDTO converter;
}
