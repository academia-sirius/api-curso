import { registerDecorator, ValidationOptions, ValidationArguments} from "class-validator";


export function IsAngolanID(validationOptions?: ValidationOptions){
    return function(object: Object, propertyName: string){
        registerDecorator({
            name: 'IsAngolaID',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments){
                    return typeof value === 'string' && /^\d{9}[A-Z]{2}\d{3}$/.test(value);
                },
                 defaultMessage(args: ValidationArguments): string{
                    return `${args.property} deve seguir formato do BI angolano (Ex: 005928773LA049)!`;
                 },
            },

        })
    };
}