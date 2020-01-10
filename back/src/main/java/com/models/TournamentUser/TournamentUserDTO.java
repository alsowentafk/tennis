package com.models.TournamentUser;

import com.models.Tournament.Tournament;
import com.models.User.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TournamentUserDTO {
    private Long id;
    private Tournament tournament_id;
    private User user_id;
    private String birth_certificate;
    private String pay_certificate;
    private Boolean is_confirmed;
}
