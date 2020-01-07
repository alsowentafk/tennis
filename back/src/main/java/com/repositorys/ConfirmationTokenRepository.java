package com.repositorys;

import com.models.ConfirmationToken;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface ConfirmationTokenRepository extends CrudRepository<ConfirmationToken, Long> {
    ConfirmationToken findByConfirmationToken(String confirmationToken);
    @Transactional
    @Modifying
    @Query(nativeQuery = true, value = "DELETE FROM confirmation_token\n" +
            "WHERE user_id = :idUser")
    void deletePreviousTokens(@Param("idUser") Long idUser);
}
