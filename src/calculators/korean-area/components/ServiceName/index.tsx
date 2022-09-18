import { Stack, Txt } from 'quantumic-design';

interface Props {
  name: string;
}
const ServiceName = ({ name }: Props) => {
  return (
    <Stack direction="column" gutter={8}>
      <Txt>안녕하세요!</Txt>
      <Txt>{name} 서비스 개발을 시작해보세요</Txt>
    </Stack>
  );
};

export default ServiceName;
