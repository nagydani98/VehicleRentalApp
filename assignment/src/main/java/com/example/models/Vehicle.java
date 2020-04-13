package com.example.models;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Vehicle {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	@NotEmpty
	private String type;
	@NotEmpty
	private String manufacturer;
	@NotEmpty
	private String plateNum;
	@NotEmpty
	private String VIN; //vehicle identification number, alvázszám
	private LocalDate dateOfPurchase;
	@NotEmpty
	private int dailyRate;
	@NotEmpty
	private int kilometers;
	@NotEmpty
	private int status;
}
