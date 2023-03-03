import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { ChartConfiguration, ChartData, ChartDataset, ChartType } from "chart.js";
import { BaseChartDirective } from "ng2-charts";
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: 'grafica-barra.component.html'
})
export class GraficaBarraComponent implements OnInit{

  @Input() horizontal: boolean = false; 
  @Input() barChartData!: ChartData<'bar'>; 
  @Input() labels: string[] = [];

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor (){

  }

  ngOnInit(): void {
    if(this.horizontal){
      this.barChartOptions!.indexAxis = 'y';
      this.barChartOptions!.scales!["y"]!.min = 0;
    }   
    this.barChartData.labels = this.labels;
  }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];


}