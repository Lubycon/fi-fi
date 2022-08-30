import { css } from '@emotion/css';
import { logger } from '@lubycon/logger';
import Button from 'components/Button';
import { useMobileScreen } from 'hooks/useMobileScreen';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { numToKorean } from 'num-to-korean';
import colors from 'open-color';
import { Flex, Spacing, Stack, Txt } from 'quantumic-design';
import { useEffect, useState } from 'react';
import { commaizeNumber, stringifyQueryParams } from 'temen';

const homePageLogger = logger.getPageLogger('HomePage');

const HomePage = () => {
  const isMobile = useMobileScreen();
  const [salary, setSalary] = useState<string>();
  const router = useRouter();

  const textSize = isMobile ? 32 : 64;
  const lineHeight = isMobile ? 38 : 76;

  useEffect(() => {
    homePageLogger.view();
  }, []);

  return (
    <Flex
      justify={isMobile ? undefined : 'center'}
      align="center"
      className={css`
        height: 100vh;
        padding: 0 24px;
      `}
    >
      <Txt
        className={css`
          position: absolute;
          top: 40px;
          left: ${isMobile ? '24px' : '40px'};
          white-space: nowrap;
        `}
        size={16}
        color={colors.gray[7]}
      >
        내 연봉,{' '}
        <Txt display="inline" as="span" weight={700} color={colors.indigo[6]}>
          실수령액
        </Txt>{' '}
        알아보기
      </Txt>
      <Flex
        direction="column"
        className={css`
          width: ${isMobile ? '100%' : 'auto'};
          z-index: 10;
        `}
      >
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
        <Spacing size={80} />
        <Flex
          justify={isMobile ? 'center' : 'flex-end'}
          className={css`
            width: 100%;
          `}
        >
          <Button
            onClick={() => {
              homePageLogger.click('click_calculate_salary');

              const querystring = stringifyQueryParams({
                salary: removeComma(salary),
              });
              router.push(`/result${querystring}`);
            }}
          >
            계산하기
          </Button>
        </Flex>
      </Flex>
      <div
        className={css`
          position: absolute;
          bottom: 0;
          right: ${isMobile ? '-40px' : '15vw'};
          z-index: 0;
        `}
      >
        <Image layout="fixed" width={306} height={306} src="/cash.png" priority={true} alt="" />
      </div>
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
    </Flex>
  );
};

export default HomePage;

const removeComma = (value?: string) => (value == null ? value : value.replaceAll(',', ''));
