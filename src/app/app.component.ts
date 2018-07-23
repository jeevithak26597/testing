import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { TreeNode } from 'primeng/api';
import { NodeService } from './node.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users: TreeNode[];
  constructor(private nodeService: NodeService,public weatherService: WeatherService) {

  }
  ngOnInit() {
    this.nodeService.getUsers().then(users => {this.users = users;});
  }

  nodeSelect(event) {
    console.log(event.node.data, ',', event.node.label);
  }

  ngAfterViewChecked() {

  }

  ngOnDestroy() {

  }
  city: string;
 
  onButtonClick(cityName: string) {
    console.log(cityName);
    this.weatherService.fetchWeatherInfo(cityName);
  }
}
