class AudioItem {
  constructor(title, artist) {
    this._title = title;
    this._artist = artist;
    this.isLiked = false;
  }

  like() {
    this.isLiked = !this.isLiked;
  }
}

class Song extends AudioItem {
  constructor(title, artist, releaseYear) {
    super(title, artist);
    this._releaseYear = releaseYear;
  }

  getSongInfo() {
    return `${this._artist} - ${this._title} (${this._releaseYear})`
  }
}

class PodcastEpisode extends AudioItem {
  constructor(title, artist, guest, duration) {
    super(title, artist);
    this._guest = guest;
    this._duration = duration;
  }

  getEpisodeInfo() {
    return `${this._artist}. "${this._title}" - ${this._guest} (${this._getFormattedDuration()} сек.)`;
  }

  _getFormattedDuration() {
    const minutes = Math.floor(this._duration / 60); // целое количество минут
    const seconds = this._duration % 60; // остаток от деления на 60
    return `${minutes}:${seconds > 9 ? seconds : '0' + seconds}`;
  }
}

const song1 = new Song("Tendinitis", "Jason Richardson");
const song2 = new Song("All I Want", "A Day To Remember");
const episode1 = new PodcastEpisode("Одинокий пират", "ЧКГ PODCAST", "Кирилл Сиэтлов", 4987);
const episode2 = new PodcastEpisode("Один день", "Заварили бизнес", null, 1915);

const list = [song1, episode1, song2, episode2];

function getAudioInfo(audioList) {
  audioList.forEach((audioItem) => {
    if (audioItem.getSongInfo) {
      console.log(audioItem);
    } else if (audioItem.getEpisodeInfo) {
      console.log(audioItem);
    }
  });
}

getAudioInfo(list);