import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters-component',
  templateUrl: './characters-component.component.html',
  styleUrls: ['./characters-component.component.css'],
})
export class CharactersComponentComponent implements OnInit {
  constructor(
    private apiService: ApiServiceService,
    private router: Router
    ) {}

  info: string = '';
  characters!: any[];

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.apiService.get().subscribe((r: any) => {
      this.characters = r.results;
      this.info = r.info;
    });
  }

  goToDetails = (character: any) => {
    console.log(character);
    this.router.navigate(['character/', character.id])
  } 
}


