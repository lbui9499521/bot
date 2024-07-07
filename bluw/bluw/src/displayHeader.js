const colors = require('colors');

function displayHeader() {
  process.stdout.write('\x1Bc');
  console.log(colors.cyan('========================================'));
  console.log(colors.cyan('=       bluwhale      ='));
  console.log(colors.cyan('=     Created by builuong     ='));
  console.log(colors.cyan('=    https://t.me/luuongtb   ='));
  console.log(colors.cyan('========================================'));
  console.log();
}

module.exports = displayHeader;
