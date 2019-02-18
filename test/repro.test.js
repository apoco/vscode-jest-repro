const Nightmare = require('nightmare');

describe('This test', () => {
  it('works under vscode-jest', async () => {
    await new Nightmare()
      .goto('https://github.com/')
      .wait('.octicon')
      .end();
  });
});
