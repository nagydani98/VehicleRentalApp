package com.example.repos;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.models.Vehicle;

@Repository
public interface VehicleRepository extends CrudRepository<Vehicle, Long>{

}
