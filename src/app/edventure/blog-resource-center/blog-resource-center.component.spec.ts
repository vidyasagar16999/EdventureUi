import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogResourceCenterComponent } from './blog-resource-center.component';

describe('BlogResourceCenterComponent', () => {
  let component: BlogResourceCenterComponent;
  let fixture: ComponentFixture<BlogResourceCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogResourceCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogResourceCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
