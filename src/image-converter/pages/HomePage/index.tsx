import Uploader from 'image-converter/components/Uploader';
import ServiceHead from 'image-converter/components/ServiceHead';
import Footer from 'image-converter/components/Footer';
import Top from 'image-converter/components/Top';
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
