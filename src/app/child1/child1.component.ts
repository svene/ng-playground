import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaloiseDesignSystemModule} from "@baloise/design-system-components-angular";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {BehaviorSubject, filter, Observable, switchMap} from "rxjs";

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule, BaloiseDesignSystemModule, HttpClientModule],
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

  private http = inject(HttpClient);
  apiResponse$!: Observable<unknown>;

  requestApiCall$$ = new BehaviorSubject(0);
  requestApiCall$ = this.requestApiCall$$.asObservable();

  callAPI(): void {
    this.requestApiCall$$.next(1);
  }

  ngOnInit(): void {
    this.apiResponse$ = this.requestApiCall$.pipe(
      filter(it => it > 0),
      switchMap(_ => this.http.get<string>('https://thronesapi.com/api/v2/Characters')),
    );
  }
}
