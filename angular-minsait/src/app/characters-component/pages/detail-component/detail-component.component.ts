import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.css']
})
export class DetailComponentComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(
      this.activatedRoute.snapshot.paramMap.get('id')
    )
  }

}
