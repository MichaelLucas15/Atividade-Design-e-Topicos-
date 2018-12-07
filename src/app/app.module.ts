import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabase } from '@angular/fire/database';
import { TelaHOMEComponent} from './telaHOME/telaHOME.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ListaUsersComponent } from './listaUsers/listaUsers.component';
import { ImagensComponent} from './imagens/imagens.component';
import { EfetuarCompraDaCamisaComponent } from './efetuarCompraDaCamisa/efetuarCompraDaCamisa.component';
import { DesenvolvedorComponent } from './desenvolverdor/desenvolvedor.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    ListaUsersComponent,
    ImagensComponent,
    EfetuarCompraDaCamisaComponent,
    TelaHOMEComponent,
    DesenvolvedorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      { path: '', component: TelaHOMEComponent },
      { path: 'desenvolverdor', component: DesenvolvedorComponent},
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'listaUsers', component: ListaUsersComponent },
      { path: 'imagens', component: ImagensComponent },
      { path: 'imagens-compras', component:EfetuarCompraDaCamisaComponent}
    ])
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
