import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_blue/flutter_blue.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:herons_app/bloc/bloc.dart';
import 'package:herons_app/screens/screens.dart';
import 'package:herons_app/theme/herons_pallete.dart';
import 'package:timer_count_down/timer_controller.dart';
import 'package:timer_count_down/timer_count_down.dart';
import 'package:syncfusion_flutter_charts/charts.dart';
import 'dart:convert' show utf8;
import '../models/models.dart';

class StreamMonitor extends StatefulWidget {
  const StreamMonitor({Key? key}) : super(key: key);

  @override
  State<StreamMonitor> createState() => _StreamMonitorState();
}

class _StreamMonitorState extends State<StreamMonitor> {
  Timer? timer;
  FlutterBlue flutterBlue = FlutterBlue.instance;
  BluetoothDevice? device;
  final pageController = PageController(
    initialPage: 0,
  );
  final CountdownController _controller = CountdownController(autoStart: false);
  List<ListDataModel>? chartData;
  ChartSeriesController? _chartSeriesController;
  Stream<List<int>>? readStream;
  BluetoothCharacteristic? writeStream;
  List<double>? traceDust = [];
  int checksum = 0;
  var xAxisCounter = 0;
  int _conuntDownSeconds = 0;
  List<ListDataModel> dataModelSave = [];

  bool _btnOneMin = false;
  bool _btnSixMin = false;
  bool _btnEightMin = false;
  bool _btnTenMin = false;
  bool _isReadyToStream = false;
  bool _counterButton = false;
  @override
  void initState() {
    super.initState();
    SystemChrome.setPreferredOrientations([
      DeviceOrientation.landscapeLeft,
      DeviceOrientation.landscapeRight,
    ]);
    timer = Timer.periodic(
        const Duration(seconds: 2), (Timer t) => _checkBLEConection());
    WidgetsBinding.instance.addPostFrameCallback((_) => _setConfigDevice());
  }

  Future<bool> _onWillPop() async {
    return false;
  }

  Future<void> _checkBLEConection() async {
    List<BluetoothDevice> connectedDevices =
        await FlutterBlue.instance.connectedDevices;
    if (connectedDevices.isEmpty) {
      BlocProvider.of<BlueBloc>(context).add(DisconnectedAlert());
      timer?.cancel();
    }
  }

