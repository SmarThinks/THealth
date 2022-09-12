import 'dart:async';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_blue/flutter_blue.dart';
import 'package:geolocator/geolocator.dart';
import 'package:permission_handler/permission_handler.dart';
import 'package:equatable/equatable.dart';

part 'settings_event.dart';
part 'settings_state.dart';

class SettingsBloc extends Bloc<SettingsEvent, SettingsState> {
  FlutterBlue bleInstance = FlutterBlue.instance;
  StreamSubscription? gpsServiceSuscription;
  StreamSubscription? bleStreamSuscription;
  StreamSubscription? bleConnStreamSuscription;

  SettingsBloc()
      : super(const SettingsState(
          isGpsEnabled: false,
          isGpsPermissionGranted: false,
          isBLUEnable: false,
        )) {
    on<PermissionsEvent>((event, emit) => emit(state.copyWith(
        isGpsEnabled: event.isGpsEnable,
        isGpsPermissionGranted: event.isGpsPermissionsGranted,
        isBLUEnable: event.isBLUEnable)));
    _init();
  }

  Future<void> _init() async {
    final permissionsInitStatus = await Future.wait(
        [_checkGpsStatus(), _checkGpsPermissions(), _checkBLEStatus()]);

    add(PermissionsEvent(
        isGpsEnable: permissionsInitStatus[0],
        isGpsPermissionsGranted: permissionsInitStatus[1],
        isBLUEnable: permissionsInitStatus[2]));
  }

  Future<bool> _checkGpsStatus() async {
    final isEnable = await Geolocator.isLocationServiceEnabled();
    gpsServiceSuscription = Geolocator.getServiceStatusStream().listen((event) {
      final enableEvent = (event.index == 1) ? true : false;
      add(PermissionsEvent(
          isGpsEnable: enableEvent,
          isGpsPermissionsGranted: state.isGpsPermissionGranted,
          isBLUEnable: state.isBLUEnable));
    });
    return isEnable;
  }

  Future<void> checkGpsAccess() async {
    final status = await Permission.location.request();
    switch (status) {
      case PermissionStatus.granted:
        add(PermissionsEvent(
            isGpsEnable: state.isGpsEnabled,
            isGpsPermissionsGranted: true,
            isBLUEnable: state.isBLUEnable));
        break;
      case PermissionStatus.denied:
      case PermissionStatus.restricted:
      case PermissionStatus.limited:
      case PermissionStatus.permanentlyDenied:
        add(PermissionsEvent(
            isGpsEnable: state.isGpsEnabled,
            isGpsPermissionsGranted: false,
            isBLUEnable: state.isBLUEnable));
        openAppSettings();
    }
  }

  Future<bool> _checkBLEStatus() async {
    final isEnable = await bleInstance.isAvailable;
    bleStreamSuscription = bleInstance.state.listen((event) {
      final enableEvent = (event == BluetoothState.on) ? true : false;
      add(PermissionsEvent(
          isGpsEnable: state.isGpsEnabled,
          isGpsPermissionsGranted: state.isGpsPermissionGranted,
          isBLUEnable: enableEvent));
    });
    return isEnable;
  }

  Future<bool> _checkGpsPermissions() async {
    final isGranted = await Permission.location.isGranted;
    return isGranted;
  }

  @override
  Future<void> close() {
    gpsServiceSuscription?.cancel();
    return super.close();
  }
}
