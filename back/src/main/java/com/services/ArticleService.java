package com.services;

import com.models.Article.Article;
import com.models.Article.ArticleDTO;
import com.repositorys.ArticleRepository;
import com.transoformers.ArticleArticleDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ArticleService {
    @Autowired
    private ArticleRepository repository;

    @Autowired
    private ArticleArticleDTO converter;

    public ArticleDTO getArticleById(long id) {
        return converter.ConvertToArticleDTO(repository.findById(id).get());
    }

    public void save(ArticleDTO articleODT) {
        repository.save(converter.ConvertToArticle(articleODT));
    }

    public Article update(Long id, ArticleDTO articleDTO) {
        ArticleDTO temp = converter.ConvertToArticleDTO(repository.findById(id).get());
        temp.setArticle_id(articleDTO.getArticle_id());
        temp.setUser_id(articleDTO.getUser_id());
        temp.setName(articleDTO.getName());
        temp.setText(articleDTO.getText());
        temp.setCreated_at(articleDTO.getCreated_at());
        temp.setContacts(articleDTO.getContacts());
        return repository.save(converter.ConvertToArticle(temp));
    }

    public List<ArticleDTO> getAllArticles() {
        List<ArticleDTO> articleDTOList = new ArrayList<>();
        repository.findAll().forEach(a -> articleDTOList.add(this.converter.ConvertToArticleDTO(a)));
        return articleDTOList;
    }


    public void delete(Long id) {
        repository.deleteById(id);
    }
}
