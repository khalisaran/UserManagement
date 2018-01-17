import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NounService } from './noun.service';
import { INoun } from './noun';
import {  } from '';

@Component({
    moduleId: module.id,
    templateUrl: 'screen_650eng.component.html'
})
export class Screen_650engComponent implements OnInit {
  private noun: INoun = {
  	id: 0,
  	name: ''
  }
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private nounservice: NounService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }



}