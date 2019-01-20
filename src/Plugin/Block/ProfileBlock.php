<?php

namespace Drupal\thx_os_integration\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'ProfileBlock' block.
 *
 * @Block(
 *  id = "profile_block",
 *  admin_label = @Translation("Profile block"),
 * )
 */
class ProfileBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $build['content']['#markup'] = '
       <div class="card__block">
          <p align="center"><img src="/modules/contrib/thx_os_integration/assets/img/thx_logo.svg" alt="THX LOGO" width="25%" ></p>

          <p>You will receive <strong>200 THX</strong> in wallet <strong><span id="thx-wallet-address"></span></strong> by <strong>completing your profile</strong></p>
      </div>';

    return $build;
  }

}
