import { Flex, Txt } from 'quantumic-design';
import colors from 'open-color';
import { css } from '@emotion/css';

const Footer = () => {
  return (
    <Flex
      as="footer"
      justify="flex-end"
      className={css`
        padding: 24px;
        border-top: 1px solid ${colors.gray[2]};
      `}
    >
      <Txt color={colors.gray[7]}>© Double Tap co.</Txt>
    </Flex>
  );
};

export default Footer;
