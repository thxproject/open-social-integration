(function ($, Drupal) {
  Drupal.behaviors.thx = {
    attach: async function (context, settings) {
      checkDappBrowser().then(async (r) => {
        var networkId = await web3.eth.net.getId();
        if (networkId) {
          var currentAccount = getCurrentAccount();
          currentAccount.then(function(currentAccountAddress) {
            $('#edit-field-thx-wallet-0-value').val(currentAccountAddress);
          });
        }
      })
    }
  };
})(jQuery, Drupal);

async function getCurrentAccount() {
  var accounts = await web3.eth.getAccounts();
  if (!accounts.length) {
    return null;
  }
  else {
    return accounts[0];
  }
}

function checkDappBrowser() {
  return new Promise((resolve, reject) => {
    window.addEventListener('load', async () => {

      // Modern dapp browsers.
      if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
          // Request account access if needed
          await ethereum.enable();
          resolve('user allowed access to Metamask');
        } catch (error) {
          reject('user denied access to Metamask');
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        resolve('user always allows access to Metamask');
      }
      // Non-dapp browsers.
      else {
        reject('Non-Ethereum browser detected. You should consider trying MetaMask!');
      }

    });
  })

}
