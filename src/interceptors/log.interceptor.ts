import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";

export class LogInterceptor implements NestInterceptor{
    constructor (){ }


    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {

        const dt = Date.now();

        return next.handle().pipe(tap( 
            ()=>{ 
        // aqui estou passando o que quero do interceptor 
            
            const urlAcessada = context.switchToHttp().getRequest();
            console.log(`tempo ${Date.now()-dt} milisegundos :: rota =>${urlAcessada.method} - ${urlAcessada.url}`);
            

        } ))
    }




    
}

