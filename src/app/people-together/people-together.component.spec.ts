import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleTogetherComponent } from './people-together.component';

describe('PeopleTogetherComponent', () => {
  let component: PeopleTogetherComponent;
  let fixture: ComponentFixture<PeopleTogetherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleTogetherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleTogetherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
