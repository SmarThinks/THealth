part of 'blue_bloc.dart';

abstract class BlueEvent extends Equatable {
  const BlueEvent();

  @override
  List<Object> get props => [];
}

class ConnectRequest extends BlueEvent {
  final BluetoothDevice device;

  const ConnectRequest(this.device);
}

class DisconnectRequest extends BlueEvent {
  final BluetoothDevice device;

  const DisconnectRequest(this.device);
}

class ConnectedAlert extends BlueEvent {}

class DisconnectedAlert extends BlueEvent {}
