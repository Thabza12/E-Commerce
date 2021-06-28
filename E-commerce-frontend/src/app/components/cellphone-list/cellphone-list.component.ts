import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cellphone } from 'src/app/common/cellphone';
import { Spec } from 'src/app/common/spec';
import { CellphoneService } from 'src/app/services/cellphone.service';
import { SpecService } from 'src/app/services/spec.service';

@Component({
  selector: 'app-cellphone-list',
  templateUrl: './cellphone-list.component.html',
  // templateUrl: './cellphone-grid.component.html',
  styleUrls: ['./cellphone-list.component.css']
})
export class CellphoneListComponent implements OnInit {

  cellphones : Cellphone[] = [];
  currentSpecId!: number;

  constructor(private _cellphoneService: CellphoneService,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(()=> {
      this.listCellphones();
    })
    
  }

  listCellphones(){

    const hasSpecId: boolean = this._activatedRoute.snapshot.paramMap.has('id');

    if (hasSpecId) {
      this.currentSpecId = +this._activatedRoute.snapshot.paramMap.get;
    } else {
      this.currentSpecId = 6;
    }


    this._cellphoneService.getCellphones(this.currentSpecId).subscribe(
      data => this.cellphones = data
    )
    
  }

  handleSpec(){
    

  }

}
