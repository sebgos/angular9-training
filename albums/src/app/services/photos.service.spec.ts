import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpParams } from '@angular/common/http';

import { PhotosService } from './photos.service';


describe('PhotosService', () => {
  let service: PhotosService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PhotosService]
    });
    injector = getTestBed();
    service = injector.get(PhotosService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAlbums', () => {
    beforeEach(() => {

    });

    it('should return an Observable of albums', () => {
      const dummyAlbums = [
        {
          userId: 1,
          id: 1,
          title: "title 1"
        },
        {
          userId: 1,
          id: 2,
          title: "title 2"
        },
      ];

      service.getAlbums().subscribe((albums: any) => {
        expect(albums.length).toBe(2);
        expect(albums).toEqual(dummyAlbums);
      });

      const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/albums');
      expect(req.request.method).toBe("GET");
      req.flush(dummyAlbums);
    });
  });

  describe('getPhotos', () => {
    beforeEach(() => {

    });

    it('should return an Observable of photos', () => {
      const dummyPhotos = [
        {
          albumId: 1,
          id: 1,
          title: "title 1",
          url: "http://url1.com",
          thumbnailUrl: "http://thumbnail-url1.com"
        },
        {
          albumId: 1,
          id: 2,
          title: "title 2",
          url: "http://url2.com",
          thumbnailUrl: "http://thumbnail-url2.com"
        }
      ];
      service.getPhotos(1).subscribe((photos: any) => {
        expect(photos.length).toBe(2);
        expect(photos).toEqual(dummyPhotos);
      });



      const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/photos?albumId=1');

      expect(req.request.method).toBe("GET");
      expect(req.request.url).toBe(`https://jsonplaceholder.typicode.com/photos`);

    });
  });

});
