import Layout from 'common/components/Layout';
import Link from 'next/link';
import { Flex, Stack } from 'quantumic-design';
import { Button } from 'semantic-ui-react';

const MainPage = () => {
  return (
    <Layout>
      <Flex align="center" justify="center">
        <Stack gutter={8} direction="column">
          <Link href="/salary-calculator">
            <a>
              <Button>연봉 계산기</Button>
            </a>
          </Link>
          <Link href="/korean-area">
            <a>
              <Button>평수 계산기</Button>
            </a>
          </Link>
          <Link href="/compound-interest">
            <a>
              <Button>복리 계산기</Button>
            </a>
          </Link>
          <Link href="/image-converter">
            <a>
              <Button>이미지 컨버터</Button>
            </a>
          </Link>
        </Stack>
      </Flex>
    </Layout>
  );
};

export default MainPage;
