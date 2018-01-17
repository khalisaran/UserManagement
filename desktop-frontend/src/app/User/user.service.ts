import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { IUser } from './user';
import {  } from '..//';

@Injectable()
export class UserService {
    public selected_id: number;
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    getalluser(){
        return this.apiService.get(this.config.api_url+`/jsreport/Users/getall/`);
    }

}