import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DocumentComponent } from './components/document/document.component';
import { BoletaComponent } from './components/boleta/boleta.component';
import { NotasComponent } from './components/notas/notas.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentComponent,
    BoletaComponent,
    NotasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
