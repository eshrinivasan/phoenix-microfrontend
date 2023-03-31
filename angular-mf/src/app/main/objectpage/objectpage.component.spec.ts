import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectpageComponent } from './objectpage.component';

describe('ObjectpageComponent', () => {
  let component: ObjectpageComponent;
  let fixture: ComponentFixture<ObjectpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
