
import { ValidationErrors, AbstractControl } from '@angular/forms';


export class SignupValidators {
    static noWhiteSpaceAllowed(control: AbstractControl): ValidationErrors | null {
       if ((control.value as string).indexOf(' ')  >= 0) {
           return{ noWhiteSpaceAllowed : true };
       } else {
           return { noWhiteSpaceAllowed : false };
       }
    }

    static availableUserId(control: AbstractControl): Promise <ValidationErrors | null > {
       // const availableIds = ['Mosh', 'Baishali', 'Mimi'];
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                //availableIds.forEach(id => {
                    if (control.value === 'Mosh') {
                        console.log('found');
                        resolve({availableUserId : true});
                    }
               // });
            }, 3000);
        });
    }
}
