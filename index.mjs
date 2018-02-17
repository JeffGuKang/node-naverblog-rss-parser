import fetch from 'node-fetch';
import xml2js from 'xml2js';

class NaverBlogParser {
  constructor(blogUrl) {
    this.url = blogUrl;
  }

  getCategoryItems(category) {
    return new Promise((resolve, reject) => {
      this.getXmlDatas()
      .then(xml => {
        xml2js.parseString(xml, (err, result) => {
          if (err != null) return reject(err);

          let items = result.rss.channel[0].item;
          let categoryItems = items.filter(item => item.category[0] == category);
          // console.log(result.rss.channel[0].item);
          resolve(categoryItems);
        });
      })
      .catch(error => reject(error))
    });
  }

  getXmlDatas() {
    return new Promise((resolve, reject) => {
      fetch(this.url)
      .then(result => {
        // console.log('getXmlDatas: ', result);
        return result.text();
      })
      .then(xml => {
        // console.log(xml);
        resolve(xml);
      })
      .catch(error => {
        reject(error);
      })
    });
  }
}

export default NaverBlogParser;
