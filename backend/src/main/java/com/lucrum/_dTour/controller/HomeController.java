package com.lucrum._dTour.controller;

import com.lucrum._dTour.model.Home;
import com.lucrum._dTour.repository.HomeRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/home")
@CrossOrigin(origins = "*")
public class HomeController {
    private final HomeRepository homeRepository;

    public HomeController(HomeRepository homeRepository) {
        this.homeRepository = homeRepository;
    }

    @GetMapping
    Iterable<Home> getHomes() {
        return homeRepository.findAll();
    }

    @GetMapping("/{id}")
    Optional<Home> getHomeById(@PathVariable UUID id) {
        return homeRepository.findById(id);
    }

    @PostMapping
    Home postHome(@RequestBody Home obj) {
        return homeRepository.save(obj);
    }

    @PutMapping("/{id}")
    ResponseEntity<Home> putHome(@PathVariable UUID id, @RequestBody Home obj) {
        return (!homeRepository.existsById(id))
                ? new ResponseEntity<>(homeRepository.save(obj), HttpStatus.CREATED)
                : new ResponseEntity<>(homeRepository.save(obj), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    void deleteHome(@PathVariable UUID id) {
        homeRepository.deleteById(id);
    }
}
