import { BadRequestException, createParamDecorator, ExecutionContext } from "@nestjs/common";

// data: string, context: ExecutionContext - nao tenho data/dado de entrada
export const ParamBI = createParamDecorator((_data: unknown, context: ExecutionContext)=>{

      const biValor = context.switchToHttp().getRequest().params.id; 

      if(typeof biValor === 'string' && /^\d{9}[A-Z]{2}\d{3}$/.test(biValor))
        return biValor;
        // throw new BadRequestException(`${biValor} deve seguir formato do BI angolano (Ex: 005928773LA049)!`)
                

    
});