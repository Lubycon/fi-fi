import { useEffect, useMemo } from 'react';
import { Card } from 'semantic-ui-react';
import { logger } from '@lubycon/logger';
import ServiceHead from 'data/korea-usa-interest-rate/components/ServiceHead';
import Layout from 'common/components/Layout';
import { useQuery } from 'react-query';
import { doGet } from 'browser-toolkit';
import { Spacing, Stack, Txt } from 'quantumic-design';

interface InterestRateInfo {
  rate: string;
  nextDecision: string;
}
interface InterestRateInfoDto {
  korea: InterestRateInfo;
  usa: InterestRateInfo;
}

const HomePage = () => {
  const { data } = useQuery('interestRate', async () => (await doGet<InterestRateInfoDto>('/api/interest-rate')).body);

  const 금리차 = useMemo(() => {
    if (data == null) {
      return 0;
    }

    const { korea, usa } = data;
    const 한국금리 = Number(korea.rate.replaceAll('%', ''));
    const 미국금리 = Number(usa.rate.replaceAll('%', ''));

    return Math.abs(한국금리 - 미국금리);
  }, [data]);

  useEffect(() => {
    const homePageLogger = logger.getPageLogger('data/korea-usa-interest-rate/home_page');
    homePageLogger.view();
  }, []);

  return (
    <Layout pageTitle="실시간 한미 기준금리차 보기">
      <ServiceHead />
      <Card fluid>
        <Card.Content>
          <Spacing size={24} />
          <Stack gutter={48} justify="center" align="center">
            <Stack gutter={8} direction="column" align="center">
              <Txt size={16}>🇰🇷 대한민국 현재 기준금리</Txt>
              <Txt size={24} weight={600}>
                {data?.korea.rate}
              </Txt>
              <Txt>다음 결정일: {data?.korea.nextDecision}</Txt>
            </Stack>
            <Stack gutter={8} direction="column" align="center">
              <Txt size={24} weight={700}>
                한미 기준금리차
              </Txt>
              <Txt size={48} weight={700}>
                {금리차.toFixed(2)}%
              </Txt>
            </Stack>
            <Stack gutter={8} direction="column" align="center">
              <Txt size={16}>🇺🇸 미국 현재 기준금리</Txt>
              <Txt size={24} weight={600}>
                {data?.usa.rate}
              </Txt>
              <Txt>다음 결정일: {data?.usa.nextDecision}</Txt>
            </Stack>
          </Stack>
          <Spacing size={24} />
        </Card.Content>
      </Card>
    </Layout>
  );
};

export default HomePage;
