import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cellphone } from 'src/app/common/cellphone';
import { CellphoneService } from 'src/app/services/cellphone.service';

@Component({
  selector: 'app-create-cellphone',
  templateUrl: './create-cellphone.component.html',
  styleUrls: ['./create-cellphone.component.css']
})
export class CreateCellphoneComponent implements OnInit {

  cellphone: Cellphone = new Cellphone();

  constructor(private _cellphoneService: CellphoneService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  saveCellphone(){
    this._cellphoneService.createCellphone(this.cellphone).subscribe(
      data =>{
        console.log(data);
        this.goToCellphoneList();
      },
      error => console.log(error));
  }

  goToCellphoneList(){
    this._router.navigate(['/cellphones'])
  }

  onSubmit(){
    console.log(this.cellphone);
    this.saveCellphone();
  }

}
