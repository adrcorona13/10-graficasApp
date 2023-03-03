import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartData, ChartDataset, ChartType } from 'chart.js';

@Component({
    selector: 'app-dona-http',
    templateUrl: 'dona-http.component.html'
})
export class DonaHttpComponent implements OnInit {

    public doughnutChartType: ChartType = 'doughnut';
    public doughnutChartData: ChartData<'doughnut'> = {
        labels: [],
        datasets: []
    };

    constructor(private graficasService: GraficasService) { }

    ngOnInit(): void {
        // this.graficasService.getUsuarios()
        //     .subscribe((data) => {
        //         const labels = Object.keys(data);
        //         this.doughnutChartData.labels = labels;
        //         const values = {
        //             data: Object.values(data)
        //         };
        //         this.doughnutChartData.datasets.push(values);
        //     })
        this.graficasService.getUsuariosDataFormat()
            .subscribe(({labels, values}) => {
                this.doughnutChartData.labels = labels;
                this.doughnutChartData.datasets.push(values);
            })
    }


}