import { isBoolean } from 'util';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { IUser } from './user';
import { UserService } from './user.service';
import {  } from '';

@Component({
    moduleId: module.id,
    templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit {

  @ViewChild('modalSFU')
   mymodalSFU: ModalComponent;

  private user: IUser = {
  	id: 0,
  	firstname: '', lastname: '', username: '', password:''
  };
  private listofusers:IUser[];
  private create = false;
  private listuser = true;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef , private userservice:UserService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.listofuser();
  }

  listofuser(){
    this.userservice.getalluser().subscribe(
      data => {
        console.log("data", data);
        this.listofusers = data
        this.toastr.success("Success!");
      },
      error => {
        this.toastr.error(
          "Check the browser console to see more info.",
          "Error!"
        );
      }
    );
}

createuser(){
  this.create = true;
  this.listuser = false;

}

createcancel(){
  this.create = false;
  this.listuser = true;
}

openrole(){
this.mymodalSFU.open();

}



}