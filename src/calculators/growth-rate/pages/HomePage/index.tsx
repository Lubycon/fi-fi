import { Card, Form, Input } from 'semantic-ui-react';
import ServiceHead from 'calculators/growth-rate/components/ServiceHead';
import Layout from 'common/components/Layout';
import { useEffect, useState } from 'react';
import { Txt } from 'quantumic-design';
import colors from 'open-color';
import { logger } from '@lubycon/logger';

/**
 * 여기서 작성한 페이지를 /pages 디렉토리 내부에서 export 하시면 디렉토리 경로대로 페이지가 생성돼요.
 *
 * @example
 * ```ts
 * export { default } from 'growth-rate/pages/HomePage';
 * ```
 */
const HomePage = () => {
  const [이전값, set이전값] = useState(0);
  const [현재값, set현재값] = useState(0);

  const 성장률 = 이전값 === 0 || 현재값 === 0 ? 0 : ((현재값 - 이전값) / 이전값) * 100;

  useEffect(() => {
    const homePageLogger = logger.getPageLogger('calculators/growth-rate/home_page');
    homePageLogger.view();
  }, []);

  return (
    <Layout pageTitle="성장률 계산기">
      <ServiceHead />
      <Card fluid>
        <Card.Content>
          <Form>
            <Form.Field>
              <label>이전 값</label>
              <Input
                value={이전값}
                onChange={e => {
                  const value = Number(e.target.value);
                  set이전값(isNaN(value) ? 0 : value);
                }}
              />
            </Form.Field>
            <Form.Field>
              <label>현재 값</label>
              <Input
                value={현재값}
                onChange={e => {
                  const value = Number(e.target.value);
                  set현재값(isNaN(value) ? 0 : value);
                }}
              />
            </Form.Field>
            <Form.Field>
              <label>성장률</label>
              <Txt size={32} weight={600} color={성장률 > 0 ? colors.red[5] : colors.blue[5]}>
                {성장률.toFixed(2)}%
              </Txt>
            </Form.Field>
          </Form>
        </Card.Content>
      </Card>
    </Layout>
  );
};

export default HomePage;
