import { Icon, Menu, Table } from 'semantic-ui-react';
import { useDoubleTapLabStorage } from 'common/hooks/useDoubleTapLabStorage';

interface USCPI {
  Date: Record<string, string>;
  CPI: Record<string, string>;
}

const UsCPITable = () => {
  /* eslint-disable-line no-unused-vars */
  const { data } = useDoubleTapLabStorage<USCPI>('quant-data/us-cpi.json');

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
        {Object.entries(data.Date).map(([index, date]) => (
          <Table.Row key={index}>
            <Table.Cell>{date}</Table.Cell>
            <Table.Cell>{data.CPI[index]}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="3">
            <Menu floated="right" pagination>
              <Menu.Item as="a" icon>
                <Icon name="chevron left" />
              </Menu.Item>
              <Menu.Item as="a">1</Menu.Item>
              <Menu.Item as="a">2</Menu.Item>
              <Menu.Item as="a">3</Menu.Item>
              <Menu.Item as="a">4</Menu.Item>
              <Menu.Item as="a" icon>
                <Icon name="chevron right" />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};

export default UsCPITable;
