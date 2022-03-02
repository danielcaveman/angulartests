import { UniqueIdService } from './../../services/unique-id/unique-id.service';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';

describe('LikeWidgetComponent', () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [LikeWidgetComponent],
      providers: [UniqueIdService]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent)
  });

  it('should create component', () => {
    const instance = fixture.componentInstance;
    expect(instance).toBeTruthy();
  });
});
