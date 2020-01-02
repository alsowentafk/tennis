package com.models.Article;

import com.models.User.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ArticleDTO {
    private Long article_id;
    private User user_id;
    private String name;
    private String text;
    private Date created_at;
    private String contacts;
    private String image;
    private String category;
}
