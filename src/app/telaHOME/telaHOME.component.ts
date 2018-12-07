import { Component, OnInit } from '@angular/core';
import { DBService } from '../servicos/db.service';
import * as M from 'src/assets/materialize/js/materialize.min.js';
import { Router } from '@angular/router';

@Component({
    selector: 'app-telaHOME',
    templateUrl: './telaHOME.component.html',
    styleUrls: ['./telaHOME.component.css'],
    providers: [DBService]
})

export class TelaHOMEComponent implements OnInit {

    options = {};

    ngOnInit() {
        var elems = document.querySelectorAll('.slider');
        var instances = M.Slider.init(elems, this.options);
    }

}