import { Component, Provider, forwardRef } from '@angular/core';
import { profileIconNames } from './profile-icon-names';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';



const PROFILE_ICON_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ProfileIconSelectorComponent),
  multi: true,
};


@Component({
  selector: 'con-profile-icon-selector',
  templateUrl: './profile-icon-selector.component.html',
  styleUrls: ['./profile-icon-selector.component.css'],
  providers: [PROFILE_ICON_VALUE_ACCESSOR]
})
export class ProfileIconSelectorComponent implements ControlValueAccessor {

  profileIcons = profileIconNames;
  showAllIcons: boolean = true;
  selectedIcon!: string | null;

  iconSelected(icon: string) {
    this.showAllIcons = false;
    this.selectedIcon = icon;
    this.onChange(icon);
  }

    // Implementação dos métodos de ControlValueAccessor
    // Atualiza o valor na direção do formControl para o elemento HTML
    writeValue(icon: string | null ) {
      this.selectedIcon = icon;
      if (icon && icon !== '')
        this.showAllIcons = false;
      else
        this.showAllIcons = true;

    }
  
    // Pega o evento do input do HTML e atualiza o formControl
    private onChange!: Function
    private onTouched!: Function
  
    registerOnChange(fn: Function) {
      this.onChange = (icon: string) => { fn(icon) }
    }
  
    // Pega o evento de blur nos inputs por razão de validação  
    registerOnTouched(fn: Function) {
      this.onTouched = fn
    }
}
