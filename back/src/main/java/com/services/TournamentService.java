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
    public TournamentDTO addTournament(TournamentDTO tournamentDTO){
        return converter.ConvertToTournamentDTO(repository.save(converter.ConvertToTournament(tournamentDTO)));
    }
    public TournamentDTO update(TournamentDTO tournamentDTO) {
        TournamentDTO temp = converter.ConvertToTournamentDTO(repository.findById(tournamentDTO.getId()).get());
        temp.setName(tournamentDTO.getName());
        temp.setResults(tournamentDTO.getResults());
        temp.setDate_close_reg(tournamentDTO.getDate_close_reg());
        temp.setDate_cancel_reg(tournamentDTO.getDate_cancel_reg());
        temp.setDate_start(tournamentDTO.getDate_start());
        temp.setRegulations(tournamentDTO.getRegulations());
        return converter.ConvertToTournamentDTO(repository.save(converter.ConvertToTournament(temp)));
    }
    public void delete (Long id){
        repository.deleteById(id);
    }
}
