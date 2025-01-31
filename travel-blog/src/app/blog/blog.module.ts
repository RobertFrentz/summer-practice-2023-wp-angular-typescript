import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { ArticleComponent } from './article/article.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleListItemComponent } from './article/article-list-item/article-list-item.component';

@NgModule({
  declarations: [
    ArticleComponent,
    ArticleDetailsComponent,
    ArticleListItemComponent,
  ],
  imports: [CommonModule, BlogRoutingModule],
  exports: [
    ArticleComponent,
    ArticleDetailsComponent,
    ArticleListItemComponent,
  ],
})
export class BlogModule {}
