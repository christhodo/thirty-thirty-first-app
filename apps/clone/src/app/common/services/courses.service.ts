/* eslint-disable @typescript-eslint/member-ordering */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../models/course';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  model = 'courses';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get(this.getUrl());
  }

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  courses: Course[] = [
    {
      id: '1',
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true,
    },
    {
      id: '2',
      title: 'JavaScript The HARDEST PARTS EVER!',
      description: 'Learn the JavaScript like a pro! with Will',
      percentComplete: 26,
      favorite: true,
    },
    {
      id: '3',
      title: 'Learn NX with Angular CLI',
      description: 'Unleash the power of the force',
      percentComplete: 98,
      favorite: true,
    },
  ];
}
