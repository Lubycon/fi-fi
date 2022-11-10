import { Spacing, Txt } from 'quantumic-design';
import { useEffect, useState } from 'react';
import ServiceHead from 'calculators/salary/components/ServiceHead';
import Layout from 'common/components/Layout';
import { Card, Form, Input, Table } from 'semantic-ui-react';
import { calcIncomeRange, getAllTax, getMonthlySalary, getSalaryTable } from 'calculators/salary/utils/salary';
import { commaizeNumber } from 'temen';
import { css } from '@emotion/css';
import { numToKorean } from 'num-to-korean';
import { homePageLogger } from './logger';
import { useMobileScreen } from 'common/hooks/useMobileScreen';

const year = new Date().getFullYear();

const HomePage = () => {
  const isMobile = useMobileScreen();
  const [입력한세전연봉, setSalary] = useState<number>();

  useEffect(() => {
    homePageLogger.view();
  }, []);

  return (
    <Layout pageTitle="연봉 실수령액 계산기">
      <ServiceHead />
      <Card fluid={isMobile}>
        <Card.Content>
          <Form>
            <Form.Field>
              <label>계약 연봉을 입력해주세요</label>
              <Input
                label={{ basic: true, content: '원' }}
                labelPosition="right"
                onChange={e => {
                  setSalary(Number(e.target.value));
                }}
              />
              <label>{입력한세전연봉 && numToKorean(입력한세전연봉, 'mixed')}원</label>
            </Form.Field>
            <Form.Field>
              <label>실수령액</label>
              <Txt
                size={24}
                className={css`
                  white-space: nowrap;
                `}
                weight={700}
              >
                {commaizeNumber(getMonthlySalary(입력한세전연봉 ?? 0))}원{' '}
                <Txt display="inline" size={16}>
                  ({calcIncomeRange(입력한세전연봉 ?? 0)})
                </Txt>
              </Txt>
            </Form.Field>
          </Form>
        </Card.Content>
      </Card>
      <Spacing size={24} />
      <Txt as="h3">{year}년 실수령액 표</Txt>
      <div
        className={css`
          overflow-x: scroll;
        `}
      >
        <Table
          celled
          unstackable
          compact={isMobile}
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
            <Table.Row>
              <Table.HeaderCell>소득분포</Table.HeaderCell>
              <Table.HeaderCell>연봉</Table.HeaderCell>
              <Table.HeaderCell>실수령액</Table.HeaderCell>
              <Table.HeaderCell>공제액계</Table.HeaderCell>
              <Table.HeaderCell>국민연금</Table.HeaderCell>
              <Table.HeaderCell>건강보험</Table.HeaderCell>
              <Table.HeaderCell>장기요양</Table.HeaderCell>
              <Table.HeaderCell>고용보험</Table.HeaderCell>
              <Table.HeaderCell>소득세</Table.HeaderCell>
              <Table.HeaderCell>지방소득세</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {getSalaryTable(10000000, 500000000).map(세전연봉 => {
              const { 국민연금, 건강보험료, 장기요양보험료, 고용보험료, 소득세, 지방세, 계 } = getAllTax(세전연봉);
              const 실수령액 = getMonthlySalary(세전연봉);
              const isSearched = 입력한세전연봉 === 세전연봉;

              return (
                <Table.Row
                  positive={isSearched}
                  disabled={세전연봉 < (입력한세전연봉 ?? 0)}
                  key={세전연봉}
                  className={css`
                    font-weight: ${isSearched ? '700' : undefined};
                  `}
                >
                  <Table.Cell>{calcIncomeRange(세전연봉)}</Table.Cell>
                  <Table.Cell>{commaizeNumber(세전연봉 / 10000)}만원</Table.Cell>
                  <Table.Cell>{formatNumber(실수령액)}</Table.Cell>
                  <Table.Cell>{formatNumber(계)}</Table.Cell>
                  <Table.Cell>{formatNumber(국민연금)}</Table.Cell>
                  <Table.Cell>{formatNumber(건강보험료)}</Table.Cell>
                  <Table.Cell>{formatNumber(장기요양보험료)}</Table.Cell>
                  <Table.Cell>{formatNumber(고용보험료)}</Table.Cell>
                  <Table.Cell>{formatNumber(소득세)}</Table.Cell>
                  <Table.Cell>{formatNumber(지방세)}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </Layout>
  );
};

const formatNumber = (value: number) => `${commaizeNumber(Math.floor(value))}원`;

export default HomePage;
