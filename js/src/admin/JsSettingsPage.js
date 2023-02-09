import app from 'flarum/admin/app';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';

const settingsPrefix = 'brian-inject-header.';

export default class JsSettingsPage extends ExtensionPage {
  content() {
    return [
      m('.container', [
        m('.JsSettingsPage', [
          m('h3', app.translator.trans('brian-inject-header.admin.popup.section.injectHeader')),
          m('.Form-group', [
            m('label', app.translator.trans('brian-inject-header.admin.popup.field.jsCode')),
                m('input.FormControl', {
                  bidi: this.setting(settingsPrefix + 'jsCode'),
                  placeholder: 'Copy and paste the js code here',
                }),
          ]),
          this.submitButton(),
        ]),
      ]),
    ];
  }
}
