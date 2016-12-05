exports.config = {
specs: ['../test/e2e/**/*.js'],
onPrepare: function() {
browser.driver.get('http://localhost:3000/log');
browser.driver.findElement(by.id('entrar')).click();
browser.driver.findElement(by.id('login_field'))
.sendKeys('marcosapx@gmail.com');
browser.driver.findElement(by.id('password'))
.sendKeys('habbo91210');
browser.driver.findElement(by.name('commit')).click();
}
};
