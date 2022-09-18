import Uploader from 'converters/image-converter/components/Uploader';
import ServiceHead from 'converters/image-converter/components/ServiceHead';
import Footer from 'converters/image-converter/components/Footer';
import Top from 'converters/image-converter/components/Top';
import 'semantic-ui-css/semantic.min.css';

export default function Home() {
  return (
    <div>
      <Top />
      <ServiceHead />
      <main>
        <Uploader />
      </main>
      <Footer />
    </div>
  );
}
