import { Spacing } from 'quantumic-design';
import { Tab } from 'semantic-ui-react';
import ServiceHead from 'data/quant-data/components/ServiceHead';
import DataTable from 'data/quant-data/components/data/DataTable';
import Layout from 'common/components/Layout';

const panes = [
  {
    menuItem: '미국 소비자물가지수',
    render: () => (
      <Tab.Pane>
        <DataTable filename="us-cpi.json" />
      </Tab.Pane>
    ),
  },

  {
    menuItem: '한국 소비자물가지수',
    render: () => (
      <Tab.Pane>
        <DataTable filename="kr-cpi.json" />
      </Tab.Pane>
    ),
  },

  {
    menuItem: '한국 가계부채율',
    render: () => (
      <Tab.Pane>
        <DataTable filename="household_debt.json" />
      </Tab.Pane>
    ),
  },

  {
    menuItem: '한국 가계대출 연체율',
    render: () => (
      <Tab.Pane>
        <DataTable filename="household_delinquency_rate.json" />
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
