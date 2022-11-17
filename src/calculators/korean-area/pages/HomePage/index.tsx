import { Button, Card, Form, Input, Table } from 'semantic-ui-react';
import ServiceHead from 'calculators/korean-area/components/ServiceHead';
import Layout from 'common/components/Layout';
import { useState } from 'react';
import { Spacing, Stack, Txt } from 'quantumic-design';
import { css } from '@emotion/css';
import { commaizeNumber, getArrayFromCount } from 'temen';
import colors from 'open-color';
import { usePageLogger } from 'common/hooks/useLogger';

const 평to제곱미터 = 3.305785;

const 평수Preset = [15, 18, 24, 28, 32, 36, 40, 48, 52];
const 제곱미터Preset = [49.58, 59.5, 79.33, 92.56, 105.78, 119, 132.23, 158.67, 171.9];

const get평수Samples = () => {
  return getArrayFromCount(60, i => i + 1);
};

const convert평to제곱미터 = (평수?: number) => {
  return 평수 != null ? 평수 * 평to제곱미터 : 0;
};

const convert제곱미터to평 = (제곱미터?: number) => {
  return 제곱미터 != null ? 제곱미터 / 평to제곱미터 : 0;
};

const HomePage = () => {
  usePageLogger('calculators/korean-area/home_page');

  const [평수, set평수] = useState(0);
  const [제곱미터, set제곱미터] = useState(0);

  const set평수Preset = (평: number) => () => {
    set평수(평);
  };

  const set제곱미터Preset = (제곱미터: number) => () => {
    set제곱미터(제곱미터);
  };

  return (
    <Layout pageTitle="평수 계산기">
      <ServiceHead />
      <Card fluid>
        <Card.Content>
          <Form>
            <Form.Field>
              <label>평수를 입력해주세요</label>
              <Input
                label={{ basic: true, content: '평' }}
                labelPosition="right"
                value={평수}
                onChange={e => {
                  set평수(Number(e.target.value));
                }}
              />
              <Spacing size={8} />
              <Stack
                gutter={8}
                className={css`
                  flex-wrap: wrap;
                `}
              >
                {평수Preset.map(value => (
                  <Button key={value} size="mini" onClick={set평수Preset(value)}>
                    {value}평
                  </Button>
                ))}
              </Stack>
            </Form.Field>
            <Form.Field>
              <label>제곱미터</label>
              <Txt
                size={24}
                className={css`
                  white-space: nowrap;
                `}
                weight={700}
              >
                {commaizeNumber(convert평to제곱미터(평수))} ㎡
              </Txt>
            </Form.Field>
          </Form>
        </Card.Content>
      </Card>
      <Card fluid>
        <Card.Content>
          <Form>
            <Form.Field>
              <label>제곱미터를 입력해주세요</label>
              <Input
                label={{ basic: true, content: '㎡' }}
                labelPosition="right"
                onChange={e => {
                  set제곱미터(Number(e.target.value));
                }}
              />
              <Spacing size={8} />
              <Stack
                gutter={8}
                className={css`
                  flex-wrap: wrap;
                `}
              >
                {제곱미터Preset.map(value => (
                  <Button key={value} size="mini" onClick={set제곱미터Preset(value)}>
                    {value}㎡
                  </Button>
                ))}
              </Stack>
            </Form.Field>
            <Form.Field>
              <label>평</label>
              <Txt
                size={24}
                className={css`
                  white-space: nowrap;
                `}
                weight={700}
              >
                {commaizeNumber(convert제곱미터to평(제곱미터))} 평
              </Txt>
            </Form.Field>
          </Form>
        </Card.Content>
      </Card>
      <Spacing size={24} />
      <Txt size={18}>
        평 / ㎡ 변환표{' '}
        <Txt display="inline" as="small" size={12} color={colors.gray[5]}>
          1평 = 3.306㎡
        </Txt>
      </Txt>
      <Table
        celled
        unstackable
        className={css`
          max-width: 400px;
        `}
      >
        <Table.Header>
          <Table.HeaderCell>평</Table.HeaderCell>
          <Table.HeaderCell>제곱미터</Table.HeaderCell>
        </Table.Header>
        <Table.Body>
          {get평수Samples().map(value => (
            <Table.Row key={value}>
              <Table.Cell>{value}평</Table.Cell>
              <Table.Cell>{commaizeNumber(convert평to제곱미터(value))}㎡</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Layout>
  );
};

export default HomePage;
