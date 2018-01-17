import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Screen_650engComponent } from './screen_650eng.component';
import { NounService } from './noun.service';

@NgModule({
    declarations: [
        Screen_650engComponent
    ],
    imports: [
        RouterModule.forChild([
            { path: 'Screen_650eng', component: Screen_650engComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        NounService
    ]
})

export class NounModule {

}