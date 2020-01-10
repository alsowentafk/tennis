package com.transoformers;

import com.models.Tournament.Tournament;
import com.models.Tournament.TournamentDTO;
import com.models.TournamentUser.TournamentUser;
import com.models.TournamentUser.TournamentUserDTO;
import org.springframework.stereotype.Service;

@Service
public class TournamentUserTournamentUserDTO {
    public TournamentUser ConvertToTournamentUser(TournamentUserDTO tournamentUserDTO) {
        TournamentUser tournamentUser = new TournamentUser();
        tournamentUser.setId(tournamentUserDTO.getTournament_id().getId());
        tournamentUser.setTournament_id(tournamentUserDTO.getTournament_id());
        tournamentUser.setUser_id(tournamentUserDTO.getUser_id());
        tournamentUser.setBirth_certificate(tournamentUserDTO.getBirth_certificate());
        tournamentUser.setPay_certificate(tournamentUserDTO.getPay_certificate());
        tournamentUser.setIs_confirmed(tournamentUserDTO.getIs_confirmed());
        return tournamentUser;
    }

    public TournamentUserDTO ConvertToTournamentUserDTO(TournamentUser tournamentUser) {
        TournamentUserDTO tournamentUserDTO = new TournamentUserDTO();
        tournamentUserDTO.setId(tournamentUser.getTournament_id().getId());
        tournamentUserDTO.setTournament_id(tournamentUser.getTournament_id());
        tournamentUserDTO.setUser_id(tournamentUser.getUser_id());
        tournamentUserDTO.setBirth_certificate(tournamentUser.getBirth_certificate());
        tournamentUserDTO.setPay_certificate(tournamentUser.getPay_certificate());
        tournamentUserDTO.setIs_confirmed(tournamentUser.getIs_confirmed());
        return tournamentUserDTO;
    }
}
