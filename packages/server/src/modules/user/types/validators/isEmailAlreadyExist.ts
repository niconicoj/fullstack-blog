import { ValidatorConstraint, ValidatorConstraintInterface, registerDecorator, ValidationOptions } from "class-validator";
import { User } from "../../../../entity/User";

@ValidatorConstraint({async: true})
export class IsEmailAlreadyExistConstraint implements ValidatorConstraintInterface {
  validate(email: string) {
    return User.findOne({where: {email}}).then(user => {
      if(user) return false;
      return true
    })
  }
}

export function IsEmailAlreadyExist(validateOptions? : ValidationOptions) {
  return function(object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validateOptions,
      constraints: [],
      validator: IsEmailAlreadyExistConstraint
    })
  }
}