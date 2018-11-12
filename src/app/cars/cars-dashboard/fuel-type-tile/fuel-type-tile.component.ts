import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-fuel-type-tile',
  templateUrl: './fuel-type-tile.component.html',
  styleUrls: ['./fuel-type-tile.component.css']
})
export class FuelTypeTileComponent implements OnInit {
  includeActiveLicenses = true
  type = 'doughnut';
  options = {
    responsive: true
  };

  data = {};
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getStatistics();
  }

  onIncludeActiveLicensesChange() {
    this.getStatistics();
  }

  getStatistics() {
    this.http.post("/api/statistics/cars/fuel-type", {
      data: {
        includeActiveLicenses: this.includeActiveLicenses
      },
    }).subscribe(res => {
      this.data = {
        datasets: [{
          data: res["result"]["data"][0]["data"],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 205, 86)",
            "rgb(54, 162, 235)",
            "rgb(77, 243, 77)"
          ]
        }],

        labels: res["result"]["data"][0]["labels"]
      };
    });
  }
}
