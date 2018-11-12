import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-age-tile',
  templateUrl: './age-tile.component.html',
  styleUrls: ['./age-tile.component.css']
})
export class AgeTileComponent implements OnInit {
  includeActiveLicenses = true;
  type = 'bar';
  data = {};
  options = {
    responsive: true,
    legend: { display: false },
    title: {
      display: true,
      text: 'რაოდენობა ასაკის მიხედვით'
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }

  };
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getStatistics();
  }

  onIncludeActiveLicensesChange(){
    this.getStatistics();
  }

  getStatistics(){
    this.http.post("/api/statistics/customers/age",{
      "data":{
        "includeActiveLicenses":this.includeActiveLicenses
      },
    }).subscribe(res=>{
      this.data = {
        datasets: [{
          data: res["result"]["data"][0]["data"],
          backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"]
        }],
    
        labels: res["result"]["data"][0]["labels"]
      };
    });
  }

}
