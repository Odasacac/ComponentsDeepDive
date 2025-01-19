import { Component, input } from '@angular/core';
import { DatosHeader } from '../../interfaces/DatosHeader';

@Component({
  selector: 'app-main-model',
  standalone: true,
  imports: [],
  templateUrl: './main-model.component.html',
  styleUrl: './main-model.component.css'
})
export class MainModelComponent 
{
  datosHeader = input.required<DatosHeader>();
}
