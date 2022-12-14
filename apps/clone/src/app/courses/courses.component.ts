import { Component, OnInit } from '@angular/core';
import { Course } from '../common/models/course';
import { CoursesService } from '../common/services/courses.service';

const emptyCourse: Course = {
  id: null,
  title: '',
  description: '',
  percentComplete: 0,
  favorite: false,
};

@Component({
  selector: 'clone-app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses = [];
  selectedCourse = emptyCourse;
  originalTitle = '';

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.courses = this.coursesService.courses;
  }

  selectCourse(course) {
    this.selectedCourse = { ...course };
    this.originalTitle = course.title;
  }

  deleteCourse(courseId) {
    console.log('DELETE COURSE', courseId);
  }

  saveCourse(course) {
    console.log('SAVE COURSE', course);
  }

  reset() {
    this.selectCourse({ ...emptyCourse });
  }
}
