import { css, cx } from '@emotion/css';
import Layout from 'common/components/Layout';
import Link from 'next/link';
import { Stack, Txt } from 'quantumic-design';
import { AnchorHTMLAttributes, ComponentProps, PropsWithChildren } from 'react';
import { Grid, Button } from 'semantic-ui-react';

const MainPage = () => {
  return (
    <Layout>
      <Grid columns={3} doubling>
        <Grid.Column>
          <Title>계산기</Title>
          <Stack direction="column" gutter={8}>
            <Link href="/salary-calculator">
              <BlockLink>
                <BlockButton>연봉 계산기</BlockButton>
              </BlockLink>
            </Link>
            <Link href="/korean-area">
              <BlockLink>
                <BlockButton>평수 계산기</BlockButton>
              </BlockLink>
            </Link>
            <Link href="/growth-rate">
              <BlockLink>
                <BlockButton>성장률 계산기</BlockButton>
              </BlockLink>
            </Link>
            <Link href="/compound-interest">
              <BlockLink>
                <BlockButton>복리 계산기</BlockButton>
              </BlockLink>
            </Link>
          </Stack>
        </Grid.Column>
        <Grid.Column>
          <Title>컨버터</Title>
          <Stack gutter={8} direction="column">
            <Link href="/image-converter">
              <BlockLink>
                <BlockButton>이미지 컨버터</BlockButton>
              </BlockLink>
            </Link>
          </Stack>
        </Grid.Column>
      </Grid>
    </Layout>
  );
};

const Title = ({ children }: PropsWithChildren<unknown>) => (
  <Txt size={18} weight={600}>
    {children}
  </Txt>
);

const BlockLink = ({ className, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a
    className={cx(
      className,
      css`
        width: 100%;
      `
    )}
    {...props}
  />
);

const BlockButton = ({ className, ...props }: ComponentProps<typeof Button>) => (
  <Button
    className={cx(
      className,
      css`
        width: 100%;
      `
    )}
    {...props}
  />
);

export default MainPage;
