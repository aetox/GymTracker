import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';

// C'est ici qu'on va vérifier si la personne peut acceder au module admin

export const authGuard: CanActivateFn =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      // const permissions = inject(PermissionsService);
      // const userToken = inject(UserToken);
      
      // if (!permissions.canActivate(userToken, route.params.id)) {
      
      const router = inject(Router);
        
      // return router.navigate(['auth']);
      //return false;
      
      // }
       return true;

    };