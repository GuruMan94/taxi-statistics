import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-gender-tile',
  templateUrl: './gender-tile.component.html',
  styleUrls: ['./gender-tile.component.css']
})
export class GenderTileComponent implements OnInit {
  includeActiveLicenses = true
  type = 'pie';
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
    this.http.post("/api/statistics/customers/gender", {
      data: {
        includeActiveLicenses: this.includeActiveLicenses
      },
    }).subscribe(res => {
      this.data = {
        datasets: [{
          data: res["result"]["data"][0]["data"],
          backgroundColor: [
            "#FF6384",
            "#63FF84"
          ]
        }],

        labels: res["result"]["data"][0]["labels"]
      };
    });
  }
}
