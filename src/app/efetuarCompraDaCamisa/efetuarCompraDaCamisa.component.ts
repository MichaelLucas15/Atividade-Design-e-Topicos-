import { Component, OnInit } from '@angular/core';
import { DBService } from '../servicos/db.service';
import { Imagem } from 'src/entidades/imagem';

@Component({
    selector: 'app-imagensCompras',
    templateUrl: './efetuarCompraDaCamisa.component.html',
    styleUrls: ['./efetuarCompraDaCamisa.component.css'],
    providers: [DBService]
})

export class EfetuarCompraDaCamisaComponent implements OnInit { 

    imagensDB: string[];
    imagens: Imagem[];
    carregando: boolean;

    constructor(private database: DBService) {
        this.imagensDB = ['camisa1', 'camisa2', 'camisa3', 'camisa4',  'camisa5']
        this.carregarImagens();
    }

    ngOnInit(): void {

    }

    private carregarImagens() {
        this.carregando = true;

        this.database.listar<Imagem>('imagens')
            .then(imagensDB => {
                this.imagens = imagensDB;

                this.carregando = false;
            });
    }


    remover(uid: string) {
        this.database.remover('imagensDB', uid)
            .then(() => {
                alert('compra cancelada com sucesso');

                this.carregarImagens();
            });
    }
}