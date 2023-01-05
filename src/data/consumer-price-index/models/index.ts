interface ConsumerPriceIndexInfo {
  previous: string;
  prediction: string;
  real: string;
  announceDate: string;
}

interface Article {
  index: number;
  title: string;
  imageUrl: string;
  content: string;
  link: string;
}

export interface ArticleInfoDto {
  korea: Article[];
  usa: Article[];
}

export interface ConsumerPriceIndexInfoDto {
  korea: ConsumerPriceIndexInfo;
  usa: ConsumerPriceIndexInfo;
}
