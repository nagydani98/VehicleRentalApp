import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../service/api.service';
import {Rental} from '../../model/rental';

@Component({
  selector: 'app-rental-update',
  templateUrl: './rental-update.component.html',
  styleUrls: ['./rental-update.component.css']
})
export class RentalUpdateComponent implements OnInit {
  submitted = false;
  closureForm: FormGroup;
  rentalData: Rental;

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.getRental(id);
    this.closureForm = this.fb.group({
      damage: ['', [Validators.required]],
      miles: ['', [Validators.required, Validators.pattern('^[^0][0-9]*$')]],
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

  onSubmit() {
    this.submitted = true;
    if (!this.closureForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        const id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.deleteRental(id);
      }
    }
  }

}
