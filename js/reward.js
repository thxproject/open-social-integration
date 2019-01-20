(function ($, Drupal) {
  Drupal.behaviors.reward = {
    attach: async function (context, settings) {
      checkDappBrowser().then(async (r) => {
        $("form#profile-profile-edit-form button.form-submit").once().click(async function(f) {
          var networkId = await web3.eth.net.getId();
          if (networkId) {
            var pool = new web3.eth.Contract(
                settings.thx_os_integration.contracts.RewardPool.jsonInterface.abi,
                settings.thx_os_integration.contracts.RewardPool.jsonInterface.networks[networkId].address
            );
            var currentAccount = getCurrentAccount();
            await currentAccount.then(async function (currentAccountAddress) {
              var reward
              await pool.methods.add('complete_profile', 200).send({from: currentAccountAddress}).then((response) => {
                reward = response;
              })
            });
          }

        });
      });

    }
  };
})(jQuery, Drupal);
