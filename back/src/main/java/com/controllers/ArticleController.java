package com.controllers;

import com.google.gson.Gson;
import com.models.Article.ArticleDTO;
import com.models.User.User;
import com.properties.FileStorageProperties;
import com.repositorys.UserRepository;
import com.services.ArticleService;
import com.services.FileStorageService;
import com.services.UserService;
import com.transoformers.ArticleArticleDTO;
import com.transoformers.UserUserDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Calendar;
import java.util.List;

@Slf4j
@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/article")
public class ArticleController {
    private final ArticleService articleService;
    private final FileStorageService fileStorageService;
    private final FileStorageProperties fileStorageProperties;
    private final UserRepository userRepository;
    private final UserService userService;
    private ArticleArticleDTO converter;

    @PostMapping(consumes = {"multipart/mixed", "multipart/form-data"})
    public void save(@RequestParam("idUser") String userId, @RequestParam("object") String articleJSON,
                     @RequestParam("file") MultipartFile file) {
        User user = userRepository.findById(Long.valueOf(userId)).get();
        Gson gson = new Gson();
        log.info(articleJSON);
        ArticleDTO articleDTO = gson.fromJson(articleJSON, ArticleDTO.class);
        articleDTO.setUser_id(user);
        String fileName = fileStorageService.storeFile(file);
        articleDTO.setImage(fileName);
        articleService.save(articleDTO);
        log.info("save {} at {}", articleDTO, Calendar.getInstance().getTime());
    }

    @GetMapping("/getArticleById")
    public ArticleDTO getArticleById(@RequestParam String id) {
        log.info("get Article by id: {} at {}", id, Calendar.getInstance().getTime());
        return articleService.getArticleById(Long.valueOf(id));
    }

    @PutMapping(value = "/update{id}/userId{userId}", consumes = {"multipart/mixed", "multipart/form-data"})
    public void update(@PathVariable Long id, @PathVariable Long userId, @RequestParam("object") String articleJSON,
                       @RequestParam("file") MultipartFile file) {
        User user = userRepository.findById(userId).get();
        Gson gson = new Gson();
        ArticleDTO articleDTO = gson.fromJson(articleJSON, ArticleDTO.class);
        articleDTO.setUser_id(user);
        String fileName = fileStorageService.storeFile(file);
        articleDTO.setImage(fileName);
        articleService.update(id, articleDTO);
        log.info("update {} at {}", articleDTO, Calendar.getInstance().getTime());
    }

    @GetMapping("/getAll")
    public List<ArticleDTO> getAllArticle() {
        log.info("get all Articles at {}", Calendar.getInstance().getTime());
        return articleService.getAllArticles();
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) throws IOException {
        log.info("delete Article by Id {} at {}", id, Calendar.getInstance().getTime());
        articleService.delete(id);
        Files.delete(Paths.get(fileStorageProperties.getUploadDir() + articleService.getArticleById(id).getImage()));
    }

    @GetMapping("/downloadFile/{id}")
    public ResponseEntity<Resource> downloadFile(@PathVariable Long id, HttpServletRequest request)
            throws MalformedURLException {
        String fileName = articleService.getArticleById(id).getImage();
        Resource resource = fileStorageService.loadFileAsResourse(fileName);
        String contentType = null;
        try {
            contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
        } catch (IOException ex) {
            log.info("Could not determine file type." + fileName + ex);
            throw new RuntimeException(ex.getMessage());
        }

        if (contentType == null) {
            contentType = "application/octet-stream";
        }
        log.info("File downloaded successful" + fileName);
        return ResponseEntity.ok().contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
    }

    @PutMapping("/updateArticle")
    public ArticleDTO updateArticle(@RequestBody ArticleDTO articleDTO){
       return converter.ConvertToArticleDTO(articleService.update(articleDTO.getArticle_id(),articleDTO));
    }
}
