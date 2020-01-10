package com.models.TournamentUser;

import com.models.Tournament.Tournament;
import com.models.User.User;
import lombok.*;

import javax.persistence.*;

@Data
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TournamentUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, unique = true)
    private Long id;
    @ManyToOne(targetEntity = Tournament.class, fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "tournament.id")
    private Tournament tournament_id;
    @ManyToOne(targetEntity = User.class, fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "user.id")
    private User user_id;
    private String birth_certificate;
    private String pay_certificate;
    private Boolean is_confirmed;
}
