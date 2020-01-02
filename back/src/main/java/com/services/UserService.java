package com.services;

import com.models.ConfirmationToken;
import com.models.User.User;
import com.models.User.UserDTO;
import com.repositorys.UserRepository;
import com.transoformers.UserUserDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserService {

    private final UserRepository repository;
    private final UserUserDTO converter;
    private final ConfirmationTokenService confirmationTokenService;
    private final EmailSenderService emailSenderService;

    public UserDTO getUserByID(Long id) {
        return converter.ConvertToUserDTO(repository.findById(id).get());
    }

    public void save(UserDTO userDTO) {
        User user = converter.ConvertToUser(userDTO);
        repository.save(user);
        ConfirmationToken confirmationToken = new ConfirmationToken(user);
        confirmationTokenService.save(confirmationToken);
        log.info("save Token {} for User {} at {}", confirmationToken.getToken_id(), userDTO,
                Calendar.getInstance().getTime());
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(userDTO.getEmail());
        mailMessage.setSubject("Complete Registration on khmeet.org!");
        mailMessage.setFrom("KHMEET.Khmelnytskyi@gmail.com");
        String confirmTokenEndpoint = "http://localhost:8080/api/user/confirm-account?token=";
        mailMessage.setText("To confirm your account, please click here : "
                + confirmTokenEndpoint + confirmationToken.getConfirmationToken());
        emailSenderService.sendEmail(mailMessage);
        log.info("send message {} on email {} at {}", mailMessage.getSubject(), userDTO.getEmail(),
                Calendar.getInstance().getTime());
    }

    public void update(UserDTO userDTO) {
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
        repository.save(converter.ConvertToUser(temp));
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
