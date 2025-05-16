import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Recipe';
import { RecipeService } from '../recipe.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe> = [];
  selected: Boolean = false;
  selectedRecipe!: Recipe;
  recipeDetail!: Recipe;

  constructor(private recipeService: RecipeService, private route:Router ) {}

   getRecipesList() {
    this.recipeService.getRecipes().subscribe((data) => {
      this.recipes = data;
    });
  }

  ngOnInit() {
    this.getRecipesList();
  }


  onSelect(recipe: Recipe) {
    this.selectedRecipe = recipe;
    this.selected = true;
    this.route.navigate(['recipe', recipe.id]);
  }
}
