package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.models.User;
import com.example.repos.UserRepository;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class UserController {

	private final UserRepository userRepository;
	
	@GetMapping("/users")
	public List<User> getUsers(){
		return (List<User>) userRepository.findAll();
	}
	
	@PostMapping("/users")
	public void addUser(@RequestBody User user) {
		userRepository.save(user);
	}
}
