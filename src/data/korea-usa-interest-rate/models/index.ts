export interface InterestRateInfo {
  rate: string;
  nextDecision: string;
}

export interface InterestRateInfoDto {
  korea: InterestRateInfo;
  usa: InterestRateInfo;
}
