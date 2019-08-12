const puppeteer = require('puppeteer');
const db = require('../../models/index');
const delay = require('delay');
const DELAY = 500;

module.exports = async(admin) => {
    /**
     * http://www1.mbrace.or.jp/od2/K/pindex.html
     * のデータを取得する
     */
    const browser = await puppeteer.launch({
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox'
        ]
    });
    const results = [];
    const page = await browser.newPage();
    const date_start = "20190101";
    const date_end = "20190101";
    for(var i=date_start-0;i<=date_end;i++){
      date = i.toString();
      await (async()=>{
        await delay(DELAY); // スクレイピングする際にはアクセス間隔を1秒あける.
        await page.goto('http://www.boatrace-db.net/race/index/date/' + date); // 表示したいURL
        var raceTitles = await page.evaluate(async()=>{
          const raceTitles = [];
          document.querySelectorAll('.series_name').forEach(v=>{
            if(!v.children[0]) return;  // タイトル行は無視
            var titleObj = {
              name: v.innerText,
              days: v.nextElementSibling.innerText,
              grade: v.previousElementSibling.innerText,
              url: v.children[0].href,
              dates: v.children[0].href.match(/\/date\/(\d+)/)[1],
              place_id: v.children[0].href.match(/\/pid\/(\d+)/)[1],
            };
            raceTitles.push(titleObj);
          });
          return raceTitles;
        });
        console.log(JSON.stringify(raceTitles));
        raceTitles.forEach(async v=>{
          await db.race.create(v);
        })
      })();
    }

    browser.close();
};

module.exports();
