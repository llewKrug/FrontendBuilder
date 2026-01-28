export interface BaseBlock {
  id: string;
  type: string;
  props?: Record<string, any>;
  position?: GridPosition;
}

export interface GridPosition {
  col: number;
  row: number;
  colSpan: number;
  rowSpan: number;
}

// example cards
export interface FeaturedArticleBlock extends BaseBlock {
  type: 'featured-article';
  props: {
    title: string;
    description: string;
    imageUrl: string;
    date: string;
  }
}

export interface ArticleCardBlock extends BaseBlock {
  type: 'article-card';
  props: {
    title: string;
    summary: string;
    date: string;
    category: string;
  }
}

export interface HeaderBlock extends BaseBlock {
  type: 'page-header';
  props: {
    title: string;
    subtitle?: string;
  }
}
