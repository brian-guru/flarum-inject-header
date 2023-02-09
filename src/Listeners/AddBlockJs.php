<?php

/*
 * This file is part of brian/flarum-inject-header.
 *
 * Copyright (c) Guru Consulting.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Brian\InjectHeader\Listeners;

use Flarum\Frontend\Document;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\Guest;
use FoF\Analytics\Piwik\PaqPushList;
use Illuminate\Support\Str;
use Psr\Http\Message\ServerRequestInterface;

class AddBlockJs
{
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function __invoke(Document $document, ServerRequestInterface $request)
    {
        $this->injectJs($document);
    }

    private function injectJs(Document $document)
    {
        $jsCode = $this->settings->get('brian-inject-header.jsCode');
        if ($jsCode) {
            // Add script has been configured.
            $document->head[] = $jsCode;
        }
    }
}
