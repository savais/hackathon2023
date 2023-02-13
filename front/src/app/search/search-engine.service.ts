import { Injectable } from '@angular/core';
import { SearchDef } from '../searchDef.class';

@Injectable({
  providedIn: 'root'
})
export class SearchEngineService {

  searchDefs: SearchDef [] = [
    new SearchDef(1, "name", "1.0", "Type", "Product family")
  ]

  constructor() { }
}