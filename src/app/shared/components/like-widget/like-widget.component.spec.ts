import { LikeWidgetModule } from './like-widget.module';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';

describe('LikeWidgetComponent', () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let component: LikeWidgetComponent = null;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);

    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should generate ID when input property is missing', () => {
    fixture.detectChanges();
    expect(component.id).toBeTruthy(); // not null as it was defined
  });

  it('should receive an input property ID', () => {
    const someId = 'someId'
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

  it(`#${LikeWidgetComponent.prototype.like.name}
    should trigger emission when called`, () => {
    spyOn(component.liked, 'emit')
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
  });
});
