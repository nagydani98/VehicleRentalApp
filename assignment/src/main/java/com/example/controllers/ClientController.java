package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.models.Client;
import com.example.repos.ClientRepository;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class ClientController {
	private final ClientRepository repository;
	
	@GetMapping("/clients")
	public List<Client> getVehicles(){
		return (List<Client>) repository.findAll();
	}
	
	@PostMapping("/clients")
	public void addVehicle(@RequestBody Client client){
		repository.save(client);
	}
}
