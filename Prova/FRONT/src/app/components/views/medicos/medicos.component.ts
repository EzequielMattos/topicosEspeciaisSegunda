import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Medico } from '../../models/medico';
import {MedicoService} from 'src/app/services/medico.service';


@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {

  form!: FormGroup;
  medico: Medico = new Medico();

  constructor(
    private service:MedicoService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: [null, Validators.required],
      crm: [null, [Validators.required]],
      especialidade: [null, [Validators.required]],
    });
  }

  cadastrar(): void {
    if (this.form.valid) {
      var values = this.form.value;
      this.service.cadastrar(this.medico).subscribe(medico => {
        if(medico){
          alert(medico);
        }else{
          alert(medico);
          this.router.navigate(['/medico/listar']);
        }
      });
    }
  }
}
