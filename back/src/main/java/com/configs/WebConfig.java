package com.configs;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:4200", "http://localhost")
                .allowedMethods("POST", "GET", "PUT", "DELETE")
                .allowedHeaders("X-Auth-Token", "Content-Type", "Authorization")
                .allowCredentials(false).maxAge(4800);
    }
}
