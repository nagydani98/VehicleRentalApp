import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../service/api.service';
import {Rental} from '../../model/rental';
import {Vehicle} from '../../model/vehicle';

@Component({
  selector: 'app-rental-update',
  templateUrl: './rental-update.component.html',
  styleUrls: ['./rental-update.component.css']
})
export class RentalUpdateComponent implements OnInit {
  submitted = false;
  closureForm: FormGroup;
  rentalData: Rental;
  rentedVehicles: Vehicle[];
  VehicleStatus: any = ['AVAILABLE', 'RENTED', 'RETIRED'];
  bill: number;

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.getRental(id);
    this.getRentedVehicles();
    this.closureForm = this.fb.group({
      damage: ['', [Validators.required]],
      miles: ['', [Validators.required, Validators.pattern('^[^0][0-9]*$')]],
      duration: [''],
      bill: ['', [Validators.required]]
    });
  }

  // Getter to access form control
  get myForm() {
    return this.closureForm.controls;
  }

  getRental(id) {
    this.apiService.getRental(id).subscribe(data => {
      this.rentalData = data;
    });
  }


  calculateBill() {
    this.bill = 0;
    const rentalDuration = this.rentalData.start.getDay() - this.rentalData.end.getDay();
    console.log('Rental duration: ' + rentalDuration);
    for (const vehicle of this.rentedVehicles) {
        this.bill += rentalDuration * vehicle.rentalFee;
    }
    if (this.closureForm.value.damage) {
      this.bill += 100000;
      console.log('Vehicle damaged! Extra fee added as penalty!');
    }
  }

  getRentedVehicles() {
    for (const vId of this.rentalData.RentedVehicle) {
      this.apiService.getVehicle(vId).subscribe(data => {
        this.rentedVehicles.push(data);
      });
    }
  }

  onSubmit() {
    this.submitted = true;
    if (!this.closureForm.valid) {
      return false;
    } else {
        this.calculateBill();
        for (const vehicle of this.rentedVehicles) {
          vehicle.status = this.VehicleStatus[0];
          vehicle.miles = this.closureForm.value.miles;
          // @ts-ignore
          this.apiService.updateVehicle(vehicle._id, vehicle);
        }
        const id = this.actRoute.snapshot.paramMap.get('id');

        this.apiService.deleteRental(id);
    }
  }

}
