import './@styles/normalize.css';
import './@styles/customReset.scss';
import './@styles/global.scss';
import './@styles/infinite-react-carousel.css';
import 'swiper/css';

function App ({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}

export default App;
