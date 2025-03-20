import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BackgroundChangerService {
  private apiUrl = 'https://api.api-ninjas.com/v1/loremipsum?paragraphs=3';
  private apiKey = 'c5ZVHgdbWliBXrvbkp9nwg==4z7IQewx1fYLL6ej';

  constructor(private http: HttpClient) {}

  getLoremIpsum(): Observable<string> {
    return this.http
      .get<{ text: string }>(this.apiUrl, {
        headers: { 'X-Api-Key': this.apiKey },
      })
      .pipe(
        map((response) => {
          console.log(response.text)
          return response.text;
        })
      );
  }
}
