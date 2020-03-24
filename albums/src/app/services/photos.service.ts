import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(
    private http: HttpClient
    ) { }

    getAlbums() {
      return this.http.get('https://jsonplaceholder.typicode.com/albums');
    }
    getPhotos(albumId) {
      const params = new HttpParams().set('albumId', albumId);
      return this.http.get('https://jsonplaceholder.typicode.com/photos', {params});
    }
}
