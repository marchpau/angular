import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ɵInjectableAnimationEngine } from '@angular/platform-browser/animations';

@Injectable({
    providedIn: 'root'
})

export class ApiServiceService {
    url:string = "https://rickandmortyapi.com/api/"

    constructor(private http : HttpClient) {  }

    get(){
        return this.http.get(this.url+"character");
    }

    getByUrl(url:string){
        return this.http.get(url)
    }
}


