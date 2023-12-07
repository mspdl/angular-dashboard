import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  private data: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.data = data;
      this.init();
    });
  }

  init(): void {
    if (typeof google !== 'undefined') {
      google.charts.load('current', { packages: ['corechart'] });
      setTimeout(() => {
        google.charts.setOnLoadCallback(this.showCharts());
      }, 200);
    }
  }

  showCharts(): void {
    this.showPieChart();
    this.show3dPieChart();
    this.showDonutChart();
    this.showBarChart();
    this.showColumnChart();
    this.showLineChart();
  }

  showPieChart(): void {
    const pieChartElement = document.getElementById('pie_chart');
    const chart = new google.visualization.PieChart(pieChartElement);

    chart.draw(this.getGraphDataTable(), this.getGraphOptions('Pie Chart'));
  }

  show3dPieChart(): void {
    const pieChartElement3d = document.getElementById('3d_pie_chart');
    const chart = new google.visualization.PieChart(pieChartElement3d);
    const options = this.getGraphOptions('3D Pie Chart');

    options['is3D'] = true;
    chart.draw(this.getGraphDataTable(), options);
  }

  showDonutChart(): void {
    const donutChart = document.getElementById('donut_chart');
    const chart = new google.visualization.PieChart(donutChart);
    const options = this.getGraphOptions('Donut Chart');
    const pieHoleSize = 0.4;

    options['pieHole'] = pieHoleSize;
    chart.draw(this.getGraphDataTable(), options);
  }

  showBarChart(): void {
    const barChart = document.getElementById('bar_chart');
    const chart = new google.visualization.BarChart(barChart);
    const options = this.getGraphOptions("Bar Chart");

    options["legend"] = {position: 'none'}
    chart.draw(this.getGraphDataTable(), options);
  }

  showColumnChart(): void {
    const columnChart = document.getElementById('column_chart');
    const chart = new google.visualization.ColumnChart(columnChart);
    const options = this.getGraphOptions("Column Chart");

    options["legend"] = {position: 'none'}
    chart.draw(this.getGraphDataTable(), options);
  }

  showLineChart(): void {
    const lineChart = document.getElementById('line_chart');
    const chart = new google.visualization.LineChart(lineChart);
    const options = this.getGraphOptions("Line Chart");

    options["legend"] = {position: 'none'}
    chart.draw(this.getGraphDataTable(), options);
  }

  getGraphDataTable(): any {
    const dataTable = new google.visualization.DataTable();

    dataTable.addColumn('string', 'Month');
    dataTable.addColumn('number', 'Quantity');
    dataTable.addRows(this.data);

    return dataTable;
  }

  getGraphOptions(graphType: string): any {
    return {
      title: `Number of registrations in the first semester (${graphType})`,
      width: 400,
      height: 300,
    };
  }
}
