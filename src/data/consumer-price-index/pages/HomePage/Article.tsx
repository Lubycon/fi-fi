import { useMobileScreen } from 'common/hooks/useMobileScreen';
import { Stack, Txt, Spacing } from 'quantumic-design';
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
    <div>
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
      <Spacing size={15} />
    </div>
  );
};

export default CardArticle;
