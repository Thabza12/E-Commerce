import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Spec } from 'src/app/common/spec';
import { SpecService } from 'src/app/services/spec.service';

@Component({
  selector: 'app-update-spec-view',
  templateUrl: './update-spec-view.component.html',
  styleUrls: ['./update-spec-view.component.css']
})
export class UpdateSpecViewComponent implements OnInit {

  id!: string;
  spec: Spec = new Spec();
  currentCellphoneId!: string;

  constructor(private _specService: SpecService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router) { }

  ngOnInit(): void {
    // this.id = this._activatedRoute.snapshot.params['id'];

    // this._specService.getSpecById(this.id).subscribe(
    //   data => {
    //     this.spec = data;
    //   },
    //   error => console.log(error));

    this._activatedRoute.paramMap.subscribe(()=>{
      this.getSpec;

    })
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

  updateSpec(){
    this._specService.updateSpec(this.id, this.spec)
    .subscribe(data => {
      console.log(data);
      this.spec = new Spec();
      this.goToSpecview()
    }, err => console.log(err))
  }

  goToSpecview(){
    this._router.navigate(['/spec-view'])
  }

  onSubmit(){
    console.log(this.spec);
    this.updateSpec();
  }

}
