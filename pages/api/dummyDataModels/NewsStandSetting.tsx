import { totalMedias } from '../dummyData/newsStands';

class NewsStandSetting {
    mediasSubscription = [...totalMedias]

    get () {
      return this.mediasSubscription;
    }

    getSubscribedMedias () {
      return this.mediasSubscription?.filter((v) => v?.isSubscribed);
    }

    set (newSubscribedMedias) {
      this.mediasSubscription = newSubscribedMedias;
    }

    setIsSubscribed (mediaId, isSubscribed) {
      this.mediasSubscription = this.mediasSubscription.map((v) => {
        if (v?.id === mediaId) return { ... v, isSubscribed };
        return v;
      });
    }
}

const dO = new NewsStandSetting();

export default dO;
