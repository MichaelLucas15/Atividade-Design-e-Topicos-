import { Component, OnInit } from '@angular/core';
import { DBService } from '../servicos/db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desenvolvedorComponent',
  templateUrl: './desenvolvedor.component.html',
  styleUrls: ['./desenvolvedor.component.css'],
  providers: [DBService]
})
export class DesenvolvedorComponent implements OnInit {

    ngOnInit() {
    }
}