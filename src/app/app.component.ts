import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'space';

  yearList = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

  selectedYear = '';
  selectedLaunch = null;
  selectedLanding = null;
  dataList = [];
  hasLoader = false;
  constructor(private http: HttpClient) {
    this.getSpaceXData();
  }
 
  getSpaceXData() {
    this.dataList = [];
    this.hasLoader = true;
    this.http.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${this.selectedLaunch || ''}&land_success=${this.selectedLanding || ''}&launch_year=${this.selectedYear}`).subscribe((res: any) => {
      this.dataList = res;
      this.hasLoader = false;
    });
  }

}
