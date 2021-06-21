import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Observable } from "rxjs";
import { Medico } from "../components/models/medico";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})

export class MedicoService {
    //dialogData: any;
    //dataChange: BehaviorSubject<Medico[]> = new BehaviorSubject<Medico[]>([]);
    private baseURL : String = 'http://localhost:3000';
  
    constructor(private http : HttpClient, private router :Router ) { }
    
   // getDialogData() {
     // return this.dialogData;
    //}

    cadastrar(medico: Medico): Observable<Medico>{
        return this.http.post<Medico>(`${this.baseURL}/medico/cadastrar`, medico);
      }

      listar(): Observable<Medico[]> {
        return this.http.get<Medico[]>(`${this.baseURL}/medico/listar`);
      }
}
