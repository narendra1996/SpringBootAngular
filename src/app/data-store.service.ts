import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  data: any;
  constructor() { }

  retrieveData(): any {
    return this.data;
  }

  storeData(storeData: any) {
    this.data =  storeData;
  }
}
