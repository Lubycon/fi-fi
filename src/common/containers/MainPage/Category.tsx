'use client';
import { css, cx } from '@emotion/css';
import { useLogger } from 'common/hooks/useLogger';
import { useMobileScreen } from 'common/hooks/useMobileScreen';
import Link from 'next/link';
import { Stack, Txt } from 'quantumic-design';
import { ComponentProps, PropsWithChildren } from 'react';
import { Button, Grid } from 'semantic-ui-react';

interface LinkItem {
  name: string;
  link: string;
}

interface Props {
  title: string;
  links: LinkItem[];
}
const Category = ({ title, links }: Props) => {
  const logger = useLogger('main_page');
  return (
    <Stack
      gutter={8}
      direction="column"
      className={css`
        width: 100%;
      `}
    >
      <Title>{title}</Title>
      <Grid
        columns={4}
        doubling
        className={css`
          width: 100%;
        `}
      >
        {links.map(({ name, link }) => (
          <Grid.Column key={link}>
            <Link
              key={link}
              href={link}
              onClick={() => {
                logger.click('click_service_link', {
                  serviceName: name,
                  link,
                });
              }}
              className={css`
                width: 100%;
              `}
            >
              <BlockButton>{name}</BlockButton>
            </Link>
          </Grid.Column>
        ))}
      </Grid>
    </Stack>
  );
};

export default Category;

const Title = ({ children }: PropsWithChildren<unknown>) => (
  <Txt size={18} weight={600}>
    {children}
  </Txt>
);

const BlockButton = ({ className, ...props }: ComponentProps<typeof Button>) => {
  const isMobile = useMobileScreen();
  return (
    <Button
      className={cx(
        className,
        css`
          width: 100%;
          height: ${isMobile ? 50 : 100}px;
        `
      )}
      {...props}
    />
  );
};
