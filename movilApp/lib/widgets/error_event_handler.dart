import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../bloc/bloc.dart';

class ErrorEventHandler extends StatefulWidget {
  final SettingsState blocState;
  const ErrorEventHandler({Key? key, required this.blocState})
      : super(key: key);

  @override
  State<ErrorEventHandler> createState() => _ErrorEventHandlerState();
}

class _ErrorEventHandlerState extends State<ErrorEventHandler> {
  double bottomAnimator = 100.0;

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    String text = !widget.blocState.isGpsEnabled
        ? "Para continuar, por favor habilite el GPS."
        : !widget.blocState.isGpsPermissionGranted
            ? "Nesecitamos los permisos para usar su ubicaición."
            : "Para continuar, por favor habilite el Bluetooth";
    if (!widget.blocState.isAllGranted && mounted) {
      setState(() {
        bottomAnimator = 20.0;
      });
    }
    return AnimatedPositioned(
      duration: const Duration(milliseconds: 400),
      curve: Curves.fastOutSlowIn,
      bottom: bottomAnimator,
      width: MediaQuery.of(context).size.width,
      child: Align(
        alignment: Alignment.center,
        child: Container(
          width: MediaQuery.of(context).size.width,
          height: !widget.blocState.isGpsPermissionGranted ? 120 : 50,
          decoration: BoxDecoration(
            color: Colors.red.shade700,
            borderRadius: const BorderRadius.only(
                topLeft: Radius.circular(10.0),
                topRight: Radius.circular(10.0)),
          ),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Text(
                text,
                style: const TextStyle(color: Colors.white),
              ),
              !widget.blocState.isGpsPermissionGranted
                  ? ElevatedButton(
                      onPressed: () {
                        final gpsAccessDialog =
                            BlocProvider.of<SettingsBloc>(context);
                        gpsAccessDialog.checkGpsAccess();
                      },
                      child: const Text("Conceder"))
                  : Container(
                      height: 1,
                    )
            ],
          ),
        ),
      ),
    );
  }
}
