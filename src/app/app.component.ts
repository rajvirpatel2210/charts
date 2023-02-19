import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Highcharts from 'highcharts/highstock';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  // constructor(
      // private http: HttpClient,
    // )
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column',
      scrollablePlotArea: {
        minWidth: 1000,
      },
    },
    yAxis: {
      visible: false,
    },
    title: {
      text: 'Total Distance Travel By Province',
    },
    tooltip: {
      shared: true,
    },
    xAxis: {
      scrollbar: {
        enabled: false,
      },
      categories: ['Western Cap', 'Free State', 'Gauteng','Limpopo'],
    },

    series: [
      {
        type: 'column',
        name: '',
        data: [500, 700, 555, 1000],
        showInLegend: false,
        events: { click: (event)=> this.eventClicked(event)}
      },
      // {
      //   name: "Nicesnippets.com",
      //   type: "column",
      //   data: [677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654]
      // }
    ],
  };
  ngOnInit() {

    // once the data come from the api we have to set into series

    // this.http.get('https://localhost:3000/api/chart/list').subscribe(data=> {
    //   if(data) {
    //     this.chartOptions.series = [];
    //     this.chartOptions.series.push(data)
    //   }
    // })
  }
  eventClicked(event) {
    console.log(event);
  }
  backClick() {
    // this
  }
}
