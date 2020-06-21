import { ValidatorConstraint, ValidatorConstraintInterface, registerDecorator, ValidationOptions } from "class-validator";

@ValidatorConstraint()
export class IsValidPasswordConstraint implements ValidatorConstraintInterface {
  validate(password: string) {
    let regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
    return regex.test(password);
  }
}

export function IsValidPassword(validateOptions? : ValidationOptions) {
  return function(object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validateOptions,
      constraints: [],
      validator: IsValidPasswordConstraint
    })
  }
}