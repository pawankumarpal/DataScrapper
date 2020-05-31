//importing lib puppeteer
const puppeteer=require('puppeteer');
//give s us capability to use await keyword
async function scrapeProduct(url){
    //launch browser 
    const browser=await puppeteer.launch();
    const page =await browser.newPage()
    await page.goto(url);

    //for Cover Page
    //.x is a pupeteer selector byb xpath
    const[el]=await page.$x('//*[@id="ebooksImgBlkFront"]')
    //pull the source attribute out of elememt
    const src=await el.getProperty('src');
    //to pull out string
    const image=await src.jsonValue();

    //for Book Title
    //.x is a pupeteer selector byb xpath
    const[el2]=await page.$x('/html/body/div[2]/div[2]/div[4]/div[8]/div[1]/div/h1/span[1]')
    //pull the source attribute out of elememt
    const txt=await el2.getProperty('txtContent');
    //to pull out string
    const title=await txt.jsonValue(); 

    //for Price
    //.x is a pupeteer selector byb xpath
    const[el3]=await page.$x('/html/body/div[2]/div[2]/div[4]/div[6]/div[1]/div/div/div/table/tbody/tr[4]/td[2]')
    //pull the source attribute out of elememt
    const txt2=await el3.getProperty('txtContent');
    //to pull out string
    const price=await txt2.jsonValue();


    console.log({image,title,price});

    //for closing
    browser.close();


}

scrapeProduct('https://www.amazon.com/Black-Swan-Second-Improbable-Incerto-ebook/dp/B00139XTG4/ref=sr_1_1?crid=1CBDCP4JHL41U&dchild=1&keywords=the+black+swan&qid=1590930849&sprefix=the+black+sw%2Caps%2C343&sr=8-1')