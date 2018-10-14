import { Component, OnInit } from '@angular/core';
import { Lid } from '../domain/lid.model';
import { LidService } from '../services/lid.service';

@Component({
  selector: 'app-leden',
  templateUrl: './leden.component.html',
  styleUrls: ['./leden.component.css']
})
export class LedenComponent implements OnInit {

  private leden : Lid[];

  constructor(private lidService: LidService) { }

  ngOnInit() {
    this.lidService.get().subscribe(
      data => { this.leden = data; }
    )
  }

}
