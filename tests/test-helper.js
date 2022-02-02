<<<<<<< HEAD
=======
import Application from 'alpha-amber/app';
import config from 'alpha-amber/config/environment';
import * as QUnit from 'qunit';
>>>>>>> 09c1698 (v3.20.2...v3.28.5)
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';
import Application from 'alpha-amber/app';

setApplication(Application.create({ autoboot: false }));

setup(QUnit.assert);

start();
