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
  currentSpecId!: number;
  currentCellphoneId!: number;
  selectedCellphone?: Cellphone;
  cellphone: Cellphone | undefined
  id: any;
  specs: Spec[] = [];

  
  

  constructor(private _cellphoneService: CellphoneService,
              private _router: Router,
              private _messagesService: MessagesService,
              private _specService: SpecService,
              private _activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // this.reloadData();
    // this.getCellphones();
    // this.getCellphone();
    // this.getSpec(this.id);

    this._activatedRoute.paramMap.subscribe(() => {
      this.listCellphones();
      
    })
  }  

  listCellphones(){

    this._cellphoneService.getCellphonesList().subscribe(
      data => this.cellphones = data
    )
    
  }

  
    
  
  // getCellphones(): void {
  //   this._cellphoneService.getCellphones()
  //   .subscribe(cellphones => this.cellphones = cellphones);
  // }

  specView(id: number){
    this._router.navigate(['spec-view', id])
  }

  getCellphone(){

    const hasCellphoneId: boolean = this._activatedRoute.snapshot.paramMap.has('id');

    if (hasCellphoneId) {
      this.currentCellphoneId = +this._activatedRoute.snapshot.paramMap.get;
    } 
    else {
      this.currentCellphoneId = 2;
    }

    this._cellphoneService.getCellphone(this.currentCellphoneId).subscribe(
      data => this.cellphone = data
    )
    // const id = parseInt(this._activatedRoute.snapshot.paramMap.get('id')!, 20);
    // this._cellphoneService.getCellphone(this.id)
    //   .subscribe(cellphone => this.cellphone = cellphone);
  }

  getSpec(id: string){
    this._router.navigate([id, '/spec/'])
  }

  // add(cellphone: string): void {
  //   cellphone = cellphone.trim();
  //   if (!cellphone) { return; }
  //   this._cellphoneService.addCellphone({ modelName } as Cellphone)
  //     .subscribe(hero => {
  //       this.cellphones.push(cellphone);
  //     });
  // }

  delete(celllphone: Cellphone): void {
    this.cellphones = this.cellphones.filter(h => h !== celllphone);
    this._cellphoneService.deleteCellphone(celllphone.id).subscribe();
  }



  onSelect(cellphone: Cellphone): void {
    this.selectedCellphone = cellphone;
    this._messagesService.add(`Cellphone-listComponent: Selected cellphone id=${cellphone.id}`);
  }

  // reloadData() {
  //   this.cellphones = this._cellphoneService.getCellphonesList();
  // }

  // deleteCellphone(id: number) {
  //   this._cellphoneService.deleteCellphone(id)
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.reloadData();
  //       },
  //       error => console.log(error));
  // }

  // handleSpecs(id: number){
  //   this._router.navigate(['specs', id]);
  // }

  // updateCellphone(id: number){
  //   this._router.navigate(['update', id]);
  // }

}
  
  

  // constructor(private _cellphoneService: CellphoneService,
  //             private _activatedRoute: ActivatedRoute,
  //             private _router: Router
  //             ) { }

  
              

  // ngOnInit() {
  //   this._activatedRoute.paramMap.subscribe(()=> {
  //     this.listCellphones();
      
  //   })

  //   this.id = this._activatedRoute.snapshot.params['id'];

  //   this._cellphoneService.getCellphone(this.id)
  //     .subscribe(data => {
  //       console.log(data)
  //       this.cellphones = data;
  //     }, error => console.log(error))

  //   this._cellphoneService.getSpec(this.id)
  //     .subscribe(data => {
  //       console.log(data)
  //       this.specs = data;
  //     }, error => console.log(error))
    
  // }

  // listCellphones(){

  //   const hasSpecId: boolean = this._activatedRoute.snapshot.paramMap.has('id');

  //   if (hasSpecId) {
  //     this.currentSpecId = +this._activatedRoute.snapshot.paramMap.get;
  //   } 
  //   // else {
  //   //   this.currentSpecId = 2;
  //   // }

  //   this._cellphoneService.getSpecs(this.currentSpecId).subscribe(
  //     data => this.cellphones = data
  //   )
    
  // }

  // handleSpec(){

    

  //   // const url = this._cellphoneService.getSpec() + this.type + '/' + id + '/' + 'spec';
  //   // return this.get(url);
  // }
  // get(url: string) {
  //   throw new Error('Method not implemented.');
  // }

  

// }
