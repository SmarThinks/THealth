part of 'settings_bloc.dart';

abstract class SettingsEvent extends Equatable {
  const SettingsEvent();

  @override
  List<Object> get props => [];
}

class PermissionsEvent extends SettingsEvent {
  final bool isGpsEnable;
  final bool isGpsPermissionsGranted;
  final bool isBLUEnable;
  const PermissionsEvent(
      {required this.isGpsEnable, required this.isGpsPermissionsGranted, required this.isBLUEnable});
}
