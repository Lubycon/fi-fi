import { Spacing } from 'quantumic-design';
import { Tab } from 'semantic-ui-react';
import ServiceHead from 'data/quant-data/components/ServiceHead';
import DataTable from 'data/quant-data/components/data/DataTable';
import Layout from 'common/components/Layout';

const panes = [
  {
    menuItem: 'US-CPI',
    render: () => (
      <Tab.Pane>
        <DataTable filename="us-cpi.json" />
      </Tab.Pane>
    ),
  },

  {
    menuItem: 'KR-CPI',
    render: () => (
      <Tab.Pane>
        <DataTable filename="kr-cpi.json" />
      </Tab.Pane>
    ),
  },

  {
    menuItem: '[KOR] Household debt to GDP ratio',
    render: () => (
      <Tab.Pane>
        <DataTable filename="household_debt.json" />
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
