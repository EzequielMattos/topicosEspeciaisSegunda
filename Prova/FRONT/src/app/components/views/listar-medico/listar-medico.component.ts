import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Medico } from '../../models/medico';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-listar-medico',
  templateUrl: './listar-medico.component.html',
  styleUrls: ['./listar-medico.component.css']
})
export class ListarMedicoComponent implements OnInit {

  crm: string | undefined;
  medicos : Array<Medico> = [];
  displayedColumns: string[] = 
  [ '_id', 
    'nome',
    'crm',
    'especialidade'
  ];

  constructor(
    private medicoService: MedicoService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.medicoService.listar().subscribe(lista => {
      this.medicos = lista;
    });
  }
}
