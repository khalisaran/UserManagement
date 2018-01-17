import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { AnalyticsService } from '../analytics.service';
import { RoleService } from './role.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoleComponent } from './role.component'
import { chartjs } from 'chartjs'

@NgModule({
    declarations: [
        RoleComponent
    ],
    imports: [
        FormsModule,
        MatSelectModule,
        MatButtonModule,
        CommonModule,
        MatListModule,
        RouterModule.forChild([
            { path: 'analyticsrole', component: RoleComponent }
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        AnalyticsService,
        RoleService
    ]
})

export class RoleModule {

}