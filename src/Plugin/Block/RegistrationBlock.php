<?php

namespace Drupal\thx_os_integration\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'RegistrationBlock' block.
 *
 * @Block(
 *  id = "registration_block",
 *  admin_label = @Translation("Registration block"),
 * )
 */
class RegistrationBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $build['content']['#markup'] = '
       <div class="card__block">
          <p align="center"><img src="/modules/contrib/thx_os_integration/assets/img/thx_logo.svg" alt="THX LOGO" width="25%" ></p>

          <p>Your THX wallet <strong><span id="thx-wallet-address"></span></strong> will connect automatically after creating your account.</p>
      </div>';

    return $build;
  }

}
