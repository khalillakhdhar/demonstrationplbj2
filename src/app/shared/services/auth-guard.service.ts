import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor() { }
canActivate(): boolean {
if(localStorage.getItem('etat')==='connected')
return true;
else
window.location.replace('/auth');
return false;


}


}
