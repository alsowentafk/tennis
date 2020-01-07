package com.repositorys;

import com.models.TournamentUser.TournamentUser;
import org.springframework.data.repository.CrudRepository;

public interface TournamentUserRepository extends CrudRepository<TournamentUser, Long> {
}
