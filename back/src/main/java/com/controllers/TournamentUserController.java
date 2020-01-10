package com.controllers;

import com.google.gson.Gson;
import com.models.Tournament.Tournament;
import com.models.TournamentUser.TournamentUser;
import com.models.TournamentUser.TournamentUserDTO;
import com.models.User.User;
import com.models.User.UserDTO;
import com.properties.FileStorageProperties;
import com.repositorys.TournamentRepository;
import com.repositorys.TournamentUserRepository;
import com.repositorys.UserRepository;
import com.responses.UserVerificationResponse;
import com.services.FileStorageService;
import com.services.TournamentService;
import com.services.TournamentUserService;
import com.transoformers.TournamentTournamentDTO;
import com.transoformers.TournamentUserTournamentUserDTO;
import com.transoformers.UserUserDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Calendar;
import java.util.List;
import java.util.Objects;

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
    private final TournamentRepository tournamentRepository;
    private final TournamentUserRepository tournamentUserRepository;
    @PostMapping(consumes = {"multipart/mixed", "multipart/form-data"}, value = "/regUserOnTournament")
    public TournamentUserDTO saveUser(@RequestParam("object") String tournamentUserJSON,
                                             @RequestParam("file1") MultipartFile fileBirthday,
                                             @RequestParam("file2")  MultipartFile filePay,
                                             @RequestParam String user_id,
                                             @RequestParam String tournament_id) {
        if(tournamentUserService.checkExistsUserAndTournament(user_id, tournament_id) == 1){
            return null;
        };
        Gson gson = new Gson();
        TournamentUser tournamentUser = gson.fromJson(tournamentUserJSON, TournamentUser.class);
        String file1 = fileStorageService.storeFile(fileBirthday);
        String file2 = fileStorageService.storeFile(filePay);
        User user = userRepository.findById(Long.valueOf(user_id)).get();
        Tournament tournament = tournamentRepository.findById(Long.valueOf(tournament_id)).get();
        tournamentUser.setIs_confirmed(false); tournamentUser.setTournament_id(tournament); tournamentUser.setUser_id(user);
        tournamentUser.setBirth_certificate(file1); tournamentUser.setPay_certificate(file2);
        return tournamentUserService.saveTournamentUser(tournamentUser);
    }
    @GetMapping("/findAllPlayers")
    public Iterable<User> findAllPlayers()
    {
        return tournamentUserService.findAllUsersWithTournaments();
    }
    @GetMapping("/findAllPlayersFromTournament")
    public Iterable<User> findAllPlayersFromTournament(@RequestParam String id)
    {
        return tournamentUserService.findAllUsersFromTournament(Long.valueOf(id));
    }
}
