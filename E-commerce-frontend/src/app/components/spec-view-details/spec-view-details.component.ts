import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Spec } from 'src/app/common/spec';
import { SpecService } from 'src/app/services/spec.service';

@Component({
  selector: 'app-spec-view-details',
  templateUrl: './spec-view-details.component.html',
  styleUrls: ['./spec-view-details.component.css']
})
export class SpecViewDetailsComponent implements OnInit {

  id!: string;
  spec!: Spec;
  currentCellphoneId!: string;

  constructor(private _activatedRoute: ActivatedRoute,
              private _specService: SpecService) { }

  ngOnInit() {

    this._activatedRoute.paramMap.subscribe(()=>{
      this.getSpec;

    })

    // this.id = this._activatedRoute.snapshot.params['id'];

    // this.spec = new Spec();
    // this._specService.getSpecById(this.id).subscribe(
    //   data => {
    //     this.spec = data;
    //   }
    // )

  }

  getSpec(){
    const hasCellphoneId: boolean = this._activatedRoute.snapshot.paramMap.has('id');

    if(this.currentCellphoneId){
      this._activatedRoute.snapshot.paramMap.get('id');
    }

    this._specService.getSpecById(this.currentCellphoneId).subscribe(
      data => this.spec = data
    )
  }

}
