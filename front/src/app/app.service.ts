import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private _loggedIn!: boolean
  private _loggedIn$!: BehaviorSubject<boolean>;

  constructor() { 
    this._loggedIn = false 
    this._loggedIn$ = new BehaviorSubject(this._loggedIn)
  }

  
  set loggedIn(value: boolean) {
    this._loggedIn = value
    this._loggedIn$.next(this._loggedIn)
  }

  get loggedIn$(): Observable<boolean> {
    return this._loggedIn$.asObservable()
  }


}
