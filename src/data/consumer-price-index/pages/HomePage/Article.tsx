import { useMobileScreen } from 'common/hooks/useMobileScreen';
import { Stack, Txt } from 'quantumic-design';
import Link from 'next/link';

interface Props {
  title: string;
  imageUrl?: string;
  content?: string;
  link: string;
}

const CardArticle = ({ title, imageUrl, content, link }: Props) => {
  const isMobile = useMobileScreen();

  return (
    <Link href={link}>
      <a>
        <Stack gutter={8} direction="row">
          <img src={imageUrl} alt={title} />
          <Stack gutter={8} direction="column" align="left">
            <Txt size={isMobile ? 14 : 16} color="black" weight={600}>
              {title}
            </Txt>
            <Txt size={isMobile ? 12 : 14} color="black">
              {content}
            </Txt>
          </Stack>
        </Stack>
      </a>
    </Link>
  );
};

export default CardArticle;
