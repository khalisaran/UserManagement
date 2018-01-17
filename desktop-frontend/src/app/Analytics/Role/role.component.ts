import { Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { Router } from "@angular/router";
import { ModalComponent } from "ng2-bs3-modal/ng2-bs3-modal";
import { ToastsManager } from "ng2-toastr/ng2-toastr";
import { AnalyticsService } from "../analytics.service";
import { RoleService } from './role.service';
import {} from "";
declare var jquery:any;
declare var $ :any;

@Component({
  moduleId: module.id,
  templateUrl: "role.component.html"
})
export class RoleComponent implements OnInit {
  
    Currentplaceholer = "--SELECT REPORT --";
    typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  private response;
  private body;
  private listoftemplate;
  private report;
  private reportrespnse;
  private listofusers;
  private selectedusers = [];
  private userselected;
  private useravailable = false;

  constructor(
    private router: Router,
    public toastr: ToastsManager,
    vcr: ViewContainerRef,
    private analyticsservice: AnalyticsService,
    private roleservice: RoleService
  ) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.listofuser();
    this.analyticsservice.getallreport().subscribe(
      data => {
        console.log("data", data);
        this.response = data;
        this.body = JSON.parse(this.response._body);
        this.listoftemplate = this.body.value
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

  listofuser(){
      this.roleservice.getalluser().subscribe(
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

  reportuser(){
    console.log("the report name ---->"+this.report)
    this.roleservice.getuserby_report(this.report).subscribe(
      data => {
        console.log("data", data);
        this.useravailable = true;
        this.userselected = data;
        if(this.userselected.length > 0){
          for ( var i =0; i< this.userselected.length; i++){
            for(var j =0; j< this.listofusers.length; j++){
              if(this.listofusers[j].username === this.userselected[i].username){
                  this.listofusers.splice(j,1)
              }
            }
          }
        }
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

  adduser(value){
   
    if(this.selectedusers.indexOf(value) !== -1){
      this.selectedusers.splice(this.selectedusers.indexOf(value), 1);
    }else{
      this.selectedusers.push(value);    
    }
    
    console.log("the list of users---->"+JSON.stringify(this.selectedusers))
  }

  save(){
    console.log("the report name ---->"+this.report)
    this.roleservice.save(this.selectedusers,this.report).subscribe(
      data => {
        console.log("data", data);
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

 
}
