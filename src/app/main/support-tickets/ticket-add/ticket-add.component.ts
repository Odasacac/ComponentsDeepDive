import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ticket-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ticket-add.component.html',
  styleUrl: './ticket-add.component.css'
})
export class TicketAddComponent 
{
  camposFormulario =
  {
    title: new FormControl(''),
    request: new FormControl(''),
  }

  formulario: FormGroup = new FormGroup(this.camposFormulario);


  formSent()
  {

  }

}
