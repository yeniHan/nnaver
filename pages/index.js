import loadable from '@loadable/component';
import getMainMenus from "./front-apis/apis/main/getMainMenus";
import getRecommendedPosts from "./front-apis/apis/main/getRecommendedPosts";
import getShoppingNews from "./front-apis/apis/main/getShoppingNews";
import getTrendItems from "./front-apis/apis/main/getTrendItems";
import APIS from "./@constants/APIS";
import { SWRConfig } from 'swr';

const MainPage = loadable(() => import('./Main'));

export default function Main (props) {
  return (
    <SWRConfig value={{ fallback: props?.fallback }}>
      <MainPage />
    </SWRConfig>
  );
}

export async function getServerSideProps (context) {
  const mainMenus = await getMainMenus();
  const recommendedPosts = await getRecommendedPosts();
  const shoppingNews = await getShoppingNews({ page: 1});
  const trendItems = await getTrendItems({ page: 1});
  return {
    props: {
      fallback: {
        [APIS.MAIN_MENUS]: mainMenus,
        [APIS.RECOMMENDED_POSTS]: recommendedPosts,
        [APIS.SHOPPING_NEWS]: shoppingNews,
        [APIS.TREND_ITEMS]: trendItems,
      }
    }
  };
}