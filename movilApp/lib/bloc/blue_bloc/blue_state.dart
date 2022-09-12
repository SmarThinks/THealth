part of 'blue_bloc.dart';

abstract class BlueState extends Equatable {}

class Waiting extends BlueState {
  @override
  List<Object?> get props => [];
}

class Connected extends BlueState {
  @override
  List<Object?> get props => [];
}

// This is the initial state of the bloc. When the user is not authenticated the state is changed to Unauthenticated.
class Disconnected extends BlueState {
  @override
  List<Object?> get props => [];
}

// If any error occurs the state is changed to AuthError.
class Error extends BlueState {
  final String error;

  Error(this.error);
  @override
  List<Object?> get props => [error];
}
