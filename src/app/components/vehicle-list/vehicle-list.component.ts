import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  Vehicles: any = [];

  constructor(private apiService: ApiService) {
    this.readVehicle();
  }

  ngOnInit() {}

  readVehicle() {
    this.apiService.getAllVehicles().subscribe((data) => {
      this.Vehicles = data;
    });
  }

  removeVehicle(vehicle, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deleteVehicle(vehicle._id).subscribe((data) => {
          this.Vehicles.splice(index, 1);
        }
      );
    }
  }

}
