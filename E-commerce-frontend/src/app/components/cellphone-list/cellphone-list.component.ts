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
  id!: number;
  searchMode!: boolean;
  currentSpecId!: number;
  keyword!: string
  searchValue!: string;
    

  constructor(private _cellphoneService: CellphoneService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // this.getCellphones();
    this.listCellphones();
  }

  listCellphones(){
    this.searchMode = this._activatedRoute.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchCellphones();
      
    } else {
      this.handleCellphoneList();
      
    }
  }

  handleCellphoneList(){
    const hasSpecId: boolean = this._activatedRoute.snapshot.paramMap.has('id');

    if (hasSpecId) {
      this.currentSpecId = +this._activatedRoute.snapshot.paramMap.get;
      
    } else {
      this.currentSpecId = 1
      
    }

    this._cellphoneService.getCellphonesList(this.currentSpecId).subscribe(
      data => this.cellphones = data
    )
  }

  handleSearchCellphones(){
    const keyword = this._activatedRoute.snapshot.paramMap.get('keyword');

    this._cellphoneService.searchCellphone(this.keyword).subscribe(
      data => {
        this.cellphones = data;
      }
    )
  }

  searchCellphones(keyword: string){
    console.log('keyword', keyword);
    this._router.navigateByUrl('/search/'+keyword);

  }

  // getCellphones(){
  //   this._cellphoneService.getCellphonesList().subscribe(
  //     data =>{
  //       this.cellphones = data;
  //     }
  //   );
  // }

  updateCellphone(id: number){
    this._router.navigate(['update-cellphone', id])
  }

  // deleteCellphone(id: number){
  //   this._cellphoneService.deleteCellphone(id).subscribe(
  //     data =>{
  //       console.log(data);
  //       this.getCellphones();
  //     }
  //   )
  // }

  specViewDetails(id: number){
    this._router.navigate(['spec-view-details', id])
  }

}
