import { Component } from '@angular/core';

import {analyticsService} from './AnalyticsService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'builder-test';
  
  ngOnInit(){
    analyticsService.created();
  }
}
