import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ItemBase } from '../../models/item-base';
import { EditType } from '../../models/template-options';

@Component({
  selector: 'ap-info-item',
  templateUrl: './info-item.component.html',
  styleUrls: ['./info-item.component.css']
})
export class InfoItemComponent implements OnInit {

  EditType = EditType;

  @Input() formGroup: FormGroup;
  @Input() itemBase: ItemBase;

  constructor() { }

  ngOnInit() {
  }

}
