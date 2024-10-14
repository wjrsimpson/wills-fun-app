import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private imageUrl = 'assets/images.json'; // Path to your JSON file

  constructor(private http: HttpClient) {}

  getImageUrls(): Observable<any[]> {
    return this.http.get<any[]>(this.imageUrl);
  }
}
