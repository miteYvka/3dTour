package com.lucrum._dTour.controller;

import com.lucrum._dTour.model.Point;
import com.lucrum._dTour.repository.PointRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/point")
@CrossOrigin(origins = "*")
public class PointController {
    private final PointRepository pointRepository;

    public PointController(PointRepository pointRepository) {
        this.pointRepository = pointRepository;
    }

    @GetMapping
    Iterable<Point> getPoint() {
        return pointRepository.findAll();
    }

    @GetMapping("/{id}")
    Optional<Point> getPointById(@PathVariable UUID id) {
        return pointRepository.findById(id);
    }

    @PostMapping
    Point postPoint(@RequestBody Point obj) {
        return pointRepository.save(obj);
    }

    @PutMapping("/{id}")
    ResponseEntity<Point> putPoint(@PathVariable UUID id, @RequestBody Point obj) {
        return (!pointRepository.existsById(id))
                ? new ResponseEntity<>(pointRepository.save(obj), HttpStatus.CREATED)
                : new ResponseEntity<>(pointRepository.save(obj), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    void deletePoint(@PathVariable UUID id) {
        pointRepository.deleteById(id);
    }
}
