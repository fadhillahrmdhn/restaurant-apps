Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('liking one Restaurant', ({ I }) => {
  I.amOnPage('/');
  
  I.waitForElement('.post-item', 10);
  I.seeElement('.post-item h2');
  I.click(locate('.post-item h2').first());

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.post-item');
});
