import { css } from '@emotion/css';
import { Txt } from 'quantumic-design';
import colors from 'open-color';

const CopyRights = () => (
  <Txt
    className={css`
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
    `}
    color={colors.gray[7]}
  >
    © Double Tap co.
  </Txt>
);

export default CopyRights;
