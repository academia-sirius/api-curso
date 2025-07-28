import { createParamDecorator, ExecutionContext } from "@nestjs/common";

// data: string, context: ExecutionContext - nao tenho data/dado de entrada
export const ParamBI = createParamDecorator((_data: unknown, context: ExecutionContext)=>{
    
    return Number(context.switchToHttp().getRequest().params.id);
});