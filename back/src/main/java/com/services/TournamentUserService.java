package com.services;

import com.models.TournamentUser.TournamentUser;
import com.models.TournamentUser.TournamentUserDTO;
import com.models.User.User;
import com.repositorys.TournamentRepository;
import com.repositorys.TournamentUserRepository;
import com.repositorys.UserRepository;
import com.transoformers.TournamentTournamentDTO;
import com.transoformers.TournamentUserTournamentUserDTO;
import lombok.extern.slf4j.Slf4j;
import org.assertj.core.util.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
@Slf4j
public class TournamentUserService {
    @Autowired
    private TournamentUserRepository repository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private TournamentUserTournamentUserDTO converter;
    public TournamentUserDTO saveTournamentUser(TournamentUser tournamentUser){
        return converter.ConvertToTournamentUserDTO(repository.save(tournamentUser));
    }
    public Integer checkExistsUserAndTournament(String user_id, String tournament_id){
        return repository.findExistUserAndTournament(Long.valueOf(user_id), Long.valueOf(tournament_id));
    }
    public Iterable<User> findAllUsersWithTournaments(){
        List<BigInteger> temp = Lists.newArrayList(repository.findAllUsers());
        List<Long> userIds = new ArrayList<>();
        temp.forEach(a -> userIds.add(a.longValue()));
        return userRepository.findAllById(userIds);
    }
    public Iterable<User> findAllUsersFromTournament(Long tournament_id){
        List<BigInteger> temp = Lists.newArrayList(repository.findAllUsersFromTournament(tournament_id));
        List<Long> userIds = new ArrayList<>();
        temp.forEach(a -> userIds.add(a.longValue()));
        return userRepository.findAllById(userIds);
    }
    public List<TournamentUserDTO> getAll(){
        List<TournamentUserDTO> tournamentUserDTOS = new ArrayList<TournamentUserDTO>();
        repository.findAllUnConfirmed().forEach(a -> tournamentUserDTOS.add(converter.ConvertToTournamentUserDTO(a)));
        return tournamentUserDTOS;
    }
    public TournamentUserDTO getTournamentUserById(Long id){
        return converter.ConvertToTournamentUserDTO(repository.findById(id).get());
    }
    public void deleteTournamentUser(Long id){
        repository.deleteById(id);
    }
    public TournamentUserDTO confirm(Long id){
        TournamentUser tournamentUser =  repository.findById(id).get();
        tournamentUser.setIs_confirmed(true);
        return converter.ConvertToTournamentUserDTO(repository.save(tournamentUser));
    }
}
