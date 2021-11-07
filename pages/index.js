import loadable from '@loadable/component';

const MainPage = loadable(() => import('./Main'));

export default function Main () {
  return (
    <MainPage />
  );
}
