import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.css']
})
export class AnalogClockComponent implements AfterViewInit {

  hourHandStyle;
  minuteHandStyle;
  secondHandStyle;
  date: Date;
  hour = 0;
  minute = 0;
  second = 0;
  timerId: any;



  hh1: any; mm1: any; ss1: any;
  runningTime: Date;
  customtime: Date;

  constructor() { }

  ngAfterViewInit () {
    this.getTime();
    this.runningTime = new Date();
  }
 /*  Analog clock  */
  animateAnalogClock() {
    this.hourHandStyle = { transform: `translate3d(-50%, 0, 0) rotate(${(this.hour * 30) + (this.minute * 0.5) +
      (this.second * (0.5 / 60))}deg)` };

    this.minuteHandStyle = { transform: `translate3d(-50%, 0, 0) rotate(${(this.minute * 6) + (this.second * 0.1)}deg)` };

    this.secondHandStyle = { transform: `translate3d(-50%, 0, 0) rotate(${this.second * 6}deg)` };
  }
  /*  Analog clock Ends  */

  /*  Digital clock */

  getTime() {
    return setInterval(() => {
      this.date = this.runningTime;
      const millisec = this.date.getTime();
      this.hour = this.date.getHours();
      this.minute = this.date.getMinutes();
      this.second = this.date.getSeconds();
      this.runningTime = new Date( millisec + 1000);
      this.animateAnalogClock();
    }, 1000);
  }
  /*  DIgital clock Ends  */

  format(num: number) {
    return (num + '').length === 1 ? '0' + num : num + '';
  }

  syncAnalog() {
    const inputValue = (<HTMLInputElement>document.getElementById('appt')).value;
      if (inputValue) {
   this.customtime = moment(inputValue, 'hh:mm:ss').toDate();
   this.runningTime = this.customtime;
      } else {
        this.runningTime = new Date();
      }
      this.animateAnalogClock();
  }

  syncDigital() {
    const inputValue = (<HTMLInputElement>document.getElementById('appt1')).value;
      if (inputValue) {
   this.customtime = moment(inputValue, 'hh:mm:ss').toDate();
   this.runningTime = this.customtime;
      } else {
        this.runningTime = new Date();
      }
      this.animateAnalogClock();
  }

  reset() {
    (<HTMLInputElement>document.getElementById('appt')).value = null;
    (<HTMLInputElement>document.getElementById('appt1')).value = null;
    this.syncDigital();
   }


}
