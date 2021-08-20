import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Spec } from 'src/app/common/spec';
import { SpecService } from 'src/app/services/spec.service';

@Component({
  selector: 'app-create-spec-view',
  templateUrl: './create-spec-view.component.html',
  styleUrls: ['./create-spec-view.component.css']
})
export class CreateSpecViewComponent implements OnInit {

  spec: Spec = new Spec();

  constructor(private _specServices: SpecService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  saveSpec(){
    this._specServices.createSpec(this.spec).subscribe(
      data =>{
        console.log(data);
        this.goToSpecView();
      },
      error => console.log(error));
  }

  goToSpecView(){
    this._router.navigate(['/spec-view'])
  }

  onSubmit(){
    console.log(this.spec);
    this.saveSpec();
  }

}

