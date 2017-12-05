import { Directive, HostListener, HostBinding } from '@angular/core';

// selector is a atribute selector
@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    // HostBinding mete properties to a element, aquí mete una class llamada open
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }

}