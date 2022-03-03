import { LikeWidgetModule } from './like-widget.module';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';

describe('LikeWidgetComponent', () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent)
  });

  it('should create component', () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should generate ID when input property is missing', () => {
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.id).toBeTruthy(); // not null as it was defined
  });

  it('should receive an input property ID', () => {
    const component = fixture.componentInstance;
    const someId = 'someId'
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId); // not null as it was defined
  });
});
