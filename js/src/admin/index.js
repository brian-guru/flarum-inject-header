import app from 'flarum/admin/app';
import JsSettingsPage from './JsSettingsPage';

app.initializers.add('briantran-inject-header', (app) => {
  app.extensionData.for('briantran-inject-header').registerPage(JsSettingsPage);
});
