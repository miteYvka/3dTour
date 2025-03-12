package com.lucrum._dTour.repository;

import com.lucrum._dTour.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface UserRepository extends CrudRepository<User, UUID> {
}
