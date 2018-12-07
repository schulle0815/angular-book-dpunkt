import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {bufferCount, map} from 'rxjs/operators';

import {BpmModel} from '../shared/bpm-model';
import {ButtonClickModel} from '../shared/button-click-model';

@Component({selector: 'bm-reactive-demo', templateUrl: './reactive-demo.component.html', styles: []})
export class ReactiveDemoComponent implements OnInit, OnDestroy {
  bpmButtonDetectorClick = new EventEmitter<ButtonClickModel>();
  bpmSub: Subscription;
  lastButtonClick: Date;

  sampleClickBufferSize = 4;

  constructor() {}

  ngOnInit() {
    // bpmSub = this.bpmButtonDetectorClick.pipe(bufferCount(this.sampleClickBufferSize)).pipe(map(btClicks => btClicks.forEach()))
  }

  ngOnDestroy() {
    this.bpmSub.unsubscribe();
  }

  onBpmButtonDetectorClick() {
    /* const clickTimespan = Date.now();
    const bcm = new ButtonClickModel(clickTimespan);
    this.bpmButtonDetectorClick.emit(bcm);
    this.lastButtonClick = Date.now(); */
  }
}
