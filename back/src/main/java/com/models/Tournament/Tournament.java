package com.models.Tournament;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Tournament {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, unique = true)
    private Long id;
    private String name;
    private String regulations;
    private Date date_start;
    private Date date_close_reg;
    private Date date_cancel_reg;
    private String results;
}
