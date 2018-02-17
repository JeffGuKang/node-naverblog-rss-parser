네이버 블로그 rss parser

## Install
```
npm install naverblog-parser --save
```

## Example
```js
import RssParser from 'naverblog-parser';

const blog = new RssParser('https://rss.blog.naver.com/summer_ha0319.xml');

blog.getCategoryItems('공지사항') // Category Name
.then(items => {
  console.log(items);
  console.log(items[0].description);
})
.catch(error => console.log(error));
```
