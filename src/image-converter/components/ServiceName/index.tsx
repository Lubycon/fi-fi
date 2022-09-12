import { Stack, Txt } from 'quantumic-design';

interface Props {
  name: string;
}
const ServiceName = ({ name }: Props) => {
  return (
    <Stack direction="column" gutter={8}>
      <Txt>안녕하세요!</Txt>
      <Txt>QDS를 사용하면 {name} 서비스를 더 편하게 만드실 수 있어요.</Txt>
    </Stack>
  );
};

export default ServiceName;
