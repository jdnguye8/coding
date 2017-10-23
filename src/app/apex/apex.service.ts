import { Injectable } from '@angular/core';
import { AngularFirestore} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ApexService {
  items: Observable<any[]>
  constructor( private afs: AngularFirestore) {
    this.items = afs.collection('items').valueChanges();
   }

}
