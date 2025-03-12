package com.lucrum._dTour.repository;

import com.lucrum._dTour.model.Point;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface PointRepository extends CrudRepository<Point, UUID> {
}
