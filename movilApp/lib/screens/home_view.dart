import 'dart:async';

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_blue/flutter_blue.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:herons_app/bloc/bloc.dart';
import 'package:herons_app/widgets/profile_dialog.dart';
import 'package:herons_app/screens/screens.dart';
import 'package:herons_app/theme/herons_pallete.dart';
import 'package:herons_app/widgets/widgets.dart';

import '../widgets/ble_button_conn_state.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  Timer? timer;
  final Stream<QuerySnapshot> _sessionsStream =
      FirebaseFirestore.instance.collection('sessions').limit(7).snapshots();
  final CollectionReference _userMetaData =
      FirebaseFirestore.instance.collection("users");
  BluetoothDevice? device;
  FlutterBlue flutterBlue = FlutterBlue.instance;
  double buttonDeviceHeight = 60.0;
  bool isBLEConnected = false;

  @override
  void initState() {
    super.initState();
    _checkBLEConection();
    timer = Timer.periodic(
        const Duration(seconds: 2), (Timer t) => _checkBLEConection());
    SystemChrome.setPreferredOrientations([
      DeviceOrientation.portraitUp,
    ]);
  }

  Future<void> _checkBLEConection() async {
    List<BluetoothDevice> connectedDevices =
        await FlutterBlue.instance.connectedDevices;
    if (connectedDevices.isEmpty) {
      print("disconn");
      BlocProvider.of<BlueBloc>(context).add(DisconnectedAlert());
      /*timer?.cancel(); */
    } else {
      BlocProvider.of<BlueBloc>(context).add(ConnectedAlert());
    }
  }

  @override
  void dispose() {
    //timer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        appBar: PreferredSize(
            preferredSize: const Size.fromHeight(68.0),
            child: Padding(
              padding: const EdgeInsets.all(8.0),
              child: Row(
                children: [
                  ElevatedButton(
                      style:
                          ElevatedButton.styleFrom(primary: Colors.transparent),
                      onPressed: () {
                        SystemChannels.platform
                            .invokeMethod('SystemNavigator.pop');
                      },
                      child: const FaIcon(
                        FontAwesomeIcons.xmark,
                        color: Palette.primaryDark,
                      )),
                  Expanded(
                      child: Text("Herons HRV".toUpperCase(),
                          textAlign: TextAlign.center,
                          style: const TextStyle(
                              fontWeight: FontWeight.bold,
                              color: Palette.primaryDark,
                              fontSize: 30))),
                  SizedBox(
                      width: 50,
                      height: 50,
                      child: StreamBuilder<User?>(
                          stream: FirebaseAuth.instance.authStateChanges(),
                          builder: (context, snapshot) {
                            if (snapshot.connectionState !=
                                ConnectionState.active) {
                              return const Center(
                                  child: CircularProgressIndicator());
                            }
                            final user = snapshot.data;
                            if (user == null) {
                              return ElevatedButton(
                                  style: ElevatedButton.styleFrom(
                                      primary: Colors.transparent,
                                      elevation: 0),
                                  onPressed: () {
                                    Navigator.of(context).pushAndRemoveUntil(
                                      MaterialPageRoute(
                                          builder: (context) =>
                                              const LoginView()),
                                      (route) => false,
                                    );
                                  },
                                  child: const FaIcon(
                                    FontAwesomeIcons.circleUser,
                                    color: Colors.red,
                                    size: 30,
                                  ));
                            } else {
                              return FutureBuilder<DocumentSnapshot>(
                                future: _userMetaData.doc(user.uid).get(),
                                builder: (BuildContext context,
                                    AsyncSnapshot<DocumentSnapshot> snapshot) {
                                  if (snapshot.hasError) {
                                    return const FaIcon(
                                      FontAwesomeIcons.circleUser,
                                      color: Colors.red,
                                      size: 25,
                                    );
                                  }

                                  if (snapshot.hasData &&
                                      !snapshot.data!.exists) {
                                    return const FaIcon(
                                      FontAwesomeIcons.circleUser,
                                      color: Colors.red,
                                      size: 25,
                                    );
                                  }

                                  if (snapshot.connectionState ==
                                      ConnectionState.done) {
                                    Map<String, dynamic> data = snapshot.data!
                                        .data() as Map<String, dynamic>;
                                    return _userProfilePick(data);
                                  }

                                  return const CircularProgressIndicator(
                                    color: Palette.primaryDark,
                                  );
                                },
                              );
                            }
                          }
                          /* , */
                          )),
                ],
              ),
            )),
        body: Padding(
          padding: const EdgeInsets.only(right: 20, left: 20, top: 30),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Column(
                mainAxisAlignment: MainAxisAlignment.start,
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisSize: MainAxisSize.max,
                children: [
                  Text("Dispositivo Herons",
                      style: TextStyle(
                        color: Palette.primaryLight.shade500,
                        fontSize: 22,
                        fontWeight: FontWeight.bold,
                      )),
                  const SizedBox(height: 20),
                  deviceButtonConnection(),
                ],
              ),
              const SizedBox(height: 10),
              listHistorySessions(),
            ],
          ),
        ),
      ),
    );
  }

  Widget deviceButtonConnection() {
    _checkBLEConection();
    return BlocBuilder<BlueBloc, BlueState>(builder: (context, state) {
      if (state is Disconnected) {
        return const BleButtonConnState(
            titleMessage: "No está conectado a ningun dispositivo",
            buttonTextMessage: "Presione para conectar",
            buttonTrailingIcon: FontAwesomeIcons.arrowRight,
            deviceState: BluetoothDeviceState.disconnected);
      } else if (state is Connected) {
        return const BleButtonConnState(
            titleMessage: "Conectado a un dispositivo",
            buttonTextMessage: "Iniciar una session",
            buttonTrailingIcon: FontAwesomeIcons.circlePlay,
            deviceState: BluetoothDeviceState.connected);
      }
      return const Center(
        child: CircularProgressIndicator(),
      );
    });
  }

  Widget listHistorySessions() {
    return Column(
        mainAxisAlignment: MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisSize: MainAxisSize.max,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Text("Últimas sesiones",
                  style: TextStyle(
                    color: Palette.primaryLight.shade500,
                    fontSize: 22,
                    fontWeight: FontWeight.bold,
                  )),
              Directionality(
                  textDirection: TextDirection.rtl,
                  child: TextButton.icon(
                      onPressed: () {},
                      label: Text("ver completo",
                          style: TextStyle(
                            color: Palette.primaryLight.shade400,
                          )),
                      icon: FaIcon(
                        FontAwesomeIcons.arrowRightLong,
                        size: 14,
                        color: Palette.primaryLight.shade400,
                      ))),
            ],
          ),
          SizedBox(
            height: 200,
            child: StreamBuilder<QuerySnapshot>(
              stream: _sessionsStream,
              builder: (BuildContext context,
                  AsyncSnapshot<QuerySnapshot> snapshot) {
                if (snapshot.hasError) {
                  return const Text('Something went wrong');
                }

                if (snapshot.connectionState == ConnectionState.waiting) {
                  return const Align(
                    alignment: Alignment.center,
                    child: CircularProgressIndicator(),
                  );
                }

                return ListView(
                    scrollDirection: Axis.horizontal,
                    shrinkWrap: true,
                    children:
                        snapshot.data!.docs.map((DocumentSnapshot document) {
                      Map<String, dynamic> data =
                          document.data()! as Map<String, dynamic>;
                      return SingleSessionCard(
                        sessionTitle: data["patient"]["name"],
                        sessionDate: data["date"],
                        sessionTime: data["session_time"],
                        sessionAge: data["patient"]["age"],
                      );
                    }).toList());
              },
            ),
          ),
        ]);
  }

  Widget _userProfilePick(Map<String, dynamic> data) {
    return GestureDetector(
      onTap: () {
        showDialog(
            context: context,
            builder: (BuildContext context) =>
                ProfileDialog(userMetadata: data));
      },
      child: CircleAvatar(
        backgroundColor: Palette.primaryLight.shade200,
        radius: 28,
        child: CircleAvatar(
            radius: 23, backgroundImage: NetworkImage("${data['photo']}")),
      ),
    );
  }
}
