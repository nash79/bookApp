import { Component, OnInit } from '@angular/core';
import { LivresService } from '../services/livres.service';
import { Livre } from '../../model/livre.interface';

@Component({
  selector: 'app-list-livres',
  templateUrl: './list-livres.component.html',
  styleUrls: ['./list-livres.component.css']
})
export class ListLivresComponent implements OnInit {

	livres: Livre[] = [];
	chkdispo: boolean = false;

  constructor(private livreService:LivresService) { }

  ngOnInit() {
  	this.livreService.getLivres()
  		.subscribe((res: Livre[]) => {
  			this.livres = res;
  		})
  }

  showDisponible(e){
  	this.chkdispo = e.target.checked
  }

}
