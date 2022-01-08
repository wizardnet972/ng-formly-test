import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMaterialModule } from '@ngx-formly/material';

@Component({
  selector: 'foo',
  template: `<div *ngFor="let item of formControl.value">{{ item }}</div>`,
})
export class FormlyFooComponent
  extends FieldType
  implements OnInit, OnDestroy, AfterViewInit
{
  ngOnInit(): void {
    console.log('ngOnInit');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
}

@NgModule({
  declarations: [FormlyFooComponent],
  imports: [
    CommonModule,
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild({
      extras: { lazyRender: true },
      types: [
        {
          name: 'formly-chips',
          component: FormlyFooComponent,
          wrappers: ['form-field'],
        },
      ],
    }),
    FormlyMaterialModule,
  ],
  providers: [],
})
export class FooModule {}
