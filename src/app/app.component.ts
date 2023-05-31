import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Piatti } from 'src/moduls/piatti.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Carp_angular_routing';
  data:Piatti;
  oPiatti:Observable<Piatti>
  url="https://my-json-server.typicode.com/paolocarugati/semivuota/db";

  constructor(public http:HttpClient){
    this.oPiatti=http.get<Piatti>(this.url);
    this.oPiatti.subscribe(d=>this.data = d);
    
  }
}
