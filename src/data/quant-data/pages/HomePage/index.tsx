import { Spacing } from 'quantumic-design';
import { Tab } from 'semantic-ui-react';
import ServiceHead from 'data/quant-data/components/ServiceHead';
import UsCPITable from 'data/quant-data/components/data/UsCPI';
import Layout from 'common/components/Layout';

/**
 * 여기서 작성한 페이지를 /pages 디렉토리 내부에서 export 하시면 디렉토리 경로대로 페이지가 생성돼요.
 *
 * @example
 * ```ts
 * export { default } from 'quant-data/pages/HomePage';
 * ```
 */

const panes = [
  {
    menuItem: 'US-CPI',
    render: () => (
      <Tab.Pane>
        {' '}
        <UsCPITable />{' '}
      </Tab.Pane>
    ),
  },
];

const HomePage = () => {
  return (
    <Layout pageTitle="퀀트데이터">
      <ServiceHead />
      <Spacing size={24} />
      <Tab menu={{ pointing: true }} panes={panes} />
    </Layout>
  );
};

export default HomePage;
