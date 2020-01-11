package com.services;

import com.models.ConfirmationToken;
import com.models.User.User;
import com.models.User.UserDTO;
import com.repositorys.ConfirmationTokenRepository;
import com.repositorys.UserRepository;
import com.transoformers.UserUserDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserService  {

    private final UserRepository repository;
    private final UserUserDTO converter;
    private final ConfirmationTokenService confirmationTokenService;
    private final ConfirmationTokenRepository confirmationTokenRepository;
    private final EmailSenderService emailSenderService;

    public UserDTO getUserByID(Long id) {
        return converter.ConvertToUserDTO(repository.findById(id).get());
    }

    public User save(UserDTO userDTO) {
        User user = converter.ConvertToUser(userDTO);
        user.setIs_confirmed(false);
        if(emailExist(userDTO.getEmail())) return null;
        User savedUser = repository.save(user);
        sendNewCode(savedUser);
        return savedUser;
    }
    public void sendNewCode(User user){
        confirmationTokenRepository.deletePreviousTokens(user.getId());
        ConfirmationToken confirmationToken = new ConfirmationToken(user);
        confirmationTokenService.save(confirmationToken);
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(user.getEmail());
        mailMessage.setSubject("Підтвердіть реєстрацію на сайті тенісного клубу НТК 'Митра'!\n");
        mailMessage.setFrom("KHMEET.Khmelnytskyi@gmail.com");
        mailMessage.setText("Для підтвердження вашого аккаунту, ваш код підтвердження:  : "
                +  confirmationToken.getConfirmationToken());
        emailSenderService.sendEmail(mailMessage);
    }
    public Boolean emailExist(String email){
        User user = repository.findByEmailIgnoreCase(email);
        return user != null;
    }
    public UserDTO update(UserDTO userDTO) {
        UserDTO temp = converter.ConvertToUserDTO(repository.findById(userDTO.getId()).get());
        temp.setEmail(userDTO.getEmail());
        temp.setIs_confirmed(userDTO.getIs_confirmed());
        temp.setPassword(userDTO.getPassword());
        temp.setImage(userDTO.getImage());
        temp.setFirst_name(userDTO.getFirst_name());
        temp.setSecond_name(userDTO.getSecond_name());
        temp.setSurname(userDTO.getSurname());
        temp.setBirthday(userDTO.getBirthday());
        temp.setCity(userDTO.getCity());
        temp.setHand(userDTO.getHand());
        return converter.ConvertToUserDTO(repository.save(converter.ConvertToUser(temp)));
    }

    public List<UserDTO> getAllUsers() {
        List<UserDTO> userDTOList = new ArrayList<>();
        repository.findAll().forEach(a -> userDTOList.add(this.converter.ConvertToUserDTO(a)));
        return userDTOList;
    }

    public UserDTO findUserByEmail(String email) {
        User user = repository.findByEmailIgnoreCase(email);
        return user != null ? converter.ConvertToUserDTO(user) : null;
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
