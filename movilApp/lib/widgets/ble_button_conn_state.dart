import 'package:flutter/material.dart';
import 'package:flutter_blue/flutter_blue.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:herons_app/screens/screens.dart';

import '../theme/theme.dart';

class BleButtonConnState extends StatelessWidget {
  const BleButtonConnState(
      {Key? key,
      required this.titleMessage,
      required this.buttonTextMessage,
      required this.buttonTrailingIcon,
      required this.deviceState})
      : super(key: key);

  final String titleMessage;
  final String buttonTextMessage;
  final IconData buttonTrailingIcon;
  final BluetoothDeviceState deviceState;

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
        style: ElevatedButton.styleFrom(
          primary: Palette.primaryDark.shade500,
          side: BorderSide(color: Palette.primaryDark.shade300, width: 2),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(20.0),
          ),
        ),
        onPressed: () {
          if (deviceState == BluetoothDeviceState.disconnected) {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => const BleDeviceList()),
            );
          } else {
            Future.delayed(const Duration(seconds: 2), () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => const StreamMonitor()),
              );
            });
          }
        },
        child: Padding(
          padding: const EdgeInsets.fromLTRB(0, 20, 0, 20),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(titleMessage,
                      style: TextStyle(
                        color: Palette.primaryLight.shade700,
                        fontSize: 16,
                        fontWeight: FontWeight.bold,
                      )),
                  const SizedBox(
                    height: 6,
                  ),
                  Text(buttonTextMessage,
                      style: TextStyle(
                          color: Palette.primaryLight.shade900, fontSize: 14)),
                ],
              ),
              FaIcon(buttonTrailingIcon,
                  size: 20, color: Palette.primaryLight.shade700)
            ],
          ),
        ));

    /* Column(
      mainAxisAlignment: MainAxisAlignment.start,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(titleMessage,
            style: TextStyle(
              color: Palette.primaryLight.shade500,
              fontSize: 14,
              fontWeight: FontWeight.bold,
            )),
        const SizedBox(
          height: 20,
        ),
        Container(
            padding: const EdgeInsets.only(top: 10, bottom: 10),
            decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(20.0),
                color: Palette.primaryDark.shade100,
                border: Border.all(color: Palette.primaryLight.shade600)),
            child: TextButton(
                onPressed: () {
                  if (deviceState == BluetoothDeviceState.disconnected) {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (context) => const BleDeviceList()),
                    );
                  }else{
                    Future.delayed(const Duration(seconds: 2), () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => const StreamMonitor()),
                      );
                    });
                    
                  }

                },
                child: Align(
                  alignment: Alignment.topCenter,
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      Text(buttonTextMessage,
                          style: TextStyle(
                              color: Palette.primaryLight.shade900,
                              fontSize: 16)), //magnifyingGlass
                      FaIcon(buttonTrailingIcon,
                          size: 16, color: Palette.primaryLight.shade700),
                    ],
                  ),
                )))
      ],
    ); */
  }
}
