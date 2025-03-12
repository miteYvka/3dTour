package com.lucrum._dTour.repository;

import com.lucrum._dTour.model.Render;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface RenderRepository extends CrudRepository<Render, UUID> {
}

