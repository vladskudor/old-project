import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProfieleComponent} from './profiele.component';

describe('ProfieleComponent', () => {
  let component: ProfieleComponent;
  let fixture: ComponentFixture<ProfieleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfieleComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfieleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
