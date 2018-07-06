import { Component, OnInit } from '@angular/core';
import { LivresService } from '../services/livres.service';
import { Livre } from '../../model/livre.interface';

@Component({
  selector: 'app-list-auteurs',
  templateUrl: './list-auteurs.component.html',
  styleUrls: ['./list-auteurs.component.css']
})
export class ListAuteursComponent implements OnInit {

	auteurs: string[] = [];

  constructor(private livreService:LivresService) { }

  ngOnInit() {
  	  	this.livreService.getAuteurs()
  		.subscribe((res: string[]) => {
  			this.auteurs = res;
  		})
  }

}
