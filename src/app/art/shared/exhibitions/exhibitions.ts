import {Component} from '@angular/core';
import {products} from '../../../items';

@Component({
  selector: 'app-exhibitions',
  templateUrl: './exhibitions.html',
  styleUrls: ['./exhibitions.css']
})
export class Exhibitions {
  items = products;
  show = false;
  index = -1;

  showText(i: number) {
    this.show = !this.show;
    this.index = i;
  }
}
