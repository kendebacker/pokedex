import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokebasicComponent } from './pokebasic.component';

describe('PokebasicComponent', () => {
  let component: PokebasicComponent;
  let fixture: ComponentFixture<PokebasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokebasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokebasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
