import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectsComponent implements OnInit {
  httpClient = inject(HttpClient);
  projects: any[] = [];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.httpClient
      .get<any[]>('https://portfolio-api-five-omega.vercel.app/project/')
      .subscribe((projects) => {
        this.projects = projects;
        console.log(projects);
      });
  }
}
