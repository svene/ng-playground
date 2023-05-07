import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaloiseDesignSystemModule} from "@baloise/design-system-components-angular";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {filter, map, switchMap, tap} from "rxjs/operators";
import {z} from "zod";

const schema = z.array(
  z.object({
    id: z.number(),
    firstName: z.string(),
    lastName: z.string(),
    bla: z.string().optional(),
  }),
);

type Result =  z.infer<typeof schema>;

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule, BaloiseDesignSystemModule, HttpClientModule],
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

  private http = inject(HttpClient);
  apiResponse$!: Observable<Result>;

  requestApiCall$$ = new BehaviorSubject(0);
  requestApiCall$ = this.requestApiCall$$.asObservable();


  callAPI(): void {
    this.requestApiCall$$.next(1);
  }

  ngOnInit(): void {
    this.apiResponse$ = this.requestApiCall$.pipe(
      filter(it => it > 0),
      switchMap(_ => {
        return this.http.get<string>('https://thronesapi.com/api/v2/Characters');
      }),
      tap(it => console.log(it)),
      map(it => {
        if (schema.safeParse(it)) {
          return schema.parse(it);
        } else {
          return [];
        }
      }),
      tap(it => console.log(it)),
    );
  }
}
