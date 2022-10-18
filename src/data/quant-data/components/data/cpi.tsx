import { Table } from 'semantic-ui-react';
import { useDoubleTapLabStorage } from 'common/hooks/useDoubleTapLabStorage';

interface USCPI {
  date: Record<string, string>;
  value: Record<string, string>;
}

type CountryProps = {
  country: 'kr' | 'us';
};

const CPITable = ({ country }: CountryProps) => {
  const { data } = useDoubleTapLabStorage<USCPI>('quant-data/' + country + '-cpi.json');

  if (data == null) {
    return null;
  }

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>CPI</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {Object.entries(data.date).map(([index, date]) => (
          <Table.Row key={index}>
            <Table.Cell width={2}>{date}</Table.Cell>
            <Table.Cell>{data.value[index]}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default CPITable;
