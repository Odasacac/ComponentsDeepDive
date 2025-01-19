import { Component } from '@angular/core';
import { ServerStatusComponent } from '../server-status/server-status.component';
import { TrafficComponent } from '../traffic/traffic.component';
import { SupportTicketsComponent } from '../support-tickets/support-tickets.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ServerStatusComponent, TrafficComponent, SupportTicketsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
