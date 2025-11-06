import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxIconButtonDirective, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgcFormsModule, IGX_CHIPS_DIRECTIVES, IgxCheckboxComponent } from 'igniteui-angular';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule, IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxIconButtonDirective, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgcFormsModule, IGX_CHIPS_DIRECTIVES, IgxCheckboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
