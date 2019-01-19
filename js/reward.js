(function ($, Drupal) {
  Drupal.behaviors.reward = {
    attach: function (context, settings) {
      var addressUser = '0xBDA4B4e6f27139F53bdC31f1232Ce425BD4FBed1';

      var token = new web3.eth.Contract(settings.thx_os_integration.contracts.THXToken.jsonInterface.abi, settings.thx_os_integration.contracts.THXToken.address);
      var pool = new web3.eth.Contract(settings.thx_os_integration.contracts.RewardPool.jsonInterface.abi, settings.thx_os_integration.contracts.RewardPool.address);

      var account_balance
      token.methods.balanceOf(addressUser).call().then((response) => {
        account_balance = response;
      })

      var reward
      pool.methods.add('complete_profile', 200).send({from: '0xfD21b9c95f0a4b472e8594d870FF79bb5a23903F'}).then((response) => {
        reward = response;
      })

    }
  };
})(jQuery, Drupal);
