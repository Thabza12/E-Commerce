import { Component, OnInit } from '@angular/core';
import { Cellphone } from 'src/app/common/cellphone';
import { CellphoneService } from 'src/app/services/cellphone.service';

@Component({
  selector: 'app-cellphone-list',
  templateUrl: './cellphone-list.component.html',
  styleUrls: ['./cellphone-list.component.css']
})
export class CellphoneListComponent implements OnInit {

  cellphones : Cellphone[] = [];

  constructor(private _cellphoneService: CellphoneService) { }

  ngOnInit() {
    this.listCellphones();
  }

  listCellphones(){
    this._cellphoneService.getCellphones().subscribe(
      data => this.cellphones = data
    )
    
  }

}
