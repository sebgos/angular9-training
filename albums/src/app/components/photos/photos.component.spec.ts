import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { PhotosComponent } from './photos.component';
import { PhotosService } from 'src/app/services/photos.service';


class PhotosServiceMock {
  dummyPhotos = [
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

 getPhotos() {
   return of(this.dummyPhotos)
 }
}

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [ PhotosComponent ],
      providers: [{
        provide: PhotosService, useClass: PhotosServiceMock
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
