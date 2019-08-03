import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteSection2Component } from './site-section2.component';

describe('SiteSection2Component', () => {
  let component: SiteSection2Component;
  let fixture: ComponentFixture<SiteSection2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteSection2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