  @override
  void dispose() {
    timer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Scaffold(
      body: WillPopScope(
          onWillPop: _onWillPop,
          child: BlocListener<BlueBloc, BlueState>(
            listener: (context, state) {
              final snakbarMessage = ScaffoldMessenger.of(context);
              if (state is Disconnected) {
                snakbarMessage.showSnackBar(SnackBar(
                    action: SnackBarAction(
                      label: "vovler a conectar",
                      textColor: Palette.primaryLight.shade900,
                      onPressed: () {
                        Navigator.pushReplacement(
                            context,
                            MaterialPageRoute(
                                builder: (context) => const BleDeviceList()));
                        SystemChrome.setPreferredOrientations([
                          DeviceOrientation.portraitUp,
                        ]);
                      },
                    ),
                    backgroundColor: Colors.red.shade500,
                    content: Text(
                      "Se ha perdido la conexión con el dispositivo",
                      style: TextStyle(color: Palette.primaryLight.shade900),
                    )));
              }
            },
            child: Stack(
              children: [
                Expanded(
                    child: StreamBuilder<List<int>>(
                  stream: readStream,
                  builder: (BuildContext context,
                      AsyncSnapshot<List<int>> snapshot) {
                    if (snapshot.hasError) {
                      return Center(
                          child: Text(
                              'Ha ocurrido un error de tipo: ${snapshot.error}'));
                    }
                    if (snapshot.connectionState == ConnectionState.waiting) {
                      return Column(
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: const [
                          Text("Esperando información del dispositivo"),
                          CircularProgressIndicator()
                        ],
                      );
                    } else if (snapshot.connectionState ==
                        ConnectionState.active) {
                      if (_isReadyToStream) {
                        var currentValue = _dataParser(snapshot.data!);
                        var splitAux = currentValue.split(",");
                        if (splitAux.length == 15) {
                          checksum += 1;
                          getSimpleData(splitAux);
                        }
                      }
                      return SfCartesianChart(
                        margin: const EdgeInsets.all(20.0),
                        primaryXAxis: CategoryAxis(
                          autoScrollingMode: AutoScrollingMode.start,
                        ),
                        series: [
                          LineSeries<ListDataModel, num>(
                            onRendererCreated:
                                (ChartSeriesController controller) {
                              _chartSeriesController = controller;
                            },
                            dataSource: chartData!,
                            xValueMapper: (ListDataModel data, _) => data.time,
                            yValueMapper: (ListDataModel data, _) => data.value,
                            animationDuration: 0,
                            width: 3,
                            animationDelay: 0,
                          ),
                        ],
                      );
                    } else {
                      return Column(
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [
                          Text("Esperando información del dispositivo",
                              style: TextStyle(
                                  fontSize: 22,
                                  color: Palette.primaryDark.shade50)),
                          const CircularProgressIndicator()
                        ],
                      );
                    }
                  },
                )),
                Align(
                  alignment: Alignment.topLeft,
                  child: ElevatedButton(
                    onPressed: () {
                      _counterButton = !_counterButton;
                      _isReadyToStream = !_isReadyToStream;
                      _controller.pause();
                      writeStream?.write(utf8.encode('T0000'));
                      readStream?.drain;
                      Navigator.pushReplacement(
                          context,
                          MaterialPageRoute(
                              builder: (context) => const HomeScreen()));
                      SystemChrome.setPreferredOrientations([
                        DeviceOrientation.portraitUp,
                      ]);
                    },
                    style:
                        ElevatedButton.styleFrom(shape: const CircleBorder()),
                    child: const FaIcon(FontAwesomeIcons.arrowLeft),
                  ),
                ),
                Align(
                  alignment: Alignment.centerRight,
                  child: GestureDetector(
                    onTap: () {
                      setState(() {
                        _counterButton = !_counterButton;
                        _isReadyToStream = !_isReadyToStream;
                        _controller.pause();
                        writeStream?.write(utf8.encode('T0000'));
                        readStream?.drain;
                        initGraph();
                        _setConfigDevice();
                      });
                    },
                    child: Container(
                      width: 120,
                      height: 50,
                      padding: const EdgeInsets.fromLTRB(10, 0, 10, 0),
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(20.0),
                          color: Palette.primaryDark),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          !_counterButton
                              ? const FaIcon(FontAwesomeIcons.play)
                              : const FaIcon(FontAwesomeIcons.pause),
                          _clockCountDown(context)
                        ],
                      ),
                    ),
                  ),
                ),
              ],
            ),
          )),
    ));
  }

  Widget _clockCountDown(BuildContext context) {
    return Countdown(
        controller: _controller,
        seconds: _conuntDownSeconds,
        build: (_, double time) => Text(
              formatDuration(time),
              style: TextStyle(
                  fontSize: 24,
                  fontFamily: "Orbitron",
                  color: Palette.primaryLight.shade900,
                  fontWeight: FontWeight.bold),
            ),
        interval: const Duration(milliseconds: 100),
        onFinished: () {
          writeStream?.write(utf8.encode('T0000'));
          readStream?.drain;
          num frecuency = (_conuntDownSeconds / (checksum * 15)) * 1000;
          Navigator.push(
            context,
            MaterialPageRoute(
                builder: (context) => ResultsMonitor(
                      dataSession: dataModelSave,
                      frecuency: frecuency,
                      sessionTime: _conuntDownSeconds,
                    )),
          );
        });
  }

  Future<void> _setConfigDevice() {
    return showDialog(
        context: context,
        barrierDismissible: false,
        builder: (BuildContext context) {
          var height = MediaQuery.of(context).size.height;
          return AlertDialog(
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(15),
              ),
              elevation: 8,
              insetPadding: EdgeInsets.zero,
              clipBehavior: Clip.antiAliasWithSaveLayer,
              backgroundColor: Colors.transparent,
              content: Container(
                width: 300,
                height: height - 100,
                padding: const EdgeInsets.only(
                    top: 20.0, left: 15.0, right: 15.0, bottom: 10.0),
                decoration: BoxDecoration(
                  color: Palette.black,
                  borderRadius: BorderRadius.circular(15),
                  border: Border.all(color: Palette.primaryDark.shade500),
                ),
                child: PageView(controller: pageController, children: [
                  Column(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      mainAxisAlignment: MainAxisAlignment.spaceAround,
                      children: [
                        Text("Iniciando el monitor",
                            style: TextStyle(
                                fontWeight: FontWeight.bold,
                                fontSize: 20,
                                color: Palette.primaryLight.shade900)),
                        FutureBuilder<bool>(
                            future: _firstPage(),
                            builder: (context, snapshot) {
                              if (snapshot.hasData) {
                                if (snapshot.data == false) {
                                  return Column(
                                    children: [
                                      Text("Preparando el Herons Device",
                                          style: TextStyle(
                                              fontSize: 23,
                                              color: Palette
                                                  .primaryLight.shade900)),
                                      const CircularProgressIndicator()
                                    ],
                                  );
                                } else {
                                  Timer(const Duration(seconds: 2), () {
                                    setState(() {
                                      pageController.jumpToPage(1);
                                    });
                                  });
                                  return Expanded(
                                    child: Column(
                                      crossAxisAlignment:
                                          CrossAxisAlignment.center,
                                      mainAxisAlignment:
                                          MainAxisAlignment.center,
                                      children: [
                                        Text("Herons Device está listo",
                                            style: TextStyle(
                                                color: Palette
                                                    .primaryLight.shade600)),
                                        const SizedBox(
                                          height: 20,
                                        ),
                                        const FaIcon(
                                          FontAwesomeIcons.check,
                                          color: Colors.greenAccent,
                                          size: 48,
                                        )
                                      ],
                                    ),
                                  );
                                }
                              }
                              return const Center();
                            }),
                      ]),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      Text("Iniciando una nueva sesión",
                          style: TextStyle(
                              fontWeight: FontWeight.bold,
                              fontSize: 23,
                              color: Palette.primaryLight.shade900)),
                      Text(
                        "Por favor, seleccione el tiempo en minutos que durará la prueba.",
                        style: TextStyle(color: Palette.primaryLight.shade700),
                      ),
                      StatefulBuilder(
                        builder: (BuildContext context, setState) {
                          return Row(
                            crossAxisAlignment: CrossAxisAlignment.center,
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Expanded(
                                child: ElevatedButton(
                                    onPressed: () {
                                      setState(() {
                                        _conuntDownSeconds = 60;
                                        _btnOneMin = !_btnOneMin;
                                        _btnEightMin =
                                            _btnSixMin = _btnTenMin = false;
                                      });
                                    },
                                    style: ElevatedButton.styleFrom(
                                      shape: const CircleBorder(),
                                      primary: _btnOneMin
                                          ? Palette.primaryDark.shade500
                                          : Palette.primaryDark,
                                      onPrimary: Palette.primaryDark,
                                    ),
                                    child: Container(
                                      width: 50,
                                      height: 50,
                                      alignment: Alignment.center,
                                      decoration: const BoxDecoration(
                                          shape: BoxShape.circle),
                                      child: const Text(
                                        "1",
                                        style: TextStyle(color: Colors.white),
                                      ),
                                    )),
                              ),
                              Expanded(
                                child: ElevatedButton(
                                    onPressed: () {
                                      setState(() {
                                        _conuntDownSeconds = 360;
                                        _btnSixMin = !_btnSixMin;
                                        _btnEightMin =
                                            _btnOneMin = _btnTenMin = false;
                                      });
                                    },
                                    style: ElevatedButton.styleFrom(
                                      shape: const CircleBorder(),
                                      primary: _btnSixMin
                                          ? Palette.primaryDark.shade500
                                          : Palette.primaryDark,
                                      onPrimary: Palette.primaryDark,
                                    ),
                                    child: Container(
                                      width: 50,
                                      height: 50,
                                      alignment: Alignment.center,
                                      decoration: const BoxDecoration(
                                          shape: BoxShape.circle),
                                      child: const Text(
                                        "6",
                                        style: TextStyle(color: Colors.white),
                                      ),
                                    )),
                              ),
                              Expanded(
                                child: ElevatedButton(
                                    onPressed: () {
                                      setState(() {
                                        _conuntDownSeconds = 480;
                                        _btnEightMin = !_btnEightMin;
                                        _btnSixMin =
                                            _btnOneMin = _btnTenMin = false;
                                      });
                                    },
                                    style: ElevatedButton.styleFrom(
                                      shape: const CircleBorder(),
                                      primary: _btnEightMin
                                          ? Palette.primaryDark.shade500
                                          : Palette.primaryDark,
                                      onPrimary: Palette.primaryDark,
                                    ),
                                    child: Container(
                                      width: 50,
                                      height: 50,
                                      alignment: Alignment.center,
                                      decoration: const BoxDecoration(
                                          shape: BoxShape.circle),
                                      child: const Text(
                                        "8",
                                        style: TextStyle(color: Colors.white),
                                      ),
                                    )),
                              ),
                              Expanded(
                                child: ElevatedButton(
                                    onPressed: () {
                                      setState(() {
                                        _conuntDownSeconds = 600;
                                        _btnTenMin = !_btnTenMin;
                                        _btnSixMin =
                                            _btnOneMin = _btnEightMin = false;
                                      });
                                    },
                                    style: ElevatedButton.styleFrom(
                                      shape: const CircleBorder(),
                                      primary: _btnTenMin
                                          ? Palette.primaryDark.shade500
                                          : Palette.primaryDark,
                                      onPrimary: Palette.primaryDark,
                                    ),
                                    child: Container(
                                      width: 50,
                                      height: 50,
                                      alignment: Alignment.center,
                                      decoration: const BoxDecoration(
                                          shape: BoxShape.circle),
                                      child: const Text(
                                        "10",
                                        style: TextStyle(color: Colors.white),
                                      ),
                                    )),
                              ),
                            ],
                          );
                        },
                      ),
                      ElevatedButton(
                          onPressed: () {
                            if (_btnOneMin ||
                                _btnSixMin ||
                                _btnEightMin ||
                                _btnTenMin) {
                              setState(() {
                                pageController.jumpToPage(2);
                              });
                            }
                          },
                          style: ElevatedButton.styleFrom(
                              primary: Palette.primaryDark.shade300,
                              textStyle: const TextStyle(
                                  color: Palette.primaryDark, fontSize: 15),
                              shadowColor: Palette.primaryDark.shade400,
                              side: BorderSide(
                                  color: Palette.primaryDark.shade400,
                                  width: 2.0)),
                          child: const Text("Continuar"))
                    ],
                  ),
                  Column(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      mainAxisAlignment: MainAxisAlignment.spaceAround,
                      children: [
                        Text("¡Aviso Importante!",
                            style: TextStyle(
                                fontWeight: FontWeight.bold,
                                fontSize: 23,
                                color: Palette.primaryLight.shade900)),
                        Text(
                            "Por favor, intente mantenerse lo más quieto posible durante el exámen para mejores resultados.",
                            style: TextStyle(
                                color: Palette.primaryLight.shade700)),
                        ElevatedButton(
                            onPressed: () {
                              setState(() {
                                _isReadyToStream = true;
                                _counterButton = !_counterButton;
                                Navigator.pop(context);
                                _controller.start();
                                writeStream?.write(utf8.encode('T1000'));
                              });
                            },
                            style: ElevatedButton.styleFrom(
                                primary: Palette.primaryDark.shade300,
                                textStyle: const TextStyle(
                                    color: Palette.primaryDark, fontSize: 15),
                                shadowColor: Palette.primaryDark.shade400,
                                side: BorderSide(
                                    color: Palette.primaryDark.shade400,
                                    width: 2.0)),
                            child: const Text("Empezar"))
                      ]),
                ]),
              ));
        });
  }

  void setDiscoverBlueDeviceServices(BluetoothDevice device) async {
    const String serviceUuid = "4fafc201-1fb5-459e-8fcc-c5c9c331914b";
    const String characteristicUuid = "beb5483e-36e1-4688-b7f5-ea07361b26a8";
    List<BluetoothService> services = await device.discoverServices();
    for (var service in services) {
      if (service.uuid.toString() == serviceUuid) {
        for (var characteristic in service.characteristics) {
          if (characteristic.uuid.toString() == characteristicUuid) {
            try {
              await device.mtu.first;
              await device.requestMtu(512);
              await characteristic.setNotifyValue(true);
              readStream = characteristic.value;
              writeStream = characteristic;
            } catch (e) {
              print("error: $e");
            }
          }
        }
      }
    }
  }

  Future<bool> _firstPage() async {
    List<BluetoothDevice> connectedDevices = await flutterBlue.connectedDevices;
    for (var item in connectedDevices) {
      if (item.name == "THealtBLE") {
        final BluetoothDevice device = item;
        setDiscoverBlueDeviceServices(device);
        initGraph();
        return true;
      }
    }
    return false;
  }

  Future<void> initGraph() async {
    setState(() {
      _btnOneMin = false;
      _btnSixMin = false;
      _btnEightMin = false;
      _btnTenMin = false;
      checksum = 0;
      xAxisCounter = 0;
      _conuntDownSeconds = 0;
    });
    chartData = [];
    if (chartData!.isNotEmpty) {
      chartData!.removeAt(chartData!.length - 1);
      _chartSeriesController?.updateDataSource(
        updatedDataIndexes: <int>[chartData!.length - 1],
        removedDataIndexes: <int>[chartData!.length - 1],
      );
    }
    dataModelSave.clear();
    getFirst();
  }

  Future getFirst() async {
    for (var i = 0; i < 250; i++) {
      chartData!.insert(i, ListDataModel(i, 0));
    }
  }

  String _dataParser(List<int> dataFromDevice) {
    return utf8.decode(dataFromDevice);
  }

  String formatDuration(double totalSeconds) {
    final duration =
        "${Duration(seconds: totalSeconds.toInt()).toString().split(".")[0].split(":")[1]}:${Duration(seconds: totalSeconds.toInt()).toString().split(".")[0].split(":")[2]}";
    return duration;
  }

  void getSimpleData(List<String> splitAux) {
    for (var item in splitAux) {
      chartData!.removeAt(0);
      chartData!.add(ListDataModel(xAxisCounter++, num.parse(item)));
      dataModelSave.add(ListDataModel(xAxisCounter, num.parse(item)));
    }
    _chartSeriesController?.updateDataSource(
      addedDataIndexes: <int>[chartData!.length - 1],
      removedDataIndexes: <int>[0],
    );
  }
}
