# README

## Make sure composer.json is adding these repositories:

```
"web3js": {
    "type": "package",
    "package": {
        "name": "ethereum/web3.js",
        "version": "1.0.0-beta.35",
        "type": "drupal-library",
        "dist": {
            "url": "https://github.com/ethereum/web3.js/archive/v1.0.0-beta.35.zip",
            "type": "zip"
        }
    }
},
"goalgorilla/thx_os_integration": {
    "url": "git@bitbucket.org:goalgorilla/thx_os_integration.git",
    "type": "git"
}
```

## Make sure module is added by doing:

`composer require goalgorilla/thx_os_integration`.

## Install

1. Install modules (with dependencies) thx_os_integration
2. Add a new Ethereum server node on: `/admin/config/ethereum/network/server/add`. Fill in details, e.g. as follows:
     - http://192.168.99.100:8545
     - http://192.168.99.100:8545
     - Enabled
     - Any (*)
3. After adding the server you should be redirected to: `/admin/config/ethereum/network` automatically.
4. Make sure that on that page the created server is selected as Backend server and Frontend server.
5. Clear the cache.

### Optional:

1. Go to `/admin/config/people/accounts` as admin and disable "require email verification" and "password strength indicator".
2. Fill in the correct accounts ettings on `/admin/config/opensocial/profile-fields`.



## Usage

Prerequisites, make sure you have Metamask user (not user account 0) logged into Metamask.

1. Go to /user/register.
2. You should see a THX Wallet field pre-filled in with your current address after connecting.
3. Fill in your profile.
