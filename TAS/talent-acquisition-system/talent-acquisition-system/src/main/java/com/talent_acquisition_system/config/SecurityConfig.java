package com.talent_acquisition_system.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .cors() // Enable CORS support
                .and()
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/signup/**", "/api/signin").permitAll() // Allow these endpoints
                        .anyRequest().authenticated()
                );
        return http.build();
    }
}
