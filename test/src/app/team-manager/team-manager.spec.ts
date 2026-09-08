import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamManagerComponent } from './team-manager';

describe('TeamManager', () => {
  let component: TeamManagerComponent;
  let fixture: ComponentFixture<TeamManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamManagerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamManagerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
