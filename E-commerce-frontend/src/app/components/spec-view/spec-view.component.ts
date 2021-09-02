import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Cellphone } from 'src/app/common/cellphone';
import { Spec } from 'src/app/common/spec';
import { SpecService } from 'src/app/services/spec.service';
import { CellphoneService } from 'src/app/services/cellphone.service';

@Component({
  selector: 'app-spec-view',
  templateUrl: './spec-view.component.html',
  styleUrls: ['./spec-view.component.css']
})
export class SpecViewComponent implements OnInit {

  specs: Spec[] = []

  constructor(private _specService: SpecService,
              private _router: Router) { 
    
  }

  ngOnInit(): void{
    // this.getSpecs()
  }


  // getSpecs(){
  //   this._specService.getSpecs().subscribe(
  //     data =>{
  //       this.specs = data;
  //     }
  //   );
  // }

  updateSpec(id: number){
    this._router.navigate(['update-spec', id])
  }

  // deleteSpec(id: number){
  //   this._specService.deleteSpec(id).subscribe(
  //     data =>{
  //       console.log(data);
  //       this.getSpecs();
  //     }
  //   )
  // }

  

}
