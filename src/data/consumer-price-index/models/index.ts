interface ConsumerPriceIndexInfo {
  previous: string;
  prediction: string;
  real: string;
  announceDate: string;
}

interface Article {
  title: string;
  imageUrl: string;
  content: string;
  link: string;
}

interface Articles {
  first: Article;
  second: Article;
}

export interface ArticleInfoDto {
  korea: Articles;
  usa: Articles;
}

export interface ConsumerPriceIndexInfoDto {
  korea: ConsumerPriceIndexInfo;
  usa: ConsumerPriceIndexInfo;
}
