import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-kunden-detail',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './kunden-detail.component.html',
  styleUrl: './kunden-detail.component.scss'
})
export class KundenDetailComponent implements OnInit {
  // todo 1) inject ActivatedRoute or Router to extract the id from the route
  // todo 2) extract the id from the route and show it in the template

  ngOnInit(): void {
  }
}

