
import puppeteer from 'puppeteer';
(async () => {
  try {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({
      headless: 'new',
      executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      args: ['--no-sandbox']
    });
    console.log('Browser launched successfully!');
    const page = await browser.newPage();
    console.log('New page created!');
    await browser.close();
    console.log('Browser closed!');
  } catch (e) {
    console.error('Error:', e);
  }
})();
