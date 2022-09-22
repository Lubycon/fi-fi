import { Button, Card, Dropdown, Form, Input, Table } from 'semantic-ui-react';
import ServiceHead from 'calculators/compound-interest/components/ServiceHead';
import Layout from 'common/components/Layout';
import { useState } from 'react';
import { Spacing } from 'quantumic-design';
import { css } from '@emotion/css';
import { calcCompoundInterest, Output } from 'calculators/compound-interest/utils';
import { commaizeNumber } from 'temen';
import { numToKorean } from 'num-to-korean';

type DateType = '일' | '개월' | '년';

const 기간타입options: Array<{ key: DateType; text: DateType; value: DateType }> = [
  { key: '일', text: '일', value: '일' },
  { key: '개월', text: '개월', value: '개월' },
  { key: '년', text: '년', value: '년' },
];

const HomePage = () => {
  const [원금, set원금] = useState(0);
  const [기간, set기간] = useState(0);
  const [수익률, set수익률] = useState(0);

  const [기간타입, set기간타입] = useState<DateType>('일');

  const [계산결과, set계간결과] = useState<Output[]>();

  const calc = () => {
    set계간결과(calcCompoundInterest({ 원금, 계산횟수: 기간, 목표수익률: 수익률 }));
  };

  return (
    <Layout pageTitle="복리 계산기">
      <ServiceHead />
      <Card>
        <Card.Content>
          <Form>
            <Form.Field>
              <label>원금</label>
              <Input
                label={{ basic: true, content: '원' }}
                labelPosition="right"
                value={원금}
                onChange={e => {
                  set원금(Number(e.target.value));
                }}
              />
              <label>{원금 && numToKorean(원금)}원</label>
            </Form.Field>
            <Form.Field>
              <label>계산기간</label>
              <Input
                label={
                  <Dropdown
                    value={기간타입}
                    options={기간타입options}
                    onChange={(_, { value }) => {
                      set기간타입(value as DateType);
                    }}
                  />
                }
                labelPosition="right"
                value={기간}
                onChange={e => {
                  set기간(Number(e.target.value));
                }}
              />
            </Form.Field>
            <Form.Field>
              <label>목표 수익률</label>
              <Input
                label={{ basic: true, content: '%' }}
                labelPosition="right"
                value={수익률}
                onChange={e => {
                  set수익률(Number(e.target.value));
                }}
              />
            </Form.Field>
          </Form>
          <Spacing size={12} />
          <Button primary fluid size="large" onClick={calc}>
            계산하기
          </Button>
        </Card.Content>
      </Card>
      <Spacing size={24} />
      {계산결과 && (
        <Table
          celled
          className={css`
            max-width: 1200px;
          `}
        >
          <Table.Header
            className={css`
              position: sticky;
              top: 0;
            `}
          >
            <Table.HeaderCell>기간</Table.HeaderCell>
            <Table.HeaderCell>수익</Table.HeaderCell>
            <Table.HeaderCell>총 금액</Table.HeaderCell>
            <Table.HeaderCell>수익률</Table.HeaderCell>
          </Table.Header>
          <Table.Body>
            {계산결과.map(({ 횟수, 수익, 총금액, 수익률 }) => (
              <Table.Row key={횟수}>
                <Table.Cell>
                  {횟수}
                  {기간타입}
                </Table.Cell>
                <Table.Cell>{commaizeNumber(Math.floor(수익))}원</Table.Cell>
                <Table.Cell>{commaizeNumber(Math.floor(총금액))}원</Table.Cell>
                <Table.Cell>{commaizeNumber(수익률.toFixed(2))}%</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )}
    </Layout>
  );
};

export default HomePage;
