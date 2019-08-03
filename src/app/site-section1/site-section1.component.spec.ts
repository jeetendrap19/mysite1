import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteSection1Component } from './site-section1.component';

describe('SiteSection1Component', () => {
  let component: SiteSection1Component;
  let fixture: ComponentFixture<SiteSection1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteSection1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteSection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
