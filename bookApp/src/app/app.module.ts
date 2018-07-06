import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

// Composant
import { AppComponent } from './app.component';
import { ListLivresComponent } from './list-livres/list-livres.component';
import { DetailsLivreComponent } from './details-livre/details-livre.component';
import { MenuComponent } from './menu/menu.component';
import { ListAuteursComponent } from './list-auteurs/list-auteurs.component';

// Services
import { LivresService } from './services/livres.service';
import { LivreComponent } from './livre/livre.component';

// table de routage
const appRoutes: Routes = [
  { path:'books', component: ListLivresComponent },
  { path:'books/:id', component: DetailsLivreComponent },
  { path:'authors', component: ListAuteursComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ListLivresComponent,
    DetailsLivreComponent,
    MenuComponent,
    ListAuteursComponent,
    LivreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
