class SessionModel {
  final Map<String, dynamic> patient;
  final int date;
  final int sessionTime;
  final String sessionTitle;
  final List<dynamic> crudeData;
  final List<dynamic> rrsData;
  final List<dynamic> metrics;
  SessionModel(this.patient, this.date, this.sessionTime, this.sessionTitle,
      this.crudeData, this.rrsData, this.metrics);
}
