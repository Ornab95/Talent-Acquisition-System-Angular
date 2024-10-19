package com.talent_acquisition_system.controller;

import com.talent_acquisition_system.model.User;
import com.talent_acquisition_system.model.Hr;
import com.talent_acquisition_system.service.AuthService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/signup/user")
    public ResponseEntity<User> signupUser(@RequestBody User user) {
        User savedUser = authService.registerUser(user);
        return ResponseEntity.ok(savedUser);
    }

    @PostMapping("/signup/hr")
    public ResponseEntity<Hr> signupHr(@RequestBody Hr hr) {
        Hr savedHr = authService.registerHr(hr);
        return ResponseEntity.ok(savedHr);
    }

    @PostMapping("/signin")
    public ResponseEntity<?> signin(@RequestBody User credentials) {
        String email = credentials.getEmail();
        String password = credentials.getPassword();

        Hr hr = authService.signinHr(email, password);
        if (hr != null) {
            // Successful HR login, return role and user data
            return ResponseEntity.ok(createResponse(hr.getFirstName(), "hr"));
        }

        User user = authService.signinUser(email, password);
        if (user != null) {
            // Successful User login, return role and user data
            return ResponseEntity.ok(createResponse(user.getFirstName(), "user"));
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials.");
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpSession session) {
        // Invalidate the session to log the user out
        session.invalidate();

        // Return a success message
        return ResponseEntity.ok("Logout successful.");
    }

    private Map<String, String> createResponse(String name, String role) {
        Map<String, String> response = new HashMap<>();
        response.put("name", name);
        response.put("role", role);
        return response;
    }
}
