package com.example.repos;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.models.Client;

@Repository
public interface ClientRepository extends CrudRepository<Client, Long>{

}
