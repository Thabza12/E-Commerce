import { Component, OnInit } from '@angular/core';
import { Cellphone } from './common/cellphone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  cellphone: Cellphone[] = [];
  
  ngOnInit(){
    
  }

  
}
