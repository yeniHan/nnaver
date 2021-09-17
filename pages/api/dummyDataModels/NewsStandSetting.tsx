class NewsStandSetting {
    subscribedMedias = ['HG', 'MG'];

    get () {
      return this.subscribedMedias;
    }

    set (newSubscribedMedias) {
      this.subscribedMedias = newSubscribedMedias;
    }

    add (mediaName) {
      this.subscribedMedias.push(mediaName);
    }

    delete (mediaName) {
      this.subscribedMedias = this.subscribedMedias.filter((v) => v !== mediaName);
    };
}

const dO = new NewsStandSetting();

export default dO;
