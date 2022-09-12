import ServiceName from 'foo/components/ServiceName';

/**
 * 여기서 작성한 페이지를 /pages 디렉토리 내부에서 export 하시면 디렉토리 경로대로 페이지가 생성돼요.
 *
 * @example
 * ```ts
 * export { default } from 'foo/pages/HomePage';
 * ```
 */
const HomePage = () => {
  return (
    <div>
      <ServiceName name="foo" />
    </div>
  );
};

export default HomePage;
