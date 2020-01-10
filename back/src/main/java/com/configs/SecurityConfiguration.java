package com.configs;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;

@Configuration
@EnableWebSecurity
@Slf4j
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication()
                .withUser("zz%bK@7WAmKCF8Dp").password("{noop}w@&zR5-U_amyqb9y").roles("USER")
                .and()
                .withUser("Rp29K#jpM-TgZ8BCm5Ln5hGu7Q69My^UF2uR8LPz").password("{noop}6n!MYwMjrb+$r6d#qC!z9pL2zgqH-4rJMQsK4Bs7").roles("USER", "ADMIN");
    }
    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http
                //HTTP Basic authentication
                .httpBasic()
                .and()
                .authorizeRequests()
                .antMatchers(HttpMethod.GET, "/api/user/checkEmailExists").permitAll()
                .antMatchers(HttpMethod.POST, "/api/user/registerNewUser").permitAll()
                .antMatchers( "/api/user/confirm-account").permitAll()
                .antMatchers( "/api/user/sendCodeOneMore").permitAll()
                .antMatchers(HttpMethod.GET, "/api/user/login").permitAll()
                .antMatchers(HttpMethod.GET, "/api/user/getUser").hasRole("USER")
                .antMatchers(HttpMethod.GET, "/api/tournament/getAllTournaments").permitAll()
                .antMatchers(HttpMethod.GET, "/api/tournament/getTournamentById").permitAll()
                .antMatchers(HttpMethod.GET, "/api/user/updateUser").hasRole("USER")
                .antMatchers(HttpMethod.GET, "/api/tournamentUser/regUserOnTournament").hasRole("USER")
                .antMatchers(HttpMethod.GET, "/api/tournamentUser/findAllPlayers").permitAll()
                .antMatchers(HttpMethod.GET, "/api/tournamentUser/findAllPlayersFromTournament").permitAll()
                .and()
                .csrf().disable();
    }



//        http.csrf().disable().authorizeRequests()
//                .antMatchers("/api/user/**").permitAll()
//                .antMatchers(HttpMethod.POST, "/api/user/**").permitAll()
//                .antMatchers(HttpMethod.GET, "/api/user/**").permitAll()
//                .antMatchers(HttpMethod.PUT, "/api/user/**").permitAll()
//                .antMatchers(HttpMethod.DELETE, "/api/user/**").permitAll()
//                .antMatchers("/api/hashTag/**").permitAll()
//                .antMatchers(HttpMethod.POST, "/api/hashTag/**").permitAll()
//                .antMatchers(HttpMethod.GET, "/api/hashTag/**").permitAll()
//                .antMatchers(HttpMethod.PUT, "/api/hashTag/**").permitAll()
//                .antMatchers(HttpMethod.DELETE, "/api/hashTag/**").permitAll()
//                .antMatchers("/api/article/**").permitAll()
//                .antMatchers(HttpMethod.POST, "/api/article/**").permitAll()
//                .antMatchers(HttpMethod.POST, "/api/article/**").permitAll()
//                .antMatchers(HttpMethod.GET, "/api/article/**").permitAll()
//                .antMatchers(HttpMethod.PUT, "/api/article/**").permitAll()
//                .antMatchers(HttpMethod.DELETE, "/api/article/**").permitAll()
//                .antMatchers("/api/favourite/**").permitAll()
//                .antMatchers(HttpMethod.POST, "/api/favourite/**").permitAll()
//                .antMatchers(HttpMethod.GET, "/api/favourite/**").permitAll()
//                .antMatchers(HttpMethod.PUT, "/api/favourite/**").permitAll()
//                .antMatchers(HttpMethod.DELETE, "/api/favourite/**").permitAll()
//                .antMatchers("/api/favourite/**").permitAll()
//                .antMatchers(HttpMethod.POST, "/api/hobby/**").permitAll()
//                .antMatchers(HttpMethod.GET, "/api/hobby/**").permitAll()
//                .antMatchers(HttpMethod.PUT, "/api/hobby/**").permitAll()
//                .antMatchers(HttpMethod.DELETE, "/api/hobby/**").permitAll()
//                .antMatchers("/api/favourite/**").permitAll()
//                .antMatchers(HttpMethod.POST, "/api/typeHobby/**").permitAll()
//                .antMatchers(HttpMethod.GET, "/api/typeHobby/**").permitAll()
//                .antMatchers(HttpMethod.PUT, "/api/typeHobby/**").permitAll()
//                .antMatchers(HttpMethod.DELETE, "/api/typeHobby/**").permitAll()
//                .antMatchers("/api/comment/**").permitAll()
//                .antMatchers(HttpMethod.POST, "/api/comment/**").permitAll()
//                .antMatchers(HttpMethod.GET, "/api/comment/**").permitAll()
//                .antMatchers(HttpMethod.PUT, "/api/comment/**").permitAll()
//                .antMatchers(HttpMethod.DELETE, "/api/comment/**").permitAll()
//                .antMatchers("/api/like/**").permitAll()
//                .antMatchers(HttpMethod.POST, "/api/like/**").permitAll()
//                .antMatchers(HttpMethod.GET, "/api/like/**").permitAll()
//                .antMatchers(HttpMethod.PUT, "/api/like/**").permitAll()
//                .antMatchers(HttpMethod.DELETE, "/api/like/**").permitAll()
//                .antMatchers("/api/chat/**").permitAll()
//                .antMatchers(HttpMethod.POST, "/api/chat/**").permitAll()
//                .antMatchers(HttpMethod.GET, "/api/chat/**").permitAll()
//                .antMatchers(HttpMethod.PUT, "/api/chat/**").permitAll()
//                .antMatchers(HttpMethod.DELETE, "/api/chat/**").permitAll()
//                .antMatchers("/api/message/**").permitAll()
//                .antMatchers(HttpMethod.POST, "/api/message/**").permitAll()
//                .antMatchers(HttpMethod.GET, "/api/message/**").permitAll()
//                .antMatchers(HttpMethod.PUT, "/api/message/**").permitAll()
//                .antMatchers(HttpMethod.DELETE, "/api/message/**").permitAll()
//                .antMatchers("/api/room/**").permitAll()
//                .antMatchers(HttpMethod.POST, "/api/room/**").permitAll()
//                .antMatchers(HttpMethod.GET, "/api/room/**").permitAll()
//                .antMatchers(HttpMethod.PUT, "/api/room/**").permitAll()
//                .antMatchers(HttpMethod.DELETE, "/api/room/**").permitAll()
//                .antMatchers("/api/roomMessage/**").permitAll()
//                .antMatchers(HttpMethod.POST, "/api/roomMessage/**").permitAll()
//                .antMatchers(HttpMethod.GET, "/api/roomMessage/**").permitAll()
//                .antMatchers(HttpMethod.PUT, "/api/roomMessage/**").permitAll()
//                .antMatchers(HttpMethod.DELETE, "/api/roomMessage/**").permitAll()
//                .anyRequest().authenticated();
//    }
}
