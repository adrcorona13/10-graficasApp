import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GraficasService { 

    private _baseURL: string = 'http://localhost:3000/grafica'

    constructor(private httpClient: HttpClient){ }

    getUsuarios(){
        return this.httpClient.get(this._baseURL);
    }

    getUsuariosDataFormat(){
        return this.getUsuarios()
        .pipe(
            delay(2000),
            map(data =>{
                const labels = Object.keys(data);
                const values = {
                    data: Object.values(data)
                };
                return { labels, values };
            })
        )
    }
}