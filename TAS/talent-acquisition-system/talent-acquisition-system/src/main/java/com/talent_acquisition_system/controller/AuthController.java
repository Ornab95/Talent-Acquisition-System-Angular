package com.talent_acquisition_system.controller;

import com.talent_acquisition_system.model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class UserController<LoginRequest> {
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        // Register logic
        return null;
    }

    // POST /login
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
        // Authentication logic
        return "Hello";
    }
}
