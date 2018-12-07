import { Component, OnInit } from '@angular/core';
import { DBService } from '../servicos/db.service';
import { Usuario } from 'src/entidades/usuario';

@Component({
  selector: 'app-listaUsers',
  templateUrl: './listaUsers.component.html',
  styleUrls: ['./listaUsers.component.css'],
  providers: [DBService]
})
export class ListaUsersComponent implements OnInit {

  usuarios: Usuario[];
  carregando: boolean;
  constructor(private database: DBService) {
    this.carregarUsuarios();
  }

  ngOnInit() : void {
  }
  private carregarUsuarios() {
    this.carregando = true;

    this.database.listar<Usuario>('usuarios')
      .then(usuariosDB => {
        this.usuarios = usuariosDB;

        this.carregando = false;
      });
  }


  remover(uid: string) {
    this.database.remover('usuarios', uid)
      .then(() => {
        alert('usuário removido com sucesso');

        this.carregarUsuarios();
      });
  }

  editar(usuario) {
    usuario.editando = true;
  }

  cancelEdit(usuario) {
    usuario.editando = false;
  }

  confirmEdit(usuario) {
    this.database.atualizar('usuarios', usuario.uid, { nome: usuario.nome, email: usuario.email })
      .then(() => {
        alert('usuário atualizado com sucesso');

        this.carregarUsuarios();
      });
  }
}


