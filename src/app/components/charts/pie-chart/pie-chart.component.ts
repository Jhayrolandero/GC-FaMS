import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css'
})
export class PieChartComponent {
  public chart: any;
  public chartId: string = `doughnut-${Math.random().toString(36).substr(2, 9)}`;
  @ViewChild('pieChartCanvas') private pieChartCanvas!: ElementRef<HTMLCanvasElement>;

  @Input() data: number[] = [];
  @Input() labels: string[] = [];


  ngAfterViewInit() {
    this.createChart();
  }

  createChart() {
    let data = {
      labels: this.labels,
      datasets: [{
        data: this.data,
        backgroundColor: ['#074287', '#1E7242', '#FF7A00'],
        hoverOffset: 4
      }]
    };

    const ctx = this.pieChartCanvas.nativeElement.getContext('2d');
    if (ctx) {
      this.chart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
          responsive: true, // This makes the chart responsive
          plugins: {
            legend: {
              position: 'bottom'
            }
          }
        }
      });
    }

  }
}
