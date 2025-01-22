import { Component } from '@angular/core';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketAddComponent } from './ticket-add/ticket-add.component';

@Component({
  selector: 'app-support-tickets',
  standalone: true,
  imports: [TicketAddComponent, TicketListComponent],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css'
})
export class SupportTicketsComponent 
{

}
