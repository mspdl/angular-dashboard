import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { DataService } from './data.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [DataService],
    }).compileComponents();

    window['google'] = {
      charts: {
        load: function (): void {},
        setOnLoadCallback: (callback) => callback(),
      },
    };

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call init() function', () => {
    const spyOnInit = spyOn(component, 'init');
    component.ngOnInit();
    expect(spyOnInit).toHaveBeenCalled();
  });

  it('should call showCharts() function', () => {
    const showChartsInit = spyOn(component, 'showCharts');
    component.showCharts();
    expect(showChartsInit).toHaveBeenCalled();
  });


});
