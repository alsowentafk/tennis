package com.models.Tournament;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TournamentDTO {
    private Long id;
    @NotNull
    @NotEmpty
    private String name;
    @NotNull
    @NotEmpty
    private String regulations;
    @NotNull
    @NotEmpty
    private Date date_start;
    @NotNull
    @NotEmpty
    private Date date_close_reg;
    @NotNull
    @NotEmpty
    private Date date_cancel_reg;
}
