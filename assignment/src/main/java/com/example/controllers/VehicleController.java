package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.models.Vehicle;
import com.example.repos.VehicleRepository;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class VehicleController {
	private final VehicleRepository repository;
	
	@GetMapping("/vehicles")
	public List<Vehicle> getVehicles(){
		return (List<Vehicle>) repository.findAll();
	}
	
	@PostMapping("/vehicles")
	public void addVehicle(@RequestBody Vehicle vehicle){
		repository.save(vehicle);
	}
}
