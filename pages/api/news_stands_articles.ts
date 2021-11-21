import nsO from './dummyDataModels/NewsStandSetting';
import METHODS from '../@constants/METHODS';
import { totalArticles, totalMedias } from './dummyData/newsStands';
import { MEDIA_SORTERS } from '../@constants/MEDIA_SORTERS';

export default function handler (req, res) {

  if (req.method === METHODS.GET) {
    const sorter = req?.query?.sorter;
    const subscribedMedias = nsO.getSubscribedMedias();

    if (sorter === MEDIA_SORTERS.SUBSCRIBED) {
      const subscribedMediaIds = subscribedMedias?.map((v) => v?.id);
      const articles = totalArticles?.filter((v) => subscribedMediaIds.indexOf(v?.media) >= 0);

      res.status(200).json({
        data: {
          articles,
          medias: subscribedMedias,
        }
      });
    }

    else {
      res.status(200).json({
        data: {
          articles: totalArticles,
          medias: nsO.get(),
        }
      });
    }
  }
}