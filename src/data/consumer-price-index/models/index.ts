interface ConsumerPriceIndexInfo {
  previous: string;
  prediction: string;
  real: string;
  announceDate: string;
}

export interface ConsumerPriceIndexInfoDto {
  korea: ConsumerPriceIndexInfo;
  usa: ConsumerPriceIndexInfo;
}
