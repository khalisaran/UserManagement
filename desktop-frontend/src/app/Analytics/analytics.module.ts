import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnalyticsComponent } from './analytics.component';
import { MatSelectModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { AnalyticsService } from './analytics.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { chartjs } from 'chartjs'

@NgModule({
    declarations: [
        AnalyticsComponent
    ],
    imports: [
        FormsModule,
        MatSelectModule,
        CommonModule,
        RouterModule.forChild([
            { path: 'analytics', component: AnalyticsComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        AnalyticsService
    ]
})

export class AnalyticsModule {

}