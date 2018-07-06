import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {

	@Input('data') livre = {
		Id: null,
		Dispo: false,
		Titre: '',
		Auteur: '',
		nbPages: 0,
		AnneeParution: 0,
		nbEmprunt: 0
	}

  constructor() { }

  ngOnInit() {
  }

}
