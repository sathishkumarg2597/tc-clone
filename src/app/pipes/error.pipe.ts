import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'error'
})
export class ErrorPipe implements PipeTransform {

  transform(errorObj: any, fieldName: string): string {
    let errorMessage: string = ""
    Object.keys(errorObj).map((key: string)=>{
      switch(key.toLowerCase()){
        case 'required':
          errorMessage = `${fieldName} is required`;
          break;
        case 'invaliddno':
          errorMessage = "Invalid Door/Apt Number"
          break;
      }
    })
    return errorMessage;
  }

}
