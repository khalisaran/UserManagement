import { Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { Router } from "@angular/router";
import { ModalComponent } from "ng2-bs3-modal/ng2-bs3-modal";
import { ToastsManager } from "ng2-toastr/ng2-toastr";
import { AnalyticsService } from "./analytics.service";
import { IUser } from '../User/user';
import {} from "";
declare var jquery:any;
declare var $ :any;

@Component({
  moduleId: module.id,
  templateUrl: "analytics.component.html"
})
export class AnalyticsComponent implements OnInit {

  private response;
  private body;
  private listoftemplate;
  private report;
  private reportrespnse;
  private user:IUser;

  constructor(
    private router: Router,
    public toastr: ToastsManager,
    vcr: ViewContainerRef,
    private analyticsservice: AnalyticsService
  ) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    var cookiedata = localStorage.getItem('currentUser');
    var json = JSON.parse(cookiedata);
    this.user = json.user;
    this.getreport_byuser()
    // this.analyticsservice.getallreport().subscribe(
    //   data => {
    //     console.log("data", data);
    //     this.response = data;
    //     this.body = JSON.parse(this.response._body);
    //     this.listoftemplate = this.body.value
    //     this.toastr.success("Success!");
    //   },
    //   error => {
    //     this.toastr.error(
    //       "Check the browser console to see more info.",
    //       "Error!"
    //     );
    //   }
    // );
  }
  getreport_byuser(){
    this.analyticsservice.getreport_byuser(this.user.username).subscribe(
      data => {
        console.log("data", data);
        this.listoftemplate = data
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

  selectedreport(){
    console.log("inside the method")
    this.analyticsservice.selectedreport(this.report).subscribe(
      data => {
        console.log("data", data);
        this.reportrespnse = data
        $("#report").html(this.reportrespnse._body)
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
