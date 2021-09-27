class NewsStandSetting {
    subscribedMedias = ['HG', 'MG'];

    get () {
      return this.subscribedMedias;
    }

    set (newSubscribedMedias) {
      this.subscribedMedias = newSubscribedMedias;
    }

    add (media) {
      this.subscribedMedias.push(media);
    }

    delete (media) {
      this.subscribedMedias = this.subscribedMedias.filter((v) => v !== media);
    };
}

const dO = new NewsStandSetting();

export default dO;
