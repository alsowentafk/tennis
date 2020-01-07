package com.repositorys;

import com.models.TournamentGame.TournamentGame;
import org.springframework.data.repository.CrudRepository;

public interface TournamentGameRepository extends CrudRepository<TournamentGame, Long> {
}
