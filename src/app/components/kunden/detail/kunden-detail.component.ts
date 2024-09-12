import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {BehaviorSubject, map} from "rxjs";
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
  #activatedRoute = inject(ActivatedRoute);

  kundenId$ = new BehaviorSubject('')

  ngOnInit(): void {
    this.#activatedRoute.paramMap.pipe(map(params => params.get("id"))).subscribe(id => {
      this.kundenId$.next(id ?? '');
    });
  }
}

