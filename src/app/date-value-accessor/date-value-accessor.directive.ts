import { Directive, ElementRef, forwardRef, HostListener, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


const DATE_VALUE_PROVIDER: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DateValueAccessorDirective),
  multi: true,
};


@Directive({
  selector: 'input([type=date])[formControlName], input([type=date])[formControl], input([type=date])[ngModel]',
  providers: [DATE_VALUE_PROVIDER],
})
export class DateValueAccessorDirective implements ControlValueAccessor {

  constructor(private element: ElementRef) {
  }


  // Atualiza o valor na direção do formControl para o elemento HTML
  writeValue(newValue: any) {
    if (newValue instanceof Date)
      this.element.nativeElement.value = newValue.toISOString().split('T')[0]; // yyyy-mm-dd T hh:mm:ss.000Z
  }

  // Pega o evento do input do HTML e atualiza o formControl
  @HostListener('input', ['$event.target.valueAsDate'])
  private onChange!: Function

  registerOnChange(fn: Function) {
    this.onChange = (valueAsDate: Date) => { fn(valueAsDate) }
  }

  // Pega o evento de blur nos inputs 
  @HostListener('blur')
  private onTouched!: Function

  registerOnTouched(fn: Function) {
    this.onTouched = fn
  }


}
