package com.lucrum._dTour.repository;

import com.lucrum._dTour.model.Home;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface HomeRepository extends CrudRepository<Home, UUID> {
}
