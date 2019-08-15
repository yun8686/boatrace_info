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
        headless: true,
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
//        raceTitles.forEach(async v=>{
//          await db.race.create(v);
//        });

        // raceDetail
        for(var v of raceTitles){
          var dates = v.dates;
          var place_id = v.place_id;
          console.log(place_id);
          const races = [];
          for(var i=1;i<=12;i++){
            var rno = ("00"+i).slice(-2);
            await delay(DELAY); // スクレイピングする際にはアクセス間隔を1秒あける.
            await page.goto(`http://www.boatrace-db.net/race/detail/date/${dates}/pid/${place_id}/rno/${rno}/`); // 表示したいURL
            const racers = await page.evaluate(async()=>{
              var data = {};
              var result = document.querySelector('#detail_result');
              data.result = [];
              result.querySelectorAll('tr').forEach((v,w)=>{
                data.result.push({
                  rank: w+1,
                  waku: v.children[1].textContent,
                  racer: v.children[2].querySelector('a').href.match(/regno\/(\d+)/)[1],
                  time: v.children[3].textContent,
                  kimarite: v.children[4].textContent,
                });
              });
              var sinnyu = document.querySelector('#table_slit_st');
              data.sinnyu = [];
              sinnyu.querySelectorAll('span').forEach((v,w)=>{
                data.sinnyu.push({
                  rank: w+1,
                  waku: v.id.slice(-1),
                  time: v.innerHTML,
                });
              });
              var env = document.querySelector('#detail_env');
              data.env = {
                weather: env.querySelectorAll('tr')[1].querySelectorAll('td')[0].innerHTML,
                wind_vec: env.querySelectorAll('tr')[1].querySelectorAll('td')[1].innerHTML,
                wind_vec_type: env.querySelectorAll('tr')[2].querySelectorAll('td')[1].innerHTML,
                wind_pow: env.querySelectorAll('tr')[1].querySelectorAll('td')[2].innerHTML,
                wave_pow: env.querySelectorAll('tr')[1].querySelectorAll('td')[3].innerHTML,
              };
              return data;
            });
            races.push(racers);
          }
          v.racers = races;
          break;
        }
        console.log(JSON.stringify(raceTitles.map(v=>v.racers)));
      })();
    }

    browser.close();
};

module.exports();
