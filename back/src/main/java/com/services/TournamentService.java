package com.services;

import com.models.Tournament.Tournament;
import com.models.Tournament.TournamentDTO;
import com.models.User.UserDTO;
import com.repositorys.TournamentRepository;
import com.transoformers.TournamentTournamentDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TournamentService {
    @Autowired
    private TournamentRepository repository;

    @Autowired
    private TournamentTournamentDTO converter;
    public List<TournamentDTO> findAllTournaments(){
        List<TournamentDTO> tournamentDTOList = new ArrayList<>();
        repository.findAll().forEach(a -> tournamentDTOList.add(this.converter.ConvertToTournamentDTO(a)));
        return tournamentDTOList;
    }
    public TournamentDTO findTournamentById(Long id){
        return converter.ConvertToTournamentDTO(repository.findById(id).get());
    }
}
