import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgcFormsModule, IGX_ACCORDION_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxIconComponent } from 'igniteui-angular';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import { Subject, takeUntil } from 'rxjs';
import { AllCoursesType } from '../models/learning-app/all-courses-type';
import { LearningAppService } from '../services/learning-app.service';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-courses',
  imports: [IGX_EXPANSION_PANEL_DIRECTIVES, IGX_ACCORDION_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_LIST_DIRECTIVES, IgcFormsModule, IgxAvatarComponent, IgxIconComponent, FormsModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public listSelectedItem1?: AllCoursesType;
  public listSelectedItem2?: string;
  public listSelectedItem3?: string;
  public listSelectedItem4?: string;
  public listSelectedItem5?: string;
  public listSelectedItem6?: string;
  public listSelectedItem7?: string;
  public listSelectedItem8?: string;
  public listSelectedItem9?: string;
  public listSelectedItem10?: string;
  public listSelectedItem11?: string;
  public ngModel: number = 4;
  public learningAppAllCourses: AllCoursesType[] = [];

  constructor(
    public learningAppService: LearningAppService,
  ) {}


  ngOnInit() {
    this.learningAppService.getAllCoursesList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.learningAppAllCourses = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
