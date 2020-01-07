package com.transoformers;

import com.models.Tournament.Tournament;
import com.models.Tournament.TournamentDTO;
import org.springframework.stereotype.Service;

@Service
public class TournamentTournamentDTO {

    public Tournament ConvertToTournament(Tournament tournamentDTO) {
        Tournament tournament = new Tournament();
        tournament.setId(tournamentDTO.getId());
        tournament.setName(tournamentDTO.getName());
        tournament.setRegulations(tournamentDTO.getRegulations());
        tournament.setDate_start(tournamentDTO.getDate_start());
        tournament.setDate_close_reg(tournamentDTO.getDate_close_reg());
        tournament.setDate_cancel_reg(tournamentDTO.getDate_cancel_reg());
        return tournament;
    }

    public TournamentDTO ConvertToTournamentDTO(Tournament tournament) {
        TournamentDTO tournamentDTO = new TournamentDTO();
        tournamentDTO.setId(tournament.getId());
        tournamentDTO.setName(tournament.getName());
        tournamentDTO.setRegulations(tournament.getRegulations());
        tournamentDTO.setDate_start(tournament.getDate_start());
        tournamentDTO.setDate_cancel_reg(tournament.getDate_cancel_reg());
        tournamentDTO.setDate_close_reg(tournament.getDate_close_reg());
        return tournamentDTO;
    }
}
