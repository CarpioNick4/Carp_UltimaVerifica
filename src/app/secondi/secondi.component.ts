import { Component } from '@angular/core';
import { Secondo } from 'src/moduls/piatti.models';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secondi',
  templateUrl: './secondi.component.html',
  styleUrls: ['./secondi.component.css']
})
export class SecondiComponent {
  @Input() secondi:Secondo[];
  constructor(private router:Router){
    this.secondi =this.router.getCurrentNavigation().extras.state as Secondo[];
  }
}
