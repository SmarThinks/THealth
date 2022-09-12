part of 'settings_bloc.dart';

class SettingsState extends Equatable {
  final bool isGpsEnabled;
  final bool isGpsPermissionGranted;
  final bool isBLUEnable;

  bool get isAllGranted =>
      isGpsEnabled && isGpsPermissionGranted && isBLUEnable;

  const SettingsState(
      {required this.isGpsEnabled,
      required this.isGpsPermissionGranted,
      required this.isBLUEnable});

  SettingsState copyWith(
          {bool? isGpsEnabled,
          bool? isGpsPermissionGranted,
          bool? isBLUEnable}) =>
      SettingsState(
          isGpsEnabled: isGpsEnabled ?? this.isGpsEnabled,
          isGpsPermissionGranted: isGpsPermissionGranted ?? this.isGpsPermissionGranted,
          isBLUEnable: isBLUEnable ?? this.isBLUEnable);

  @override
  List<Object> get props => [isGpsEnabled, isGpsPermissionGranted, isBLUEnable];

  @override
  String toString() =>
      '{isGpsEnabled: $isGpsEnabled, isGpsPermissionGranted: $isGpsPermissionGranted, isBLUEnabled: $isBLUEnable}';
}
