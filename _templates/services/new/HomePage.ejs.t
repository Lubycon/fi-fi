---
to: src/<%= serviceType %>/<%= name %>/pages/HomePage/index.tsx
---
import { useEffect } from 'react';
import { Card } from 'semantic-ui-react';
import { logger } from '@lubycon/logger';
import ServiceHead from '<%= serviceType %>/<%= name %>/components/ServiceHead';
import ServiceName from '<%= serviceType %>/<%= name %>/components/ServiceName';
import Layout from 'common/components/Layout';

/**
 * 여기서 작성한 페이지를 /pages 디렉토리 내부에서 export 하시면 디렉토리 경로대로 페이지가 생성돼요.
 *
 * @example
 * ```ts
 * export { default } from '<%= name %>/pages/HomePage';
 * ```
 */
const HomePage = () => {
  useEffect(() => {
    const homePageLogger = logger.getPageLogger('<%= serviceType %>/<%= name %>/home_page');
    homePageLogger.view();
  }, []);
  return (
    <Layout pageTitle="<%= metaTitle %>">
      <ServiceHead />
      <Card fluid>
        <Card.Content>
          <ServiceName name="<%= metaTitle %>" />
        </Card.Content>
      </Card>
    </Layout>
  );
};

export default HomePage;
