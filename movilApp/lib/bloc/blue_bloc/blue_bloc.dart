import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter_blue/flutter_blue.dart';
import 'package:herons_app/data/repositories/repositories.dart';

part 'blue_event.dart';
part 'blue_state.dart';

class BlueBloc extends Bloc<BlueEvent, BlueState> {
  final BlueRepository blueRepository;
  BlueBloc({required this.blueRepository}) : super(Disconnected()) {
    on<ConnectRequest>((event, emit) async {
      emit(Waiting());
      try {
        await blueRepository.blueConnected(device: event.device);
        emit(Connected());
      } catch (e) {
        emit(Error(e.toString()));
        emit(Disconnected());
      }
    });
    on<DisconnectRequest>((event, emit) async {
      emit(Waiting());
      await blueRepository.blueDisconnected(device: event.device);
      emit(Disconnected());
    });
    on<DisconnectedAlert>((event, emit) async {
      emit(Waiting());
      emit(Disconnected());
    });
    on<ConnectedAlert>((event, emit) async {
      emit(Waiting());
      emit(Connected());
    });
  }
}
