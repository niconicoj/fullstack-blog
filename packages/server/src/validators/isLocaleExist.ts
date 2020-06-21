import { ValidatorConstraint, ValidatorConstraintInterface, ValidationOptions, registerDecorator } from "class-validator";
import { Locale } from "../entity/Locale";

@ValidatorConstraint({async: true}) 
export class IsLocaleExistConstraint implements ValidatorConstraintInterface {
  validate(locale: string) {
    return Locale.findOne({label: locale}).then(lc => {
      return lc ? true : false;
    })
  }
}

export function IsLocaleExist(validateOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validateOptions,
      constraints: [],
      validator: IsLocaleExistConstraint
    })
  }
}