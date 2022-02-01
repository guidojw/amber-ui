<<<<<<< HEAD
=======
import Application from 'alpha-amber/app';
import config from 'alpha-amber/config/environment';
import * as QUnit from 'qunit';
>>>>>>> b1f5f42 (v3.20.2...v4.1.1)
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';
import Application from 'alpha-amber/app';

setApplication(Application.create({ autoboot: false }));

setup(QUnit.assert);

start();
