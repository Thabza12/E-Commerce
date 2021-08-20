import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cellphone } from 'src/app/common/cellphone';
import { Spec } from 'src/app/common/spec';
import { CellphoneService } from 'src/app/services/cellphone.service';

@Component({
  selector: 'app-update-cellphone',
  templateUrl: './update-cellphone.component.html',
  styleUrls: ['./update-cellphone.component.css']
})
export class UpdateCellphoneComponent implements OnInit {

  id!: string;
  cellphone: Cellphone = new Cellphone();

  constructor(private _cellphoneService: CellphoneService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router) { }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params['id'];

    this._cellphoneService.getCellphoneById(this.id).subscribe(
      data => {
        this.cellphone = data;
      },
      error => console.log(error));
  }

  updatecellphone(){
    this._cellphoneService.updateCellphone(this.id, this.cellphone)
    .subscribe(data => {
      console.log(data);
      this.cellphone = new Cellphone();
      this.goToCellphoneList()
    }, err => console.log(err))
  }

  goToCellphoneList(){
    this._router.navigate(['/cellphones'])
  }

  onSubmit(){
    console.log(this.cellphone);
    this.updatecellphone();
  }

}
