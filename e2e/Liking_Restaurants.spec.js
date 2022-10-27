Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('liking one Restaurant', ({ I }) => {
  I.amOnPage('/');
  
  I.waitForElement('.post-item__title', 10);
  I.seeElement('.post-item__title a');
  I.click(locate('.post-item__title a').first());

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.post-item');
});
