package com.transoformers;

import com.models.Article.Article;
import com.models.Article.ArticleDTO;
import org.springframework.stereotype.Service;

@Service
public class ArticleArticleDTO {
    public Article ConvertToArticle(ArticleDTO articleDTO) {
        Article article = new Article();
        article.setArticle_id(articleDTO.getArticle_id());
        article.setUser_id(articleDTO.getUser_id());
        article.setName(articleDTO.getName());
        article.setText(articleDTO.getText());
        article.setCreated_at(articleDTO.getCreated_at());
        article.setContacts(articleDTO.getContacts());
        article.setImage(articleDTO.getImage());
        article.setCategory(articleDTO.getCategory());
        return article;
    }

    public ArticleDTO ConvertToArticleDTO(Article article) {
        ArticleDTO articleDTO = new ArticleDTO();
        articleDTO.setArticle_id(article.getArticle_id());
        articleDTO.setUser_id(article.getUser_id());
        articleDTO.setName(article.getName());
        articleDTO.setText(article.getText());
        articleDTO.setCreated_at(article.getCreated_at());
        articleDTO.setContacts(article.getContacts());
        articleDTO.setImage(article.getImage());
        articleDTO.setCategory(article.getCategory());
        return articleDTO;
    }
}
