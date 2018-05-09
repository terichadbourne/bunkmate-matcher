//imports Angular functionality needed
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class CamperService {

  private apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }
  
  listCampers(){
  	return this.http.get(this.apiUrl + '/');
  }

  getCamper(id){
  	return this.http.get(this.apiUrl + '/' + id);
  }

  updateCamper(id, data) {
  	return this.http.put(this.apiUrl + '/update/' + id, data);
  }

  createCamper(data) {
  	return this.http.post(this.apiUrl + '/create', data, {headers: {
   'Content-Type': 'application/json'}
 	});
  }

  deleteCamper(id) {
  	return this.http.delete(this.apiUrl + '/delete/' + id);
  }
}

// //prints a list of campers
// router.get('/', api.list);

// //creates a single camper
// router.post('/create', api.create);

// //displays a single camper in edit mode
// router.get('/:camperid', api.read);

// //updates a single camper
// router.put('/update/:camperid', api.update);

// //deletes a single camper
// router.delete('/delete/:camperid', api.delete);
