import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const logged = inject(AuthService).isloggedIn();
  const getRoles = inject(AuthService).getRoles('ROLE_ADMIN');
  const router = inject(Router);

  if (logged && getRoles) {
    return true;
  } else {
    router.navigateByUrl('login');
    return false;
  }
};
