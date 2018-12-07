import { Component, OnInit } from '@angular/core';
import { Imagem } from 'src/entidades/imagem';
import { DBService } from '../servicos/db.service';
import * as M from 'src/assets/materialize/js/materialize.min.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imagens',
  templateUrl: './imagens.component.html',
  styleUrls: ['./imagens.component.css'],
  providers: [DBService]
})
export class ImagensComponent implements OnInit {
  
  novaImagem: Imagem;

  constructor(private database: DBService, private router: Router) {
    this.novaImagem = new Imagem();
  }

  options = {};
  ngOnInit() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, this.options);

    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, this.options);
  }


  cadastrar(imagem: string) {
    this.database.inserir('imagens', this.novaImagem)
      .then(() => {
        alert('Adicionado no carrinho com sucesso');
        this.novaImagem = new Imagem();
       // this.router.navigate(['imagens-compras'])
      });
  }
}