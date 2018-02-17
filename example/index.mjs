import RssParser from 'node-naverblog-rss-parser';

const blog = new RssParser('https://rss.blog.naver.com/summer_ha0319.xml');

blog.getCategoryItems('공지사항')
.then(items => {
  // console.log(items);
  console.log(items[0].description);
})
.catch(error => console.log(error));
