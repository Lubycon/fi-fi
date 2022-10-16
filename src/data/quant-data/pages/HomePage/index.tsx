import { Spacing } from 'quantumic-design';
import { Tab } from 'semantic-ui-react';
import ServiceHead from 'data/quant-data/components/ServiceHead';
import CPITable from 'data/quant-data/components/data/cpi';
import Layout from 'common/components/Layout';

const panes = [
  {
    menuItem: 'US-CPI',
    render: () => (
      <Tab.Pane>
        <CPITable country="us" />
      </Tab.Pane>
    ),
  },

  {
    menuItem: 'KR-CPI',
    render: () => (
      <Tab.Pane>
        <CPITable country="kr" />
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
