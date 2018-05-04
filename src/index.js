'use strict';

export default class CloudWatchAlarmClassifier {
  static dangerMessages = ['ALARM'];

  static warningMessages = ['INSUFFICIENT_DATA'];

  static _dangerMessagesRegexp = CloudWatchAlarmClassifier._messages2regexp(
    CloudWatchAlarmClassifier.dangerMessages,
  );
  static _warningMessagesRegexp = CloudWatchAlarmClassifier._messages2regexp(
    CloudWatchAlarmClassifier.warningMessages,
  );

  static isDangerMessage(message) {
    return CloudWatchAlarmClassifier._dangerMessagesRegexp.test(message);
  }

  static isWarningMessage(message) {
    return CloudWatchAlarmClassifier._warningMessagesRegexp.test(message);
  }

  static _messages2regexp(messages) {
    // XXX this function cannot handle the regexp special charactors!
    return new RegExp('(?:' + messages.join('|') + ')');
  }
}
