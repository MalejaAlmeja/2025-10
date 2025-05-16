import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Recipe } from './Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
baseUrl = environment.apiUrl;
recetabaseUrl = this.baseUrl+'recipe.json';

constructor(private http: HttpClient) { }

getRecipes(): Observable<Recipe[]> {
  return this.http.get<Recipe[]>(this.recetabaseUrl);
}
getRecipe(id: number): Observable<Recipe> {
  return this.http.get<Recipe>(this.baseUrl+id+'/recipe.json');
}


}
