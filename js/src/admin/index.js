import app from 'flarum/admin/app';
import JsSettingsPage from './JsSettingsPage';

app.initializers.add('brian-inject-header', (app) => {
  app.extensionData.for('brian-inject-header').registerPage(JsSettingsPage);
});
