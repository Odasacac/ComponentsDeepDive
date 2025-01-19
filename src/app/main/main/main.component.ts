import { Component } from '@angular/core';
import { ServerStatusComponent } from '../server-status/server-status.component';
import { TrafficComponent } from '../traffic/traffic.component';
import { SupportTicketsComponent } from '../support-tickets/support-tickets.component';
import { DatosHeader } from '../../interfaces/DatosHeader';
import { MainModelComponent } from '../main-model/main-model.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ServerStatusComponent, TrafficComponent, SupportTicketsComponent, MainModelComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent 
{

  headerParaServerStatus: DatosHeader =
  {
    ruta: "status.png",
    texto: "A signal symbol",
    h2: "Server Status"
  }

  headerParaTraffic: DatosHeader =
  {
    ruta: "globe.png",
    texto: "A globe",
    h2: "Traffic"
  }

  headerParaSupportTickets: DatosHeader =
  {
    ruta: "list.png",
    texto: "A list of items",
    h2: "Support Tickets"
  }


}
