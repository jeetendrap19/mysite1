import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteWrapComponent } from './site-wrap.component';

describe('SiteWrapComponent', () => {
  let component: SiteWrapComponent;
  let fixture: ComponentFixture<SiteWrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteWrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
