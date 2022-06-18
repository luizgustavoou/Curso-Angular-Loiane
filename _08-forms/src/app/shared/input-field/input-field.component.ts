import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const INPUT_FIELD_VALUE_ACESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputFieldComponent),
  multi: true
};

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
  providers: [INPUT_FIELD_VALUE_ACESSOR]
})
export class InputFieldComponent implements ControlValueAccessor {

  @Input() classeCss;
  @Input() id: string;
  @Input() label: string;
  @Input() type = 'text';
  @Input() control;
  @Input() isReadOnly = false;

  private innerValue: any;

  get value() {
    return this.innerValue;
  }

  set value(v: any) {
    if (v !== this.innerValue) { 
      this.innerValue = v;
      this.onChangeCb(v);
    }
  }

  public onChangeCb: any = () => {};
  public onTouchedCb: any = () => {};


  writeValue(v: any): void {
/*     if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCb(v);
    } */
    this.value = v;
  }
  registerOnChange(fn: any): void {
    this.onChangeCb = fn; //pois que o Angular vai tomar conta para a gente...
  }
  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn; //mesma coisa...
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isReadOnly = isDisabled;
  }

}
