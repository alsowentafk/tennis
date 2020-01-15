package com.configs;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:4200","http://176.114.8.113","http://app-server", "http://192.168.16.1")
                .allowedMethods("POST", "GET", "PUT", "DELETE")
                .allowedHeaders("X-Auth-Token", "Content-Type", "Authorization")
                .allowCredentials(false).maxAge(4800);
    }
}
