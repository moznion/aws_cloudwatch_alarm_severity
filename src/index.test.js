'use strict';

import test from 'ava';
import CloudWatchAlarmClassifier from './index.js';

test('should the given string be a danger message', t => {
  t.true(CloudWatchAlarmClassifier.isDangerMessage('This is ALARM event'));
});

test('should the given string be a warning message', t => {
  t.true(CloudWatchAlarmClassifier.isWarningMessage('This is INSUFFICIENT_DATA event'));
});

test('should the given string not be any high severity message', t => {
  const msg = 'This is OK event';

  t.false(CloudWatchAlarmClassifier.isDangerMessage(msg));
  t.false(CloudWatchAlarmClassifier.isWarningMessage(msg));
});
