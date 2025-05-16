import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../Recipe';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recipe-detail',
  standalone: false,
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe!: Recipe;
  id!: number;

  constructor(private route: ActivatedRoute, private recipeService:RecipeService) {}
  getRecipeById() {
    this.recipeService.getRecipe(this.id).subscribe((data) => {
    this.recipe = data;
    })
  }

  ngOnInit() {
  if (this.recipe == undefined) {
      this.id = this.route.snapshot.paramMap.get('id')! as unknown as number;
      if(this.id){
        this.getRecipeById();
      }
    }
  }
}

