package com.transoformers;

import com.models.TournamentGame.TournamentGame;
import com.models.TournamentGame.TournamentGameDTO;
import org.springframework.stereotype.Service;

@Service
public class TournamentGameTournamentGameDTO {
    public TournamentGame ConvertToTournamentGame(TournamentGameDTO tournamentGameDTO) {
        TournamentGame tournamentGame = new TournamentGame();
        tournamentGame.setId(tournamentGameDTO.getTournament_id().getId());
        tournamentGame.setTournament_id(tournamentGameDTO.getTournament_id());
        tournamentGame.setGame_id(tournamentGameDTO.getGame_id());
        return tournamentGame;
    }

    public TournamentGameDTO ConvertToTournamentGameDTO(TournamentGame tournamentGame) {
        TournamentGameDTO tournamentGameDTO = new TournamentGameDTO();
        tournamentGameDTO.setId(tournamentGame.getTournament_id().getId());
        tournamentGameDTO.setTournament_id(tournamentGame.getTournament_id());
        tournamentGameDTO.setGame_id(tournamentGame.getGame_id());
        return tournamentGameDTO;
    }
}
