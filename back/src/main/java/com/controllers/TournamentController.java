package com.controllers;

import com.models.Tournament.Tournament;
import com.models.Tournament.TournamentDTO;
import com.properties.FileStorageProperties;
import com.services.ConfirmationTokenService;
import com.services.FileStorageService;
import com.services.TournamentService;
import com.services.UserService;
import com.transoformers.TournamentTournamentDTO;
import com.transoformers.UserUserDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/tournament")
public class TournamentController {
    private final FileStorageService fileStorageService;
    private final TournamentService tournamentService;
    private final FileStorageProperties fileStorageProperties;
    private final TournamentTournamentDTO converter;
    @GetMapping("/getAllTournaments")
    public List<TournamentDTO> findAllTournaments(){
        return tournamentService.findAllTournaments();
    }
    @GetMapping("/getTournamentById")
    public TournamentDTO findTournamentById(@RequestParam String id){
        return tournamentService.findTournamentById(Long.valueOf(id));
    }
    @PostMapping("/addTournament")
    public TournamentDTO addTournament(@RequestBody TournamentDTO tournamentDTO){
        return tournamentService.addTournament(tournamentDTO);
    }
    @PutMapping("/updateTournament")
    public TournamentDTO updateTournament(@RequestBody TournamentDTO tournamentDTO){
        return tournamentService.update(tournamentDTO);
    }
    @DeleteMapping("/delete")
    public void delete(@RequestParam String id){
        tournamentService.delete(Long.valueOf(id));
    }
}
