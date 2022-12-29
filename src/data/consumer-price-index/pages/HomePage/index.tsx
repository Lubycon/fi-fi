import { useEffect } from 'react';
import { Card } from 'semantic-ui-react';
import { logger } from '@lubycon/logger';
import ServiceHead from 'data/consumer-price-index/components/ServiceHead';
import Layout from 'common/components/Layout';
import { useQuery } from 'react-query';
import { doGet } from 'browser-toolkit';
import { Spacing, Stack, Txt } from 'quantumic-design';
import { ConsumerPriceIndexInfoDto, ArticleInfoDto } from 'data/consumer-price-index/models';
import CountryCustomerPriceIndex from './CountryCustomerPriceIndex';
import CardArticle from './Article';
import { useMobileScreen } from 'common/hooks/useMobileScreen';

/**
 * 여기서 작성한 페이지를 /pages 디렉토리 내부에서 export 하시면 디렉토리 경로대로 페이지가 생성돼요.
 *
 * @example
 * ```ts
 * export { default } from 'consumer-price-index/pages/HomePage';
 * ```
 */
const HomePage = () => {
  const isMobile = useMobileScreen();
  const cpiData = useQuery(
    'ConsumerPriceIndex',
    async () => (await doGet<ConsumerPriceIndexInfoDto>('/api/consumer-price-index')).body
  );
  const articleData = useQuery('Article', async () => (await doGet<ArticleInfoDto>('/api/article')).body);

  useEffect(() => {
    const homePageLogger = logger.getPageLogger('data/consumer-price-index/home_page');
    homePageLogger.view();
  }, []);

  return (
    <Layout pageTitle="실시간 한미 소비자물가지수(CPI) 보기">
      <ServiceHead />
      <Card fluid>
        <Card.Content>
          <Spacing size={24} />
          <Stack gutter={48} direction={isMobile ? 'column' : 'row'} justify="center" align="center">
            <CountryCustomerPriceIndex
              title="🇰🇷 대한민국 현재 소비자물가지수"
              previous={cpiData?.data.korea.previous}
              real={cpiData?.data.korea.real}
              prediction={cpiData?.data.korea.prediction}
              announceDate={cpiData?.data.korea.announceDate}
            />
            <Spacing size={24} />
            <CountryCustomerPriceIndex
              title="🇺🇸 미국 현재 소비자물가지수"
              previous={cpiData?.data.usa.previous}
              real={cpiData?.data.usa.real}
              prediction={cpiData?.data.usa.prediction}
              announceDate={cpiData?.data.usa.announceDate}
            />
          </Stack>
          <Spacing size={24} />
          <Txt className="poweredBy" align="right">
            제공자{' '}
            <a
              href="https://kr.investing.com?utm_source=WMT&amp;utm_medium=referral&amp;utm_campaign=LIVE_CURRENCY_X_RATES&amp;utm_content=Footer%20Link"
              target="_blank"
              rel="nofollow noreferrer"
            >
              Investing.com
            </a>
          </Txt>
        </Card.Content>
      </Card>
      <Txt as="h3">소비자물가지수(CPI)가 왜 중요한가요?</Txt>
      <Txt as="p">
        물가지수는 물건의 가격이 과거에 비해 얼마나 올랐나 조사 한 것이에요.
        <br />
        <br />
        물가지수는 대표적으로
        <br />
        1). 소비자가 많이 사용하는 물건 460개의 가격을 조사한 <strong>소비자물가지수</strong>
        <br />
        2). 가격 변동이 심한 농산물이나 석유 같은 것들을 제외하고 소비자에게 중요한 여러 가지 물건 가격을 조사한{' '}
        <strong>근원물가지수</strong>
        <br />
        3). 소비자들이 일상생활을 하는 데 있어 중요한 141개의 물건 가격을 조사한 <strong>생활물가지수</strong>
        <br />
        4). 물건 생산을 위해 중요한 867개의 물건가격을 조사한 <strong>생산자물가지수가</strong> 있어요
        <br />
        <br />
        인플레이션은 화폐가치가 하락하고 물가가 상승하는 것을 의미하기에 이 지수들은 인플레이션을 측정하기 위한 주요
        지표 중 하나예요.
        <br />
        각 나라의 중앙은행은 기준금리를 조정하여 적정 인플레이션을 유지하려고 노력하고 있어요. 그래서 중앙은행들은 물가
        지표들을 예의주시하고 있죠.
        <br />
        <br />
        기준금리가 오르면, 기존에 은행으로부터 돈을 빌렸던 기업의 이자 부담과 늘어나게 돼요. 같은 맥락으로 신규대출의
        이자 또한 비싸지기 때문에 자금을 조달하기 어려워지죠.
        <br />
        기업들은 자금을 조달해 설비를 확충하거나 신규사업에 적극적으로 투자하여 매출을 올려야 하는데, 기준금리가 올라
        자금조달과 부채에 대한 부담이 증가하게 돼요. 이는 기업들의 투자를 위축시키죠.
        <br />
        투자가 위축된 기업은 매출이 안 좋아질 확률이 높을 거예요. 기업 매출이 시장이 기대하던 것보다 악화하면, 이는 바로
        주식가격의 하락으로 이어져요.
        <br />
        <br />
        <strong>소비자물가지수의 큰 변동은 기업의 주식가격에 영향을 줄 확률이 높답니다.</strong>
        <br />
        <br />
        그럼, 이제 현재 소비자물가지수를 확인하러 가볼까요?
      </Txt>
      <Spacing size={15} />
      <Txt as="h3">관련 기사</Txt>
      <Txt as="h4">한국 소비자물가지수(CPI)</Txt>
      <CardArticle
        title={articleData?.data.korea.first.title}
        imageUrl={articleData?.data.korea.first.imageUrl}
        content={articleData?.data.korea.first.content}
        link={articleData?.data.korea.first.link}
      />
      <Spacing size={15} />
      <CardArticle
        title={articleData?.data.korea.second.title}
        imageUrl={articleData?.data.korea.second.imageUrl}
        content={articleData?.data.korea.second.content}
        link={articleData?.data.korea.second.link}
      />
      <Spacing size={15} />
      <Txt as="h4">미국 소비자물가지수(CPI)</Txt>
      <CardArticle
        title={articleData?.data.usa.first.title}
        imageUrl={articleData?.data.usa.first.imageUrl}
        content={articleData?.data.usa.first.content}
        link={articleData?.data.usa.first.link}
      />
      <Spacing size={15} />
      <CardArticle
        title={articleData?.data.usa.second.title}
        imageUrl={articleData?.data.usa.second.imageUrl}
        content={articleData?.data.usa.second.content}
        link={articleData?.data.usa.second.link}
      />
    </Layout>
  );
};

export default HomePage;
