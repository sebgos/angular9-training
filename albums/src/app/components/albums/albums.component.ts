import { PhotosService } from 'src/app/services/photos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums;
  constructor(
    private photosService: PhotosService,
  ) { }

  ngOnInit(): void {
    this.albums = this.photosService.getAlbums();
  }

}
