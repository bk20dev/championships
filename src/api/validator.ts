import { ValidationErrors, ValidatorFn } from "@angular/forms";

export const oneOf = <T>(values: T[]): ValidatorFn =>
  (control): ValidationErrors | null => {
    const controlValue = control.value;
    const exists = values.some(value => controlValue === value);
    if (exists) return null;
    return {
      "oneof": {
        "values": values.join(", "),
        "actualValue": controlValue,
      },
    };
  };
