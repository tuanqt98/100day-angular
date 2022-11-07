import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodotoComponent } from './todoto.component';

describe('TodotoComponent', () => {
  let component: TodotoComponent;
  let fixture: ComponentFixture<TodotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
