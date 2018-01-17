import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { INoun } from './noun';
import {  } from '..//';

@Injectable()
export class NounService {
    public selected_id: number;
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_Noun(noun: INoun): Observable<INoun>{
        return this.apiService.post(this.config.api_url+`/Noun_Default_Activity/Noun/`,noun);

    }
    update_Noun(noun: INoun): Observable<INoun>{
        return this.apiService.put(this.config.api_url+`/Noun_Default_Activity/Noun/`,noun);

    }
    search_for_update_Noun(noun_id: number): Observable<INoun>{
        return this.apiService.get(this.config.api_url+`/Noun_Default_Activity/Noun/${noun_id}`);

    }
    delete_Noun(noun: INoun): Observable<INoun>{
        return this.apiService.delete(this.config.api_url+`/Noun_Default_Activity/Noun/${noun.id}`);

    }
    get_all_Noun(): Observable<INoun[]>{
        return this.apiService.get(this.config.api_url+`/Noun_Default_Activity/Noun/`);

    }
}