import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlobsBackgroundComponent } from './blobs-background.component';

describe('BlobsBackgroundComponent', () => {
  let component: BlobsBackgroundComponent;
  let fixture: ComponentFixture<BlobsBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlobsBackgroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlobsBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
