import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../../config/config.service';
import { ApiService } from '../../config/api.service';
import {  } from '..//';

@Injectable()
export class RoleService {
    public selected_id: number;
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

   
    getalluser(){
        return this.apiService.get(this.config.api_url+`/jsreport/Users/getall/`);
    }

    
    save(listofuser,report){
        var data = {
            user: listofuser,
            reportname : report
        }
        console.log("the data ---->",data)
        return this.apiService.post(this.config.api_url+`/jsreport/Users/add/`,data);
    }

    getuserby_report(reportname){
        return this.apiService.get(this.config.api_url+`/jsreport/Users/get/${reportname}`);
    }

}