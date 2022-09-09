import { css } from '@emotion/css';
import { useMobileScreen } from 'hooks/useMobileScreen';
import { numToKorean } from 'num-to-korean';
import colors from 'open-color';
import { Stack, Txt } from 'quantumic-design';
import { useEffect, useState } from 'react';
import { commaizeNumber } from 'temen';

interface Props {
  onChange?: (salary?: string) => void;
}
const SalaryInput = ({ onChange }: Props) => {
  const isMobile = useMobileScreen();
  const textSize = isMobile ? 32 : 64;
  const lineHeight = isMobile ? 38 : 76;
  const [salary, setSalary] = useState<string>();

  useEffect(() => {
    onChange?.(removeComma(salary));
  }, [onChange, salary]);

  return (
    <Stack direction="column" gutter={isMobile ? 16 : 32}>
      <Txt color={colors.white} size={textSize} lineHeight={`${lineHeight}px`} weight={700}>
        내 연봉,
      </Txt>
      <Stack
        gutter={isMobile ? 16 : 20}
        align={isMobile ? undefined : 'center'}
        direction={isMobile ? 'column' : 'row'}
      >
        <input
          type="tel"
          className={css`
            background-color: ${colors.gray[9]};
            border: none;
            width: ${isMobile ? 218 : 428}px;
            height: ${isMobile ? 38 : 96}px;
            border-radius: ${isMobile ? 16 : 20}px;
            font-size: ${textSize}px;
            line-height: ${lineHeight}px;
            color: ${colors.white};
            font-weight: 700;
            padding: ${isMobile ? '5px 10px' : '8px 16px'};
            box-sizing: border-box;
            text-align: right;
            outline: 0;
            &::placeholder {
              color: ${colors.gray[6]};
            }
          `}
          placeholder="0"
          value={salary}
          onChange={e => {
            const value = removeComma(e.target.value) ?? '';
            setSalary(commaizeNumber(value));
          }}
        />
        <Txt color={colors.white} size={textSize} lineHeight={`${lineHeight}px`} weight={700}>
          {salary != null && (
            <Txt as="span" display="inline" color={colors.indigo[6]}>
              {numToKorean(Number(removeComma(salary)))}
            </Txt>
          )}
          <Txt as="span" display="inline" color={salary != null && salary !== '' ? colors.indigo[6] : colors.white}>
            원
          </Txt>
          의
        </Txt>
      </Stack>
      <Txt color={colors.white} size={textSize} lineHeight={`${lineHeight}px`} weight={700}>
        월 실수령액이 얼마죠?
      </Txt>
    </Stack>
  );
};

export default SalaryInput;

const removeComma = (value?: string) => (value == null ? value : value.replaceAll(',', ''));
