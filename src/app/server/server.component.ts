import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  userName = '';
  resetString = () => {
    this.userName = '';
  };
  log = [];
  isShowDetail = false;
  showDetail = () => {
    console.log(this.log, 'log');
    this.isShowDetail = !this.isShowDetail;
    this.log.push(this.log.length + 1);
  };
}
