import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class GraficasService { 

    private _baseURL: string = 'http://localhost:3000/grafica'

    constructor(private httpClient: HttpClient){ }

    getUsuarios(){
        return this.httpClient.get(this._baseURL);
    }
}