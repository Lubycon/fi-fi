import { Flex, Spacing, Txt } from 'quantumic-design';
import { useState } from 'react';
import ServiceHead from 'calculators/salary-calculator/components/ServiceHead';
import Layout from 'common/components/Layout';
import { Button, Form, Input } from 'semantic-ui-react';
import { getMonthlySalary } from 'calculators/salary-calculator/utils/salary';
import { commaizeNumber } from 'temen';
import { css } from '@emotion/css';
import IncomeRangeResult from './IncomeRangeResult';

const HomePage = () => {
  const [세전연봉, setSalary] = useState<number>();
  const [월실수령액, setResult] = useState<number>();

  const calc = () => {
    const 실수령액 = getMonthlySalary(Number(세전연봉));
    setResult(실수령액);
  };

  return (
    <Layout pageTitle="연봉 실수령액 계산기">
      <ServiceHead />
      <Flex
        align="center"
        className={css`
          width: 100%;
        `}
      >
        <Form>
          <Form.Group widths="equal">
            <Form.Field>
              <label>계약 연봉을 입력해주세요</label>
              <Input
                label={{ basic: true, content: '원' }}
                labelPosition="right"
                onChange={e => {
                  const value = e.target.value;
                  if (isNaN(Number(value))) {
                    setSalary(undefined);
                  }

                  setSalary(Number(value));
                }}
              />
            </Form.Field>
            <Flex align="center">
              <Txt size={24} as="span">
                👉
              </Txt>
            </Flex>
            <Form.Field>
              <label>실수령액</label>
              <Txt size={24}>{commaizeNumber(월실수령액 ?? 0)}원</Txt>
            </Form.Field>
          </Form.Group>
        </Form>
      </Flex>
      <Spacing size={16} />
      <Button
        primary
        size="big"
        className={css`
          width: 100%;
        `}
        disabled={세전연봉 == null}
        onClick={calc}
      >
        계산하기
      </Button>
      <Spacing size={24} />
      {세전연봉 != null && <IncomeRangeResult 세전연봉={세전연봉} />}
    </Layout>
  );
};

export default HomePage;
