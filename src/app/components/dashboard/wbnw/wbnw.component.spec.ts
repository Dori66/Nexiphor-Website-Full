import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbnwComponent } from './wbnw.component';

describe('WbnwComponent', () => {
  let component: WbnwComponent;
  let fixture: ComponentFixture<WbnwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbnwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WbnwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
