import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EvaluationRadar } from '../../../services/Interfaces/radarEvaluation';
import { ExcelServiceService } from '../../../service/excel-service.service';
import { CommonModule } from '@angular/common';
import { LoadingScreenComponent } from '../../../components/loading-screen/loading-screen.component';
import { RadarChartData } from '../../../services/Interfaces/radarChartData';
import { RadarChartComponent } from '../../../components/charts/radar-chart/radar-chart.component';
import * as DeanSelector from '../../../state/dean-state/dean-state.selector'
import { BarChartComponent } from '../../../components/charts/bar-chart/bar-chart.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { LineGraphComponent } from '../../../components/charts/line-graph/line-graph.component';
import { IndTimelineData } from '../../../services/Interfaces/indTimelineData';
import { LineGraphComponent2 } from '../../../components/charts/line-graph2/line-graph2.component';
import { PieChartComponent } from '../../../components/charts/pie-chart/pie-chart.component';
import { ScatterPlotComponent } from '../../../components/charts/scatter-plot/scatter-plot.component';

interface TableValue {
  header: string[];
  value: string[][];
}

@Component({
  selector: 'app-report-view',
  standalone: true,
  imports: [
    CommonModule,
    LoadingScreenComponent,
    RadarChartComponent,
    BarChartComponent,
    LineGraphComponent,
    LineGraphComponent2,
    PieChartComponent,
    ScatterPlotComponent
  ],
  templateUrl: './report-view.component.html',
  styleUrl: './report-view.component.css'
})
export class ReportViewComponent {

  constructor(
    private route: ActivatedRoute,
    private excelService: ExcelServiceService,
    private store: Store
  ) {
    this.route.params.subscribe(params => {
      this.title = params['id']
      this.handleSwitch(params['id'])
      // this.handleSwitch(this.base64Decode(params['id']))
    })
  }

  router = inject(Router);
  tableValue!: TableValue

  indTImelineData : IndTimelineData[] = []
  selectedFacultyArray: RadarChartData[] = [];


  evaluationDifference$: Observable<any> = this.store.select(DeanSelector.selectEvaluationDifference);
  overallAverageTimeline$ = this.store.select(DeanSelector.selectOverallAverageTimeline);
  educationalAttainmentTimeline$ = this.store.select(DeanSelector.selectCollegeEducTimeline);
  employmentTypes$ = this.store.select(DeanSelector.selectCollegeEmploymentType);
  topSeminar$ = this.store.select(DeanSelector.selectCommonSeminars);
  topLevel$ = this.store.select(DeanSelector.selectCollegeLevel);
  topExpertise$ = this.store.select(DeanSelector.selectTopExpertise);
  teachingLength$ = this.store.select(DeanSelector.selectTeachingLength);
  certTypes$ = this.store.select(DeanSelector.selectCertTypes);

  yearsArray: string[] = Array.from({ length: 15 }, (_, i) => (new Date().getFullYear() - 14) + i).map(String);


  view: string | unknown

  //Holder for that one specific graph so my sanity gets preserved
  diffArr = [[], []];

  handleSwitch(view: string) {
    switch(view) {
      case "1":
        this.setContent(DeanSelector.selectRadarReport)
        this.view = "radar"
        break;
      case "2":
        this.setContent(DeanSelector.selectSemDiffReport)
        this.view = "semDiff"
        break;
      case "3":
        this.setContent(DeanSelector.selectAllAveReport)
        this.view = "indTImeline"
        break;
      case "4":
        this.setContent(DeanSelector.selectOverallAveReport)
        this.view = "educAttainment"
        break;
      case "5":
        this.setContent(DeanSelector.selectCollegeEducTimelineReport)
        this.view = "educReport"
        break;
      case "6":
        this.setContent(DeanSelector.selectCurrentEducAttainment)
        this.view = "educAttainmentReport"
        break;
      case "7":
        this.setContent(DeanSelector.selectEmploymentTypeReport)
        this.view = "employmentType"
        break;
      case "8":
        this.setContent(DeanSelector.selectSeminarReport)
        this.view = "seminarReport"
        break;
      case "9":
        this.setContent(DeanSelector.selectTeachingLevelReport)
        this.view = "teachingLevel"
        break;
      case "10":
        this.setContent(DeanSelector.selectExpertiseReport)
        this.view = "expertiseReport"
        break;
      case "11":
        this.setContent(DeanSelector.selectTeachingCorrelationReport)
        this.view = "teachingEvalCorr"
        break;
      case "12":
        this.setContent(DeanSelector.selectTeachingCertReport)
        this.view = "teachingLengthCert"
        break;
      case "13":
        this.setContent(DeanSelector.selectCertTypeReport)
        this.view = "certType"
        break;
      case "14":
        this.setContent(DeanSelector.selectFacultyReport)
        this.view = "faculty"
        break;

      default:
        this.router.navigate([`admin/reports`])
        break;


    }
  }



  setContent(selector:any) {
    this.excelService.fetchData(selector).then(data => {
      if(!data) return
      this.extractContent(data)
    }).catch(error => {
      console.error("Error fetching data:", error);
    });
  }

  renderRadarChart(item: string[]) {
    let data: RadarChartData = {
      id: parseInt(item[0]),
      name: item[1],
      value: item.slice(4, item.length - 1).map(x => parseFloat(x))
    }

    if (this.selectedFacultyArray.some(item => item.id === data.id)) {
      this.selectedFacultyArray = this.selectedFacultyArray.filter(item => item.id != data.id);
    } else {
      if(this.selectedFacultyArray.length >= 3) return
      this.selectedFacultyArray.push(data);
    }
  }

  renderIndTimeline(item: string[]) {
    const data: IndTimelineData = {
      id: parseInt(item[0]),
      label: item[1],
      value: item.slice(4, item.length).map(x => parseFloat(x))
    }

    if (this.indTImelineData.some(item => item.id === data.id)) {
      this.indTImelineData = this.indTImelineData.filter(item => item.id != data.id);
    } else {
      if(this.indTImelineData.length >= 3) return
      this.indTImelineData = [...this.indTImelineData, data]
    }
    console.log(this.indTImelineData)
  }

  back() {
    this.router.navigate([`admin/reports`])
  }
  base64Decode(base64String: string) {
    const buffer = Buffer.from(base64String, 'base64');
    return buffer.toString('utf-8');
  };

  extractContent(items:object[]) {
    let data: TableValue = {
      header: [],
      value: []
    }

    data.header = [...Object.keys(items[0])]

    let numArr:string[][] = []

    items.map(item => {
      let a: string[] = []
      for (let [key, value] of Object.entries(item)) {
        a = [...a, value]
      }
      numArr = [...numArr, a]
    })

    data.value = [...numArr]

    this.tableValue = data
    // console.log(data)
  }


  toInt(x:string) {
    return parseInt(x)
  }

  title: string = ""
}
