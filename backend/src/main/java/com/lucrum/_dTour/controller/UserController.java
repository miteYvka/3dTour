package com.lucrum._dTour.controller;

import com.lucrum._dTour.model.User;
import com.lucrum._dTour.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*")
public class UserController {
    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping
    Iterable<User> getHomes() {
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    Optional<User> getUserById(@PathVariable UUID id) {
        return userRepository.findById(id);
    }

    @PostMapping
    User postUser(@RequestBody User obj) {
        return userRepository.save(obj);
    }

    @PutMapping("/{id}")
    ResponseEntity<User> putUser(@PathVariable UUID id, @RequestBody User obj) {
        return (!userRepository.existsById(id))
                ? new ResponseEntity<>(userRepository.save(obj), HttpStatus.CREATED)
                : new ResponseEntity<>(userRepository.save(obj), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    void deleteUser(@PathVariable UUID id) {
        userRepository.deleteById(id);
    }
}
