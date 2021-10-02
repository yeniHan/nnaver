import nsO from './dummyDataModels/NewsStandSetting';
import METHODS from '../@constants/METHODS';
import { articles, medias } from './dummyData/newsStands';
import { MEDIA_SORTERS } from '../@constants/MEDIA_SORTERS';

export default function handler (req, res) {

  if (req.method === METHODS.GET) {
    const sorter = req?.query?.sorter;

    if (sorter === MEDIA_SORTERS.SUBSCRIBED) {
      const subscribedMediaIds = nsO.get();
      const subscribedMedias = medias?.filter((v) => subscribedMediaIds.indexOf(v?.id) >= 0);
      const subscribedArticles = articles?.filter((v) => subscribedMediaIds?.indexOf(v?.media) >= 0);

      res.status(200).json({
        data: {
          articles: subscribedArticles,
          medias: subscribedMedias,
        }
      });
    }

    else {
      res.status(200).json({
        data: {
          articles,
          medias,
        }
      });
    }
  }
}