package com.controllers;import com.google.gson.Gson;import com.models.ConfirmationToken;import com.models.LoginDataDTO;import com.models.User.User;import com.models.User.UserDTO;import com.properties.FileStorageProperties;import com.responses.UserVerificationResponse;import com.services.ConfirmationTokenService;import com.services.FileStorageService;import com.services.UserService;import com.transoformers.UserUserDTO;import lombok.RequiredArgsConstructor;import lombok.extern.slf4j.Slf4j;import org.springframework.core.io.Resource;import org.springframework.http.HttpHeaders;import org.springframework.http.MediaType;import org.springframework.http.ResponseEntity;import org.springframework.util.StringUtils;import org.springframework.web.bind.annotation.*;import org.springframework.web.multipart.MultipartFile;import javax.servlet.http.HttpServletRequest;import java.io.IOException;import java.nio.file.Files;import java.nio.file.Paths;import java.util.Calendar;import java.util.Objects;@Slf4j@CrossOrigin@RestController@RequiredArgsConstructor@RequestMapping("/api/user")public class UserController {    private final FileStorageService fileStorageService;    private final UserService userService;    private final FileStorageProperties fileStorageProperties;    private final ConfirmationTokenService confirmationTokenService;    private final UserUserDTO converter;    @PostMapping(consumes = {"multipart/mixed", "multipart/form-data"}, value = "/registerNewUser")    public UserVerificationResponse saveUser(@RequestParam("object") String userJSON,                                    @RequestParam("file") MultipartFile file) {        Gson gson = new Gson();        UserDTO userDTO = gson.fromJson(userJSON, UserDTO.class);        String fileName = StringUtils.cleanPath(Objects.requireNonNull(file.getOriginalFilename()));        userDTO.setImage(fileName);        userDTO.setRole("USER");        UserVerificationResponse userVerificationResponse = new UserVerificationResponse();        User savedUser = createUserAccount(userDTO);        if(savedUser != null){            fileStorageService.storeFile(file);            userVerificationResponse.setStatus(200);            userVerificationResponse.setMessage("Confirm account");            userVerificationResponse.setUser(savedUser);        }        else {            userVerificationResponse.setStatus(500);            userVerificationResponse.setMessage("Account already exists");            userVerificationResponse.setUser(null);        }        log.info("save {} at {}", userDTO, Calendar.getInstance().getTime());        return userVerificationResponse;    }    private User createUserAccount(UserDTO userDTO) {        User registered = null;        try {            registered = userService.save(userDTO);        } catch (Exception e) {            throw e;        }        return registered;    }    @GetMapping("/checkEmailExists")    private Boolean checkEmailExist(@RequestParam String email){        return userService.emailExist(email);    }    @PostMapping("/sendCodeOneMore")    public void sendCodeOneMore(@RequestParam String userId){        userService.sendNewCode(converter.ConvertToUser(userService.getUserByID(Long.valueOf(userId))));    }    @PostMapping("/login")    public boolean login(@RequestBody LoginDataDTO loginDataDTO) {        UserDTO user  = userService.findUserByEmail(loginDataDTO.getEmail());        if(user == null) return false;        if(!user.getIs_confirmed()) return false;        return loginDataDTO.getEmail().equals(user.getEmail()) && loginDataDTO.getPassword().equals(user.getPassword());    }    @GetMapping("/getUser")    public UserDTO getUser(@RequestParam String email){        return userService.findUserByEmail(email);    }    @PutMapping(consumes = {"multipart/mixed", "multipart/form-data"}, value = "/updateUser")    public UserDTO updateUserWithPhoto(@RequestParam("object") String userJSON,                                    @RequestParam("file") MultipartFile file) throws IOException {        Gson gson = new Gson();        UserDTO userDTO = gson.fromJson(userJSON, UserDTO.class);        Files.delete(Paths.get(fileStorageProperties.getUploadDir() + "/" + userService.getUserByID(userDTO.getId()).getImage()));        String fileName = fileStorageService.storeFile(file);        userDTO.setImage(fileName);        return userService.update(userDTO);    }    @GetMapping("/getUserById")    public UserDTO getUserById(@RequestParam String id) {        return userService.getUserByID(Long.valueOf(id));    }    @DeleteMapping("{id}")    public void delete(@PathVariable Long id) throws IOException {        log.info("delete {} at {}", userService.getUserByID(id), Calendar.getInstance().getTime());        userService.delete(id);        Files.delete(Paths.get(fileStorageProperties.getUploadDir() + userService.getUserByID(id).getImage()));    }    @GetMapping("/downloadFile/{id}")    public ResponseEntity<Resource> downloadFile(@PathVariable Long id, HttpServletRequest request) {        String fileName = userService.getUserByID(id).getImage();        Resource resource = fileStorageService.loadFileAsResourse(fileName);        String contentType;        try {            contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());        } catch (IOException ex) {            log.info("Could not determine file type." + fileName + ex);            throw new RuntimeException(ex.getMessage());        }        if (contentType == null) {            contentType = "application/octet-stream";        }        log.info("File downloaded successful" + fileName);        return ResponseEntity.ok().contentType(MediaType.parseMediaType(contentType))                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")                .body(resource);    }    @RequestMapping(value = "/confirm-account", method = {RequestMethod.GET, RequestMethod.POST})    public UserVerificationResponse confirmUserAccount(@RequestParam("token") String confirmationToken) {        UserVerificationResponse userVerificationResponse = new UserVerificationResponse();        ConfirmationToken token = confirmationTokenService.findByConfirmationToken(confirmationToken);        if (token != null) {            UserDTO userDTO = userService.getUserByID(token.getUser_id().getId());            userDTO.setIs_confirmed(true);            userService.update(userDTO);            userVerificationResponse.setMessage("Confirmed");            userVerificationResponse.setStatus(200);            userVerificationResponse.setUser(converter.ConvertToUser(userDTO));        } else {            userVerificationResponse.setMessage("Error");            userVerificationResponse.setStatus(500);            userVerificationResponse.setUser(null);        }        return userVerificationResponse;    }    @GetMapping("/checkUserExistByEmail")    public boolean checkUserExistByEmail(@RequestParam String email) {        UserDTO userDTO = userService.findUserByEmail(email);        return userDTO != null;    }//    @GetMapping("/checkUserExistByLogin")//    public boolean checkUserExistByLogin(@RequestParam String login) {//        UserDTO userDTO = userService.findUserByLogin(login);//        return userDTO != null;//    }////    @PostMapping("/signIn")//    public UserDTO signIn(@RequestBody LoginDataDTO loginDataDTO) {//        UserVerificationResponse userVerificationResponse = new UserVerificationResponse();//        UserDTO existingUserLogin = userService.findUserByLogin(loginDataDTO.getLogin());//        if (existingUserLogin == null) {//            return null;//        } else {//            if (!existingUserLogin.getPassword().equals(loginDataDTO.getPassword())) {//                return null;//            } else {//                return existingUserLogin;//            }//        }//    }//    @GetMapping("/getUserByLogin")//    public UserDTO getUserByLogin(@RequestParam String login){//        return userService.findUserByLogin(login);//    }}