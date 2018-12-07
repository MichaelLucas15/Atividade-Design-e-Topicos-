import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/entidades/usuario';
import { DBService } from '../servicos/db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [DBService]
})
export class UsuariosComponent implements OnInit {

  novoUsuario: Usuario;

  constructor(private database: DBService, private router: Router) {
    this.novoUsuario = new Usuario();
  }

  ngOnInit() {
  }

  cadastrar() {
    this.database.inserir('usuarios', this.novoUsuario)
      .then(() => {
        alert('Usuário cadastrado com sucesso');
        this.novoUsuario = new Usuario();
      });
  }
}