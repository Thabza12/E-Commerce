import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CellphoneListComponent } from './components/cellphone-list/cellphone-list.component';
import { CreateCellphoneComponent } from './components/create-cellphone/create-cellphone.component';
import { CreateSpecViewComponent } from './components/create-spec-view/create-spec-view.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SpecViewDetailsComponent } from './components/spec-view-details/spec-view-details.component';
import { SpecViewComponent } from './components/spec-view/spec-view.component';
import { UpdateCellphoneComponent } from './components/update-cellphone/update-cellphone.component';
import { UpdateSpecViewComponent } from './components/update-spec-view/update-spec-view.component';


const routes: Routes = [
    { path: '', redirectTo: 'cellphones', pathMatch: 'full' },
    { path: 'spec-view', component: SpecViewComponent },
    { path: 'cellphones', component: CellphoneListComponent },
    { path: 'update-spec-view', component: UpdateSpecViewComponent},
    { path: 'update-cellphone', component: UpdateCellphoneComponent},
    { path: 'spec-view-details', component: SpecViewDetailsComponent},
    { path: 'spec-view-details/:id', component: SpecViewDetailsComponent},
    { path: 'create-spec-view', component: CreateSpecViewComponent},
    { path: 'create-cellphone', component: CreateCellphoneComponent},


    { path: '**', component: PageNotFoundComponent }

]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }