type Data = {
  id: string;
  date: string;
  words: string;
}

class RecentSearchedWords {
  data: Data[] = [
    {
      id: '1',
      date: '8.14',
      words:'북극곰',
    },
    {
      id: '2',
      date: '8.14',
      words: '코로나 19',
    },
    {
      id: '3',
      date: '8.15',
      words: 'MSG 워너비',
    },
    {
      id: '4',
      date: '8.15',
      words: '주식',
    }
  ];

  delete (id, all = false) {
    if (all) this.data = [];
    this.data = this.data?.filter((v) => v?.id !== id);
  };

  get () {
    return this.data;
  }
}

const dtO = new RecentSearchedWords();

export default dtO;
