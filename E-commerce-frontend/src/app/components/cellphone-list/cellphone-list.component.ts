import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cellphone } from 'src/app/common/cellphone';
import { Spec } from 'src/app/common/spec';
import { CellphoneService } from 'src/app/services/cellphone.service';
import { MessagesService } from 'src/app/services/messages.service';
import { SpecService } from 'src/app/services/spec.service';

@Component({
  selector: 'app-cellphone-list',
  templateUrl: './cellphone-list.component.html',
  // templateUrl: './cellphone-grid.component.html',
  styleUrls: ['./cellphone-list.component.css']
})
export class CellphoneListComponent implements OnInit {

  // cellphones!: Observable<Cellphone[]>;
  cellphones: Cellphone[] = [];
  id!: string;
    

  constructor(private _cellphoneService: CellphoneService,
              private _router: Router) {}

  ngOnInit() {
    this.getCellphones();
  }

  getCellphones(){
    this._cellphoneService.getCellphonesList().subscribe(
      data =>{
        this.cellphones = data;
      }
    );
  }

  updateCellphone(id: string){
    this._router.navigate(['update-cellphone', id])
  }

  deleteCellphone(id: string){
    this._cellphoneService.deleteCellphone(id).subscribe(
      data =>{
        console.log(data);
        this.getCellphones();
      }
    )
  }

  specViewDetails(id: string){
    this._router.navigate(['spec-view-details', id])
  }

}
