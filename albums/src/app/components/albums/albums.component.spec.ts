import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { PhotosService } from 'src/app/services/photos.service';
import { AlbumsComponent } from './albums.component';




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

  getAlbums() {
    return of(this.dummyPhotos)
  }
}

describe('AlbumsComponent', () => {
  let component: AlbumsComponent;
  let fixture: ComponentFixture<AlbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumsComponent ],
      providers: [{
        provide: PhotosService, useClass: PhotosServiceMock
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render albums', () => {
    component.ngOnInit();
    fixture.detectChanges();
    const aElements = fixture.debugElement.queryAll(By.css("a"));
    expect(aElements.length).toEqual(2)
    expect(aElements[0].nativeElement.text).toContain('title 1');
  });
});
