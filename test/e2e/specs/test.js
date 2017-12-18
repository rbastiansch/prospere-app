// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'check SignIn component': (browser) => {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.login')
      .assert.containsText('h2', 'Sign In Prospere')
      .assert.elementPresent('input[name="email"]')
      .assert.elementPresent('input[name="password"]')
      .assert.elementPresent('button[name="submit"]');
  },
  'login into app': (browser) => {
    browser
      .setValue('input[name="email"]', 'teste@teste.com')
      .setValue('input[name="password"]', 'teste123')
      .click('button[name="submit"]')
      .pause(5000);
  },
  'check NavBar component': (browser) => {
    browser
      .assert.elementPresent('.nav-bar')
      .assert.elementCount('a', 2)
      .assert.containsText('#home', 'Home')
      .assert.containsText('#logout', 'Logout');
  },
  'check Principal component': (browser) => {
    browser
      .assert.elementPresent('.principal')
      .assert.elementPresent('button[name="new_contact"]');
  },
  'check NewContact component': (browser) => {
    browser
      .click('button[name="new_contact"]')
      .assert.elementPresent('.new-contact')
      .assert.containsText('.navigation', 'Go back')
      .assert.containsText('h2', 'New Contact')
      .assert.elementCount('input', 3)
      .assert.elementCount('textarea', 1)
      .assert.elementCount('button', 1);
  },
  'add new contact': (browser) => {
    browser
      .setValue('input[name="name"]', 'joaoneves')
      .setValue('input[name="email"]', 'joaoneves@gmail.com')
      .setValue('input[name="phone"]', '11922222222')
      .setValue('textarea', 'add a new contact')
      .click('button[name="submit"]');
  },
  "check if it's ContactList component": (browser) => {
    browser
      .pause(5000)
      .assert.elementPresent('.contact-list');
  },
  'click last contact added': (browser) => {
    browser.elements('css selector', '.contact-list .item', (result) => {
      const lastElement = result.value.length;
      const button = `.contact-list .item:nth-of-type(${lastElement}) .info button`;

      browser
        .assert.elementCount(button, 1)
        .click(button)
        .pause(3000);
    });
  },
  'check ContactItem component and info': (browser) => {
    browser
      .assert.elementPresent('.contact-item')
      .assert.containsText('.navigation', 'Go back')
      .assert.elementPresent('.main-info h2')
      .assert.elementPresent('.secundary-info .item')
      .assert.containsText('.main-info h2', 'joaoneves')
      .assert.elementCount('.secundary-info .item', 3);
  },
  'click logout': (browser) => {
    browser
      .click('#logout');
  },
  'expected Login page': (browser) => {
    browser
      .assert.containsText('.login h2', 'Sign In Prospere')
      .end();
  },
};
