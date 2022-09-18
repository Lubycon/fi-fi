import Uploader from 'converters/image-converter/components/Uploader';
import ServiceHead from 'converters/image-converter/components/ServiceHead';
import Footer from 'converters/image-converter/components/Footer';
import Top from 'converters/image-converter/components/Top';
import Layout from 'common/components/Layout';

export default function Home() {
  return (
    <Layout pageTitle="이미티 컨버터">
      <Top />
      <ServiceHead />
      <main>
        <Uploader />
      </main>
      <Footer />
    </Layout>
  );
}
