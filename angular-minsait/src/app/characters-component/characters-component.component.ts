import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './services/api-service.service';

@Component({
  selector: 'app-characters-component',
  templateUrl: './characters-component.component.html',
  styleUrls: ['./characters-component.component.css'],
})
export class CharactersComponentComponent implements OnInit {
  constructor(private apiService: ApiServiceService) {}

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
}
