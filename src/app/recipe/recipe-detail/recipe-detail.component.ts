import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../Recipe';
import { RecipeService } from '../recipe.service';
import { CommonModule } from '@angular/common';
import { IngredientModule } from '../../ingredient/ingredient.module';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  standalone: false, // Change this to false since we're using it in a module
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe | null = null;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.getRecipeDetail(id);
    });
  }

  getRecipeDetail(id: number): void {
    this.recipeService.getRecipeDetail(id).subscribe({
      next: (recipe) => {
        this.recipe = recipe;
      },
      error: (error) => {
        console.error('Error fetching recipe detail:', error);
      },
    });
  }

  goBack(): void {
    this.location.back();
  }
}
