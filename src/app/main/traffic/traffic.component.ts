import { Component } from '@angular/core';
import { dummyTrafficData } from '../../others/dummyTrafficData';

@Component({
  selector: 'app-traffic',
  standalone: true,
  imports: [],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css'
})
export class TrafficComponent 
{
  dummyTF = dummyTrafficData;
  maxTraffic = Math.max(...this.dummyTF.map((data) => data.value));
}
