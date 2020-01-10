package com.repositorys;

import com.models.TournamentUser.TournamentUser;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.math.BigInteger;

public interface TournamentUserRepository extends CrudRepository<TournamentUser, Long> {
    @Query(nativeQuery = true, value = "SELECT EXISTS(SELECT * FROM tournament_user WHERE user_id = :user_id AND tournament_id = :tournament_id);")
    Integer findExistUserAndTournament(@Param("user_id") Long user_id, @Param("tournament_id") Long tournament_id);
    @Query(nativeQuery = true, value = "SELECT DISTINCT tournament_user.user_id FROM tournament_user;")
    Iterable<BigInteger> findAllUsers();
    @Query(nativeQuery = true, value = "SELECT tournament_user.user_id FROM tournament_user WHERE tournament_id = :tournament_id")
    Iterable<BigInteger> findAllUsersFromTournament(@Param("tournament_id") Long tournament_id);
}
