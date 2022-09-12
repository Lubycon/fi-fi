import Uploader from 'image-converter/components/files/uploader';
import ServiceHead from 'image-converter/components/ServiceHead';
import 'semantic-ui-css/semantic.min.css';

export default function Home() {
  return (
    <div>
      <ServiceHead />
      <main>
        <Uploader />
      </main>
    </div>
  );
}
