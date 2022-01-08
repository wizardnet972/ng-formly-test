import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormlyFooComponent, FooModule } from './foo.component';

describe('FooComponent', () => {
  let component: FormlyFooComponent;
  let fixture: ComponentFixture<FormlyFooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormlyFooComponent],
      imports: [FooModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyFooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
