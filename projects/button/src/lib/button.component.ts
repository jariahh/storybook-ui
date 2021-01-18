import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ui-button',
  template: `
    <button mat-raised-button [color]="color">{{label}}</button>
  `,
  styleUrls: ['../../../../node_modules/@angular/material/prebuilt-themes/pink-bluegrey.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() label: string;
  @Input() color: 'primary' | 'accent' | 'warn' | '';

  constructor() {}
}
