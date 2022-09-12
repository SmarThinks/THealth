import 'dart:async';
import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_blue/flutter_blue.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:herons_app/screens/screens.dart';

import '../bloc/bloc.dart';
import '../theme/theme.dart';

class BleDeviceList extends StatefulWidget {
  const BleDeviceList({Key? key}) : super(key: key);

  @override
  State<BleDeviceList> createState() => _BleDeviceListState();
}

class _BleDeviceListState extends State<BleDeviceList> {
  FlutterBlue blueInstance = FlutterBlue.instance;

  @override
  void initState() {
    super.initState();
    SystemChrome.setPreferredOrientations([
      DeviceOrientation.portraitUp,
    ]);
    blueInstance.startScan(timeout: const Duration(seconds: 4));
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Scaffold(
      appBar: AppBar(
        title: const Text("Dispositivos cercanos",
            style: TextStyle(
                fontWeight: FontWeight.w900,
                color: Palette.primaryDark,
                fontSize: 18)),
        leading: IconButton(
          icon: FaIcon(FontAwesomeIcons.arrowLeftLong,
              size: 16, color: Palette.primaryDark.shade300),
          onPressed: () => Navigator.of(context).pop(),
        ),
        elevation: 8.0,
      ),
      body: BlocListener<BlueBloc, BlueState>(
        listener: (context, state) {
          if (state is Connected) {
            sleep(const Duration(seconds: 3));
            Navigator.pushReplacement(context,
                MaterialPageRoute(builder: (context) => const StreamMonitor()));
          }
          if (state is Error) {
            ScaffoldMessenger.of(context)
                .showSnackBar(SnackBar(content: Text(state.toString())));
          }
        },
        child: RefreshIndicator(
          onRefresh: () => FlutterBlue.instance
              .startScan(timeout: const Duration(seconds: 4)),
          child: SingleChildScrollView(
            padding: const EdgeInsets.fromLTRB(10, 30, 10, 2),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Text(
                  "Dispositivos disponibles",
                  style: TextStyle(
                    color: Palette.primaryLight.shade500,
                    fontSize: 14,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                StreamBuilder<List<ScanResult>>(
                  stream: FlutterBlue.instance.scanResults,
                  initialData: const [],
                  builder: (BuildContext context, AsyncSnapshot snapshot) {
                    var devices = snapshot.data;
                    return ListView.separated(
                      itemCount: devices.length,
                      shrinkWrap: true,
                      separatorBuilder: (context, index) {
                        return Divider(
                          color: Palette.primaryDark.shade400,
                        );
                      },
                      itemBuilder: (context, index) {
                        final device = devices[index];
                        return ListTile(
                            onTap: () {
                              onConnectionBlueDevice(device);
                            },
                            title: device.device.name == 'THealtBLE'
                                ? Text(device.device.name,
                                    style: TextStyle(
                                        fontSize: 20,
                                        fontWeight: FontWeight.bold,
                                        color: Palette.primaryDark.shade50))
                                : Text(
                                    device.device.name,
                                    style: const TextStyle(
                                        color: Palette.primaryDark),
                                  ),
                            subtitle: Text(device.device.id.toString(),
                                style: TextStyle(
                                    color: Palette.primaryLight.shade500)),
                            trailing: Text(device.rssi.toString(),
                                style: TextStyle(
                                    color: Palette.primaryLight.shade300)));
                      },
                    );
                  },
                ),
              ],
            ),
          ),
        ),
      ),
      floatingActionButton: StreamBuilder<bool>(
        stream: FlutterBlue.instance.isScanning,
        initialData: false,
        builder: (c, snapshot) {
          if (snapshot.data!) {
            return FloatingActionButton(
              onPressed: () => FlutterBlue.instance.stopScan(),
              backgroundColor: Colors.red,
              child: const Icon(Icons.stop),
            );
          } else {
            return FloatingActionButton(
                backgroundColor: Palette.primaryDark,
                child: const FaIcon(FontAwesomeIcons.arrowsRotate, size: 18),
                onPressed: () => FlutterBlue.instance
                    .startScan(timeout: const Duration(seconds: 4)));
          }
        },
      ),
    ));
  }

  Future<void> onConnectionBlueDevice(device) async {
    final snakbarMessage = ScaffoldMessenger.of(context);
    if (device.device.name != "THealtBLE") {
      snakbarMessage.showSnackBar(SnackBar(
          backgroundColor: Colors.red.shade500,
          content: Text(
            "Este no es un dispositivo Herons, intente nuevamente",
            style: TextStyle(color: Palette.primaryLight.shade900),
          )));
    } else {
      final BluetoothDevice blueDevice = device.device;
      blueDevice.disconnect();
      BlocProvider.of<BlueBloc>(context).add(
        ConnectRequest(blueDevice),
      );
      snakbarMessage.showSnackBar(SnackBar(
          backgroundColor: Colors.green.shade500,
          content: Text(
            "Conexión establecida, iniciando una nueva sesión",
            style: TextStyle(color: Palette.primaryLight.shade900),
          )));
    }
  }
}
