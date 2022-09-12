import 'dart:io';

import 'package:easy_folder_picker/FolderPicker.dart';
import 'package:file_picker/file_picker.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_blue/flutter_blue.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:herons_app/database/database.dart';
import 'package:herons_app/helpers/helpers.dart';
import 'package:herons_app/models/models.dart';
import 'package:permission_handler/permission_handler.dart';
import 'package:excel/excel.dart';

import '../theme/theme.dart';
import '../widgets/widgets.dart';
import 'screens.dart';

class ResultsMonitor extends StatefulWidget {
  final List<ListDataModel> dataSession;
  final num frecuency;
  final int sessionTime;
  const ResultsMonitor(
      {Key? key,
      required this.dataSession,
      required this.frecuency,
      required this.sessionTime})
      : super(key: key);

  @override
  State<ResultsMonitor> createState() => _ResultsMonitorState();
}

enum ConsciousnessTypes { alerta, lec }

enum CovidTypes { negativo, pocoProbable, sospecha, positivo }

class _ResultsMonitorState extends State<ResultsMonitor> {
  Directory? selectedDirectory;
  final FlutterBlue flutterBlue = FlutterBlue.instance;
  final _formKey = GlobalKey<FormState>();
  final pageController = PageController(
    initialPage: 0,
  );
  ConsciousnessTypes? _consciousnessSelection = ConsciousnessTypes.alerta;
  CovidTypes? _covidSelection = CovidTypes.negativo;
  final _namePatienTextController = TextEditingController();
  final _agePatienTextController = TextEditingController();
  final _breathFrecuencyPatienTextController = TextEditingController();
  final _oTwoSaturationPatienTextController = TextEditingController();
  final _systolicBloodPressurePatienTextController = TextEditingController();
  final _pulsePatienTextController = TextEditingController();
  final _temperaturePatienTextController = TextEditingController();
  bool isOnExport = false,
      isOnCloud = false,
      isOnCloudPressed = false,
      isReadyToCalculs = false,
      isFormCompleted = false,
      _hypercRespiratoryFailureRadioButton = false,
      _onSupplementalOTwoRadioButton = false;
  String _inputNameField = '',
      _breathFrecuencyField = '',
      _hypercRespiratoryFailureField = "",
      _onSupplementalOTwoField = "",
      _oTwoSaturationField = "",
      _systolicBloodPressureField = "",
      _consciousnessField = "",
      _temperatureField = "",
      _covidField = "";
  int _inputAgeField = 0;
  late SessionModel sessionModel;
  final RRPeaksDetection rrFunctions = RRPeaksDetection();
  final RRMetricsCalculs _metricsCalculs = RRMetricsCalculs();
  final FrecuencyMetricsCalculs _frecuencyMetricsCalculs =
      FrecuencyMetricsCalculs();
  double bottomSheetHeightController = 400.0;
  late List<dynamic> lowPassSolution = [],
      highPassSolution = [],
      derivatePassSolution = [],
      powPassSolution = [],
      windowSolution = [],
      normalizeSolution = [],
      peaksSolution = [],
      rrPeaksSolution = [],
      timeArr = [],
      secondsTime = [],
      heartRate = [];
  num promRR = 0.0;
  Future<String>? _calculation;
  List<String> dataMetricsList = [
    "Promedio RR [ ms ]",
    "Promedio F.C [ LPM ]",
    "F.C Mínima [ LPM ]",
    "F.C Máxima [ LPM ]",
    "SDNN [ ms ]",
    "RMSSD [ ms ]",
    "NN50",
    "pNN50 [ % ]",
    "SD1 [ ms ]",
    "SD2 [ ms ]",
    "Pico B.F [ Hz ]",
    "Pico A.F [ Hz ]",
    "Potencia B.F [ ms² ]",
    "Potencia A.F [ m/s² ]",
    "Potencia Logarítmica B.F",
    "Potencia Logarítmica A.F",
    "% B.F [ % ]",
    "% A.F [ % ]",
    "Tasa de Potencia"
  ];
  List<String> dataList = [
    'Valor Crudo',
    'Filtro Derivativo',
    'Filtro Potenica',
    'Ventana de muestreo',
    'Picos RR',
    'Detector RR'
  ];
  List<String> patientList = [
    "Nombre",
    "Edad",
    "Frecuencia respiratoria",
    "Falla respiratoria hipercápnica",
    "Oxígeno suplementario",
    "Saturación de oxígeno",
    "Presión sanguinea sistólica",
    "Nivel de conciencia",
    "Temepratura",
    "Paciente Covid",
  ];
  @override
  void initState() {
    super.initState();
    WidgetsFlutterBinding.ensureInitialized();
    SystemChrome.setPreferredOrientations([
      DeviceOrientation.portraitUp,
    ]);
    Future.delayed(const Duration(seconds: 5), () {
      _calculation = preparateMetricsVars();
      setState(() {
        isReadyToCalculs = true;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Scaffold(
            appBar: AppBar(
              iconTheme: IconThemeData(
                color: Palette.primaryDark.shade200,
              ),
              leading: IconButton(
                  onPressed: () {
                    Navigator.of(context).push(MaterialPageRoute(
                        builder: (context) => const HomeScreen()));
                  },
                  icon: FaIcon(
                    FontAwesomeIcons.leftLong,
                    color: Palette.primaryDark.shade500,
                  )),
              title: const Text("Resultados de la sesión",
                  style: TextStyle(
                      fontWeight: FontWeight.w900,
                      color: Palette.primaryDark,
                      fontSize: 22)),
            ),
            body: Stack(children: [
              isReadyToCalculs
                  ? SingleChildScrollView(
                      child: FutureBuilder<String>(
                      future: _calculation,
                      builder: (BuildContext context,
                          AsyncSnapshot<String> snapshot) {
                        Widget children;
                        if (snapshot.hasData) {
                          children = SingleChildScrollView(
                            child: Padding(
                              padding:
                                  const EdgeInsets.only(top: 65, bottom: 70),
                              child: Column(
                                children: [
                                  StaggeredGrid.count(
                                    crossAxisCount: 4,
                                    mainAxisSpacing: 4,
                                    crossAxisSpacing: 1,
                                    children: [
                                      StaggeredGridTile.count(
                                        crossAxisCellCount: 2,
                                        mainAxisCellCount: 1,
                                        child: MetricCard(
                                            titleMetric: "Promedio RR",
                                            unitMetric: "ms",
                                            valueMetric:
                                                _metricsCalculs.getPromRR()),
                                      ),
                                      StaggeredGridTile.count(
                                        crossAxisCellCount: 2,
                                        mainAxisCellCount: 1,
                                        child: MetricCard(
                                            titleMetric: "Promedio F.C",
                                            unitMetric: "LPM",
                                            valueMetric:
                                                _metricsCalculs.getPromFC()),
                                      ),
                                      StaggeredGridTile.count(
                                        crossAxisCellCount: 2,
                                        mainAxisCellCount: 1,
                                        child: MetricCard(
                                            titleMetric: "F.C Mínima",
                                            unitMetric: "LPM",
                                            valueMetric:
                                                _metricsCalculs.getFCMin()),
                                      ),
                                      StaggeredGridTile.count(
                                        crossAxisCellCount: 2,
                                        mainAxisCellCount: 1,
                                        child: MetricCard(
                                            titleMetric: "F.C Máxima",
                                            unitMetric: "LPM",
                                            valueMetric:
                                                _metricsCalculs.getFCMax()),
                                      ),
                                      StaggeredGridTile.count(
                                        crossAxisCellCount: 2,
                                        mainAxisCellCount: 1,
                                        child: MetricCard(
                                            titleMetric: "SDNN",
                                            unitMetric: "ms",
                                            valueMetric:
                                                _metricsCalculs.getSDNN()),
                                      ),
                                      StaggeredGridTile.count(
                                        crossAxisCellCount: 2,
                                        mainAxisCellCount: 1,
                                        child: MetricCard(
                                            titleMetric: "RMSSD",
                                            unitMetric: "ms",
                                            valueMetric:
                                                _metricsCalculs.getRMSSD()),
                                      ),
                                      StaggeredGridTile.count(
                                        crossAxisCellCount: 2,
                                        mainAxisCellCount: 1,
                                        child: MetricCard(
                                            titleMetric: "NN50",
                                            unitMetric: "",
                                            valueMetric:
                                                _metricsCalculs.getnnFifty()),
                                      ),
                                      StaggeredGridTile.count(
                                        crossAxisCellCount: 2,
                                        mainAxisCellCount: 1,
                                        child: MetricCard(
                                            titleMetric: "pNN50",
                                            unitMetric: "%",
                                            valueMetric:
                                                _metricsCalculs.getpNNFifty()),
                                      ),
                                      StaggeredGridTile.count(
                                        crossAxisCellCount: 2,
                                        mainAxisCellCount: 1,
                                        child: MetricCard(
                                            titleMetric: "SD1",
                                            unitMetric: "ms",
                                            valueMetric:
                                                _metricsCalculs.getSDOne()),
                                      ),
                                      StaggeredGridTile.count(
                                        crossAxisCellCount: 2,
                                        mainAxisCellCount: 1,
                                        child: MetricCard(
                                            titleMetric: "SD2",
                                            unitMetric: "ms",
                                            valueMetric:
                                                _metricsCalculs.getSDTwo()),
                                      ),
                                      StaggeredGridTile.count(
                                        crossAxisCellCount: 2,
                                        mainAxisCellCount: 1,
                                        child: MetricCard(
                                            titleMetric: "Pico B.F.",
                                            unitMetric: "Hz",
                                            valueMetric:
                                                _frecuencyMetricsCalculs
                                                    .getMaxPeackLF()),
                                      ),
                                      StaggeredGridTile.count(
                                        crossAxisCellCount: 2,
                                        mainAxisCellCount: 1,
                                        child: MetricCard(
                                            titleMetric: "Pico A.F",
                                            unitMetric: "Hz",
                                            valueMetric:
                                                _frecuencyMetricsCalculs
                                                    .getMaxPeackHF()),
                                      ),
                                      StaggeredGridTile.count(
                                        crossAxisCellCount: 2,
                                        mainAxisCellCount: 1,
                                        child: MetricCard(
                                            titleMetric: "Potencia B.F",
                                            unitMetric: "ms²",
                                            valueMetric:
                                                _frecuencyMetricsCalculs
                                                    .getTrapzLFPow()),
                                      ),
                                      StaggeredGridTile.count(
                                          crossAxisCellCount: 2,
                                          mainAxisCellCount: 1,
                                          child: MetricCard(
                                              titleMetric: "Potencia A.F",
                                              unitMetric: "ms²",
                                              valueMetric:
                                                  _frecuencyMetricsCalculs
                                                      .getTrapzHFPow())),
                                      StaggeredGridTile.count(
                                        crossAxisCellCount: 2,
                                        mainAxisCellCount: 1,
                                        child: MetricCard(
                                            titleMetric:
                                                "Potencia Logarítmica B.F",
                                            unitMetric: "",
                                            valueMetric:
                                                _frecuencyMetricsCalculs
                                                    .getNaturalLLog()),
                                      ),
                                      StaggeredGridTile.count(
                                          crossAxisCellCount: 2,
                                          mainAxisCellCount: 1,
                                          child: MetricCard(
                                              titleMetric:
                                                  "Potencia Logarítmica A.F",
                                              unitMetric: "",
                                              valueMetric:
                                                  _frecuencyMetricsCalculs
                                                      .getNaturalHLog())),
                                      StaggeredGridTile.count(
                                        crossAxisCellCount: 2,
                                        mainAxisCellCount: 1,
                                        child: MetricCard(
                                            titleMetric: "% B.F",
                                            unitMetric: "%",
                                            valueMetric:
                                                _frecuencyMetricsCalculs
                                                    .getPowPorcentNuL()),
                                      ),
                                      StaggeredGridTile.count(
                                        crossAxisCellCount: 2,
                                        mainAxisCellCount: 1,
                                        child: MetricCard(
                                            titleMetric: "% A.F",
                                            unitMetric: "%",
                                            valueMetric:
                                                _frecuencyMetricsCalculs
                                                    .getPowPorcentNuH()),
                                      ),
                                      StaggeredGridTile.count(
                                        crossAxisCellCount: 4,
                                        mainAxisCellCount: 1,
                                        child: MetricCard(
                                            titleMetric: "Tasa de Potenica",
                                            unitMetric: "",
                                            valueMetric:
                                                _frecuencyMetricsCalculs
                                                    .getPowRate()),
                                      ),
                                    ],
                                  ),
                                  const SizedBox(
                                    height: 20,
                                  ),
                                ],
                              ),
                            ),
                          );
                        } else if (snapshot.hasError) {
                          children = Column(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                Icon(
                                  Icons.error_outline,
                                  color: Colors.red.withOpacity(0.5),
                                  size: 80,
                                ),
                                const SizedBox(
                                  height: 15,
                                ),
                                const Padding(
                                  padding: EdgeInsets.only(left: 20, right: 20),
                                  child: Text(
                                      "No se ha podido calcular las metricas debido a un error interno, por favor intenta nuevamente",
                                      textAlign: TextAlign.center),
                                ),
                                const SizedBox(
                                  height: 15,
                                ),
                                ElevatedButton(
                                    style: ButtonStyle(
                                        backgroundColor:
                                            MaterialStateProperty.all(
                                                Palette.primaryDark.shade500),
                                        shape: MaterialStateProperty.all<
                                                RoundedRectangleBorder>(
                                            RoundedRectangleBorder(
                                                borderRadius:
                                                    BorderRadius.circular(20.0),
                                                side: const BorderSide(
                                                    color:
                                                        Palette.primaryDark)))),
                                    onPressed: () {
                                      Navigator.of(context).push(
                                          MaterialPageRoute(
                                              builder: (context) =>
                                                  const HomeScreen()));
                                    },
                                    child: const Text("Nueva sesion"))
                              ]);
                        } else {
                          children = Column(
                            crossAxisAlignment: CrossAxisAlignment.center,
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: const [
                              Center(
                                child: Text("Calculando metricas...",
                                    style: TextStyle(
                                        fontWeight: FontWeight.bold,
                                        fontSize: 23)),
                              ),
                              SizedBox(
                                height: 10,
                              ),
                              Center(
                                child: Text("esto puede tardar un poco",
                                    style: TextStyle(
                                        fontWeight: FontWeight.bold,
                                        fontSize: 15)),
                              ),
                              SizedBox(
                                height: 20,
                              ),
                              CircularProgressIndicator(
                                backgroundColor: Colors.blueGrey,
                                color: Colors.blue,
                              )
                            ],
                          );
                        }
                        return SizedBox(
                          height: MediaQuery.of(context).size.height,
                          child: Center(
                            child: children,
                          ),
                        );
                      },
                    ))
                  : SizedBox(
                      width: MediaQuery.of(context).size.width,
                      height: MediaQuery.of(context).size.height,
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: const [
                          Center(
                            child: Text("Calculando metricas...",
                                style: TextStyle(
                                    fontWeight: FontWeight.bold, fontSize: 23)),
                          ),
                          SizedBox(
                            height: 10,
                          ),
                          Center(
                            child: Text("esto puede tardar un poco",
                                style: TextStyle(
                                    fontWeight: FontWeight.bold, fontSize: 15)),
                          ),
                          SizedBox(
                            height: 20,
                          ),
                          CircularProgressIndicator(
                            backgroundColor: Colors.blueGrey,
                            color: Colors.blue,
                          )
                        ],
                      ),
                    ),
              Positioned(
                  top: 0,
                  width: MediaQuery.of(context).size.width,
                  child: Container(
                    color: Palette.primaryDark.shade900,
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceAround,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        Expanded(
                          child: Padding(
                            padding: const EdgeInsets.only(left: 5, right: 5),
                            child: TextButton(
                                style: ButtonStyle(
                                    backgroundColor: isOnCloud
                                        ? MaterialStateProperty.all(
                                            Colors.green)
                                        : MaterialStateProperty.all(
                                            Palette.primaryDark.shade500),
                                    shape: MaterialStateProperty.all<
                                            RoundedRectangleBorder>(
                                        RoundedRectangleBorder(
                                            borderRadius:
                                                BorderRadius.circular(20.0),
                                            side: BorderSide(
                                                color: isOnCloud
                                                    ? Colors.greenAccent
                                                    : Palette.primaryDark)))),
                                onPressed: () {
                                  if (!isFormCompleted && !isOnCloud) {
                                    showFormDialog(context, "cloud");
                                  } else if (!isOnCloud) {
                                    setSessionCloud();
                                  }
                                },
                                child: !isOnCloud
                                    ? Text(
                                        "Guardar",
                                        style: TextStyle(
                                            color:
                                                Palette.primaryLight.shade700),
                                      )
                                    : Text(
                                        "Guardado",
                                        style: TextStyle(
                                            color:
                                                Palette.primaryLight.shade700),
                                      )),
                          ),
                        ),
                        Expanded(
                          child: Padding(
                            padding: const EdgeInsets.only(left: 5, right: 5),
                            child: TextButton(
                                style: ButtonStyle(
                                    backgroundColor: isOnExport
                                        ? MaterialStateProperty.all(
                                            Colors.green)
                                        : MaterialStateProperty.all(
                                            Palette.primaryDark.shade500),
                                    shape: MaterialStateProperty.all<
                                            RoundedRectangleBorder>(
                                        RoundedRectangleBorder(
                                            borderRadius:
                                                BorderRadius.circular(20.0),
                                            side: BorderSide(
                                                color: isOnExport
                                                    ? Colors.greenAccent
                                                    : Palette.primaryDark)))),
                                onPressed: () async {
                                  if (!isFormCompleted) {
                                    showFormDialog(context, "export");
                                  } else if (isOnExport) {
                                    selectedDirectory =
                                        await _pickDirectory(context);
                                    if (selectedDirectory != null) {
                                      setSessionExport();
                                    }
                                  }
                                },
                                child: Text(
                                  "Exportar",
                                  style: TextStyle(
                                      color: Palette.primaryLight.shade700),
                                )),
                          ),
                        ),
                        Expanded(
                          child: Padding(
                            padding: const EdgeInsets.only(left: 5, right: 5),
                            child: TextButton(
                                style: ButtonStyle(
                                    backgroundColor: MaterialStateProperty.all(
                                        Palette.primaryDark.shade500),
                                    shape: MaterialStateProperty.all<
                                            RoundedRectangleBorder>(
                                        RoundedRectangleBorder(
                                            borderRadius:
                                                BorderRadius.circular(20.0),
                                            side: const BorderSide(
                                                color: Palette.primaryDark)))),
                                onPressed: () {
                                  if (!isOnCloud && !isOnExport) {
                                    showDeleteDialog(context);
                                  } else {
                                    Navigator.of(context).push(
                                        MaterialPageRoute(
                                            builder: (context) =>
                                                const StreamMonitor()));
                                  }
                                },
                                child: Text(
                                  "Borrar",
                                  style: TextStyle(
                                      color: Palette.primaryLight.shade700),
                                )),
                          ),
                        ),
                        Expanded(
                          child: Padding(
                            padding: const EdgeInsets.only(left: 5, right: 5),
                            child: TextButton(
                                style: ButtonStyle(
                                    backgroundColor: MaterialStateProperty.all(
                                        Palette.primaryDark.shade500),
                                    shape: MaterialStateProperty.all<
                                            RoundedRectangleBorder>(
                                        RoundedRectangleBorder(
                                            borderRadius:
                                                BorderRadius.circular(20.0),
                                            side: const BorderSide(
                                                color: Palette.primaryDark)))),
                                onPressed: () {
                                  if (!isOnCloud && !isOnExport) {
                                    showNewDialog(context);
                                  } else {
                                    Navigator.of(context).push(
                                        MaterialPageRoute(
                                            builder: (context) =>
                                                const StreamMonitor()));
                                  }
                                },
                                child: Text(
                                  "Nueva",
                                  style: TextStyle(
                                      color: Palette.primaryLight.shade700),
                                )),
                          ),
                        )
                      ],
                    ),
                  ))
            ])));
  }

  Future<String> preparateMetricsVars() async {
    for (var i = 0; i < widget.dataSession.length - 1; i++) {
      derivatePassSolution.insert(i, 0);
      powPassSolution.insert(i, 0);
      windowSolution.insert(i, 0);
      normalizeSolution.insert(i, 0);
      peaksSolution.insert(i, 0);
      rrPeaksSolution.insert(i, 0);
    }
    await _metricsCalculations();
    return Future<String>.delayed(
      const Duration(seconds: 2),
      () => 'Data Loaded',
    );
    //
  }

  Future _metricsCalculations() async {
    rrFunctions.init(widget.dataSession.length);
    _frecuencyMetricsCalculs.init();

    if (rrFunctions.setCalculsTask(widget.dataSession, widget.frecuency)) {
      derivatePassSolution = rrFunctions.getDerivativeFilter();
      powPassSolution = rrFunctions.getPowPassFilter();
      windowSolution = rrFunctions.getWindowFilter();
      normalizeSolution = rrFunctions.getNormalizeSignal();
      peaksSolution = rrFunctions.getFindPeaks();
      rrPeaksSolution = rrFunctions.getRRCorrection();

      secondsTime = _metricsCalculs.initTime(rrPeaksSolution);
      heartRate = _metricsCalculs.setHeartRate(secondsTime);
      _metricsCalculs.setPromRR(rrPeaksSolution);
      _frecuencyMetricsCalculs.setFrecuencySignal(rrPeaksSolution);
    }
  }

  Future<void> showFormDialog(BuildContext context, String type) {
    return showModalBottomSheet<void>(
        context: context,
        isScrollControlled: true,
        builder: (BuildContext context) {
          return WillPopScope(
              onWillPop: () async => false,
              child: Padding(
                  padding: MediaQuery.of(context).viewInsets,
                  child: Container(
                      height: MediaQuery.of(context).size.height / 2.2,
                      decoration: BoxDecoration(
                          color: Palette.primaryDark.shade700,
                          borderRadius: const BorderRadius.only(
                              topLeft: Radius.circular(20.0),
                              topRight: Radius.circular(20.0))),
                      child: StatefulBuilder(
                        builder: (BuildContext context, setState) {
                          return Padding(
                            padding: const EdgeInsets.fromLTRB(10, 20, 10, 5),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.center,
                              mainAxisAlignment: MainAxisAlignment.start,
                              children: [
                                Padding(
                                  padding: const EdgeInsets.only(
                                      left: 20, right: 20),
                                  child: Row(
                                    mainAxisAlignment:
                                        MainAxisAlignment.spaceBetween,
                                    children: [
                                      Text("Datos del paciente".toUpperCase(),
                                          style: TextStyle(
                                              fontWeight: FontWeight.w900,
                                              fontSize: 25,
                                              color: Palette
                                                  .primaryLight.shade500)),
                                      GestureDetector(
                                          onTap: () {
                                            Navigator.pop(context);
                                          },
                                          child: FaIcon(
                                            FontAwesomeIcons.xmark,
                                            color:
                                                Palette.primaryLight.shade300,
                                            size: 18,
                                          ))
                                    ],
                                  ),
                                ),
                                const SizedBox(
                                  height: 40,
                                ),
                                Expanded(
                                  child: SingleChildScrollView(
                                    child: Padding(
                                      padding: const EdgeInsets.only(
                                          left: 20, right: 20),
                                      child: Form(
                                          autovalidateMode: AutovalidateMode
                                              .onUserInteraction,
                                          key: _formKey,
                                          child: Column(
                                            children: [
                                              Column(
                                                crossAxisAlignment:
                                                    CrossAxisAlignment.start,
                                                children: [
                                                  const Text(
                                                    "Nombre del paciente",
                                                    style: TextStyle(
                                                        fontSize: 22,
                                                        fontWeight:
                                                            FontWeight.bold),
                                                  ),
                                                  TextFormField(
                                                      autofocus: true,
                                                      validator: (value) {
                                                        return _errorNameField(
                                                            value!);
                                                      },
                                                      decoration:
                                                          const InputDecoration(
                                                        hintText:
                                                            'Ingrese nombre del paciente',
                                                      ),
                                                      onSaved: (val) =>
                                                          setState(() =>
                                                              _inputNameField =
                                                                  val!),
                                                      textInputAction:
                                                          TextInputAction.next,
                                                      keyboardType:
                                                          TextInputType.text,
                                                      controller:
                                                          _namePatienTextController,
                                                      onChanged: (value) => {
                                                            if (value
                                                                .isNotEmpty)
                                                              {
                                                                _inputNameField
                                                                    .split(" ")
                                                                    .map((str) =>
                                                                        str.toUpperCase())
                                                                    .join(" "),
                                                                setState(() => {
                                                                      _inputNameField =
                                                                          value
                                                                    }),
                                                              }
                                                          }),
                                                ],
                                              ),
                                              const SizedBox(
                                                height: 20,
                                              ),
                                              Column(
                                                crossAxisAlignment:
                                                    CrossAxisAlignment.start,
                                                children: [
                                                  const Text(
                                                      "Edad del paciente",
                                                      style: TextStyle(
                                                          fontSize: 22,
                                                          fontWeight:
                                                              FontWeight.bold)),
                                                  TextFormField(
                                                    decoration:
                                                        const InputDecoration(
                                                      hintText:
                                                          'Ingrese la edad en número',
                                                    ),
                                                    validator: (value) {
                                                      return _errorAgeField(
                                                          value!);
                                                    },
                                                    onChanged: (value) => {
                                                      setState(() =>
                                                          _inputAgeField =
                                                              int.parse(value))
                                                    },
                                                    keyboardType:
                                                        TextInputType.number,
                                                    onSaved: (val) => setState(
                                                        () => _inputAgeField =
                                                            int.parse(val!)),
                                                    textInputAction:
                                                        TextInputAction.next,
                                                    controller:
                                                        _agePatienTextController,
                                                  ),
                                                ],
                                              ),
                                              const SizedBox(
                                                height: 20,
                                              ),
                                              Column(
                                                crossAxisAlignment:
                                                    CrossAxisAlignment.start,
                                                children: [
                                                  const Text(
                                                      "Frecuencia respiratoria",
                                                      style: TextStyle(
                                                          fontSize: 22,
                                                          fontWeight:
                                                              FontWeight.bold)),
                                                  TextFormField(
                                                    decoration:
                                                        const InputDecoration(
                                                      hintText:
                                                          'Ingrese el valor en respiraciones por minuto',
                                                    ),
                                                    validator: (value) {
                                                      return _errorEmpetyField(
                                                          value!);
                                                    },
                                                    keyboardType:
                                                        TextInputType.number,
                                                    controller:
                                                        _breathFrecuencyPatienTextController,
                                                    onChanged: (value) => {
                                                      setState(() =>
                                                          _breathFrecuencyField =
                                                              value)
                                                    },
                                                    onSaved: (val) => setState(
                                                        () =>
                                                            _breathFrecuencyField =
                                                                val!),
                                                    textInputAction:
                                                        TextInputAction.next,
                                                  ),
                                                ],
                                              ),
                                              const SizedBox(
                                                height: 20,
                                              ),
                                              SwitchListTile(
                                                  title: const Text(
                                                      "Falla respiratoria hipercápnica",
                                                      style: TextStyle(
                                                          fontSize: 20,
                                                          fontWeight:
                                                              FontWeight.bold)),
                                                  value:
                                                      _hypercRespiratoryFailureRadioButton,
                                                  onChanged: (bool value) {
                                                    setState(() {
                                                      _hypercRespiratoryFailureRadioButton =
                                                          !_hypercRespiratoryFailureRadioButton;
                                                      value
                                                          ? _hypercRespiratoryFailureField =
                                                              "Sí"
                                                          : _hypercRespiratoryFailureField =
                                                              "No";
                                                    });
                                                  }),
                                              const SizedBox(
                                                height: 20,
                                              ),
                                              SwitchListTile(
                                                  title: const Text(
                                                      "Oxígeno suplementario",
                                                      style: TextStyle(
                                                          fontSize: 20,
                                                          fontWeight:
                                                              FontWeight.bold)),
                                                  value:
                                                      _onSupplementalOTwoRadioButton,
                                                  onChanged: (bool value) {
                                                    setState(() {
                                                      _onSupplementalOTwoRadioButton =
                                                          !_onSupplementalOTwoRadioButton;
                                                      value
                                                          ? _onSupplementalOTwoField =
                                                              "Sí"
                                                          : _onSupplementalOTwoField =
                                                              "No";
                                                    });
                                                  }),
                                              const SizedBox(
                                                height: 20,
                                              ),
                                              Column(
                                                crossAxisAlignment:
                                                    CrossAxisAlignment.start,
                                                children: [
                                                  const Text(
                                                      "Saturación de oxígeno",
                                                      style: TextStyle(
                                                          fontSize: 22,
                                                          fontWeight:
                                                              FontWeight.bold)),
                                                  TextFormField(
                                                    decoration:
                                                        const InputDecoration(
                                                      suffixText: "%",
                                                      hintText:
                                                          'Ingrese el porcentaje de saturación de oxígeno',
                                                    ),
                                                    validator: (value) {
                                                      return _errorEmpetyField(
                                                          value!);
                                                    },
                                                    keyboardType:
                                                        TextInputType.number,
                                                    controller:
                                                        _oTwoSaturationPatienTextController,
                                                    onChanged: (value) => {
                                                      setState(() =>
                                                          _oTwoSaturationField =
                                                              value)
                                                    },
                                                    onSaved: (val) => setState(
                                                        () =>
                                                            _oTwoSaturationField =
                                                                val!),
                                                    textInputAction:
                                                        TextInputAction.next,
                                                  ),
                                                ],
                                              ),
                                              const SizedBox(
                                                height: 20,
                                              ),
                                              Column(
                                                crossAxisAlignment:
                                                    CrossAxisAlignment.start,
                                                children: [
                                                  const Text(
                                                      "Presión sanguinea sistólica",
                                                      style: TextStyle(
                                                          fontSize: 22,
                                                          fontWeight:
                                                              FontWeight.bold)),
                                                  TextFormField(
                                                    decoration:
                                                        const InputDecoration(
                                                      suffixText: "mmHg",
                                                      hintText:
                                                          'Ingrese el valor en mmHg',
                                                    ),
                                                    validator: (value) {
                                                      return _errorEmpetyField(
                                                          value!);
                                                    },
                                                    keyboardType:
                                                        TextInputType.number,
                                                    controller:
                                                        _systolicBloodPressurePatienTextController,
                                                    onChanged: (value) => {
                                                      setState(() =>
                                                          _systolicBloodPressureField =
                                                              value)
                                                    },
                                                    onSaved: (val) => setState(() =>
                                                        _systolicBloodPressureField =
                                                            val!),
                                                    textInputAction:
                                                        TextInputAction.next,
                                                  ),
                                                ],
                                              ),
                                              const SizedBox(
                                                height: 20,
                                              ),
                                              Column(
                                                crossAxisAlignment:
                                                    CrossAxisAlignment.start,
                                                children: [
                                                  const Text(
                                                      "Nivel de conciencia",
                                                      style: TextStyle(
                                                          fontSize: 22,
                                                          fontWeight:
                                                              FontWeight.bold)),
                                                  Row(
                                                    children: [
                                                      Expanded(
                                                        child: RadioListTile(
                                                            groupValue:
                                                                _consciousnessSelection,
                                                            title: const Text(
                                                                "Alerta"),
                                                            value:
                                                                ConsciousnessTypes
                                                                    .alerta,
                                                            onChanged:
                                                                (ConsciousnessTypes?
                                                                    value) {
                                                              setState(() {
                                                                _consciousnessSelection =
                                                                    value!;
                                                                _consciousnessField =
                                                                    value
                                                                        .toString();
                                                              });
                                                            }),
                                                      ),
                                                      Expanded(
                                                        child: RadioListTile(
                                                            groupValue:
                                                                _consciousnessSelection,
                                                            title: const Text(
                                                                "LEC"),
                                                            value:
                                                                ConsciousnessTypes
                                                                    .lec,
                                                            onChanged:
                                                                (ConsciousnessTypes?
                                                                    value) {
                                                              setState(() {
                                                                _consciousnessSelection =
                                                                    value!;
                                                                _consciousnessField =
                                                                    value
                                                                        .toString();
                                                              });
                                                            }),
                                                      ),
                                                    ],
                                                  )
                                                ],
                                              ),
                                              const SizedBox(
                                                height: 20,
                                              ),
                                              Column(
                                                crossAxisAlignment:
                                                    CrossAxisAlignment.start,
                                                children: [
                                                  const Text("Temperatura",
                                                      style: TextStyle(
                                                          fontSize: 22,
                                                          fontWeight:
                                                              FontWeight.bold)),
                                                  TextFormField(
                                                    decoration:
                                                        const InputDecoration(
                                                      suffixText: "°C",
                                                      hintText:
                                                          'Ingrese el valor en °C',
                                                    ),
                                                    validator: (value) {
                                                      return _errorEmpetyField(
                                                          value!);
                                                    },
                                                    keyboardType:
                                                        TextInputType.number,
                                                    controller:
                                                        _temperaturePatienTextController,
                                                    onChanged: (value) => {
                                                      setState(() =>
                                                          _temperatureField =
                                                              value)
                                                    },
                                                    onSaved: (val) => setState(
                                                        () =>
                                                            _temperatureField =
                                                                val!),
                                                    textInputAction:
                                                        TextInputAction.next,
                                                  ),
                                                ],
                                              ),
                                              const SizedBox(
                                                height: 20,
                                              ),
                                              Column(
                                                crossAxisAlignment:
                                                    CrossAxisAlignment.start,
                                                children: [
                                                  const Text("Paciente COVID",
                                                      style: TextStyle(
                                                          fontSize: 22,
                                                          fontWeight:
                                                              FontWeight.bold)),
                                                  Row(
                                                    children: [
                                                      Expanded(
                                                        child: RadioListTile(
                                                            groupValue:
                                                                _covidSelection,
                                                            title: const Text(
                                                                "Negativo"),
                                                            value: CovidTypes
                                                                .negativo,
                                                            onChanged:
                                                                (CovidTypes?
                                                                    value) {
                                                              setState(() {
                                                                _covidSelection =
                                                                    value!;
                                                                _covidField = value
                                                                    .toString();
                                                              });
                                                            }),
                                                      ),
                                                      Expanded(
                                                        child: RadioListTile(
                                                            groupValue:
                                                                _covidSelection,
                                                            title: const Text(
                                                                "Sospecha"),
                                                            value: CovidTypes
                                                                .sospecha,
                                                            onChanged:
                                                                (CovidTypes?
                                                                    value) {
                                                              setState(() {
                                                                _covidSelection =
                                                                    value!;
                                                                _covidField = value
                                                                    .toString();
                                                              });
                                                            }),
                                                      ),
                                                    ],
                                                  ),
                                                  Row(
                                                    children: [
                                                      Expanded(
                                                        child: RadioListTile(
                                                            groupValue:
                                                                _covidSelection,
                                                            title: const Text(
                                                                "Poco Probable"),
                                                            value: CovidTypes
                                                                .pocoProbable,
                                                            onChanged:
                                                                (CovidTypes?
                                                                    value) {
                                                              setState(() {
                                                                _covidSelection =
                                                                    value!;
                                                                _covidField = value
                                                                    .toString();
                                                              });
                                                            }),
                                                      ),
                                                      Expanded(
                                                        child: RadioListTile(
                                                            groupValue:
                                                                _covidSelection,
                                                            title: const Text(
                                                                "Positivo"),
                                                            value: CovidTypes
                                                                .positivo,
                                                            onChanged:
                                                                (CovidTypes?
                                                                    value) {
                                                              setState(() {
                                                                _covidSelection =
                                                                    value!;
                                                                _covidField = value
                                                                    .toString();
                                                              });
                                                            }),
                                                      ),
                                                    ],
                                                  )
                                                ],
                                              ),
                                              const SizedBox(
                                                height: 20,
                                              ),
                                              SizedBox(
                                                width: MediaQuery.of(context)
                                                        .size
                                                        .width -
                                                    30,
                                                child: ElevatedButton(
                                                    style: ElevatedButton
                                                        .styleFrom(
                                                            primary: Palette
                                                                .primaryDark
                                                                .shade300,
                                                            elevation: 0.0),
                                                    onPressed: () async {
                                                      final formValidateFlag =
                                                          _formKey.currentState!
                                                              .validate();
                                                      if (formValidateFlag) {
                                                        setState(() {
                                                          isFormCompleted =
                                                              true;
                                                        });
                                                        Navigator.pop(context);
                                                        if (type == "cloud") {
                                                          setSessionCloud();
                                                        } else {
                                                          selectedDirectory =
                                                              await _pickDirectory(
                                                                  context);
                                                          if (selectedDirectory !=
                                                              null) {
                                                            setSessionExport();
                                                          }
                                                        }
                                                      }
                                                    },
                                                    child:
                                                        const Text("Guardar")),
                                              )
                                            ],
                                          )),
                                    ),
                                  ),
                                )
                              ],
                            ),
                          );
                        },
                      ))));
        }).whenComplete(() {
      _namePatienTextController.clear();
      _agePatienTextController.clear();
      _breathFrecuencyPatienTextController.clear();
      _temperaturePatienTextController.clear();
      _oTwoSaturationPatienTextController.clear();
      _systolicBloodPressurePatienTextController.clear();
      _pulsePatienTextController.clear();
    });
  }

  String? _errorNameField(String text) {
    final validCharacters = RegExp(r'^[a-zA-Z ]+$');
    if (text.isEmpty) {
      return "El campo no puede estar vacio";
    } else if (text.length < 2) {
      return "El nombre es demasiado corto";
    } else if (!validCharacters.hasMatch(text)) {
      return "No puede tener números, ni caracteres especiales";
    }
    return null;
  }

  String? _errorAgeField(String text) {
    if (text.isEmpty) {
      return "El campo no puede estar vacio";
    } else if (int.parse(text) < 0 || int.parse(text) > 100) {
      return "La edad no está dentro de un rango";
    }
    return null;
  }

  String? _errorEmpetyField(String text) {
    if (text.isEmpty) {
      return "El campo no puede estar vacio";
    }
    return null;
  }

  Future<void> showSuccessDialog(
      BuildContext context, String titlemsg, String subtitlemsg) {
    return showDialog<void>(
        context: context,
        barrierDismissible: false, // user must tap button!
        builder: (BuildContext context) {
          return Dialog(
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(15),
              ),
              elevation: 8,
              insetPadding: EdgeInsets.zero,
              clipBehavior: Clip.antiAliasWithSaveLayer,
              backgroundColor: Colors.transparent,
              child: Container(
                  width: 350,
                  height: 200,
                  padding: const EdgeInsets.only(
                      top: 30.0, left: 15.0, right: 15.0, bottom: 10.0),
                  decoration: BoxDecoration(
                    color: Colors.black,
                    borderRadius: BorderRadius.circular(15),
                    border: Border.all(color: Colors.blue.shade900),
                  ),
                  child: Column(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      mainAxisAlignment: MainAxisAlignment.spaceAround,
                      children: [
                        Center(
                          child: Text(titlemsg,
                              style: const TextStyle(
                                  fontWeight: FontWeight.bold, fontSize: 23)),
                        ),
                        Center(
                          child: Text(subtitlemsg,
                              style: const TextStyle(fontSize: 15)),
                        ),
                        SizedBox(
                          width: 100,
                          child: ElevatedButton(
                              style: ButtonStyle(
                                  backgroundColor: MaterialStateProperty.all(
                                      Palette.primaryLight.shade500),
                                  shape: MaterialStateProperty.all<
                                          RoundedRectangleBorder>(
                                      RoundedRectangleBorder(
                                          borderRadius:
                                              BorderRadius.circular(10.0),
                                          side: const BorderSide(
                                              color: Palette.primaryDark)))),
                              onPressed: () {
                                Navigator.pop(context);
                              },
                              child: Text(
                                "Cerrar",
                                style: TextStyle(
                                    color: Palette.primaryDark.shade800,
                                    fontWeight: FontWeight.bold),
                              )),
                        )
                      ])));
        });
  }

  Future<void> showDeleteDialog(BuildContext context) {
    return showDialog<void>(
        context: context,
        barrierDismissible: false,
        builder: (BuildContext context) {
          return Dialog(
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(15),
              ),
              elevation: 8,
              insetPadding: EdgeInsets.zero,
              clipBehavior: Clip.antiAliasWithSaveLayer,
              backgroundColor: Colors.transparent,
              child: Container(
                  width: 350,
                  height: 200,
                  padding: const EdgeInsets.only(
                      top: 30.0, left: 15.0, right: 15.0, bottom: 10.0),
                  decoration: BoxDecoration(
                    color: Colors.black,
                    borderRadius: BorderRadius.circular(15),
                    border: Border.all(color: Colors.blue.shade900),
                  ),
                  child: Column(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      mainAxisAlignment: MainAxisAlignment.spaceAround,
                      children: [
                        const Center(
                          child: Text("¿Está seguro de borrar la sesión?",
                              style: TextStyle(
                                  fontWeight: FontWeight.bold, fontSize: 23)),
                        ),
                        const Center(
                          child: Text("No se recueprarán los datos adquiridos.",
                              style: TextStyle(fontSize: 15)),
                        ),
                        Row(
                          children: [
                            Expanded(
                                child: Padding(
                              padding: const EdgeInsets.all(8.0),
                              child: ElevatedButton(
                                  style: ButtonStyle(
                                      backgroundColor:
                                          MaterialStateProperty.all(
                                              Palette.primaryLight.shade700),
                                      shape: MaterialStateProperty.all<
                                              RoundedRectangleBorder>(
                                          RoundedRectangleBorder(
                                              borderRadius:
                                                  BorderRadius.circular(10.0),
                                              side: BorderSide(
                                                  color: Palette.primaryLight
                                                      .shade500)))),
                                  onPressed: () {
                                    Navigator.pop(context);
                                  },
                                  child: Text(
                                    "Cancelar",
                                    style: TextStyle(
                                        color: Palette.primaryDark.shade800,
                                        fontWeight: FontWeight.bold),
                                  )),
                            )),
                            Expanded(
                                child: Padding(
                              padding: const EdgeInsets.all(8.0),
                              child: ElevatedButton(
                                  style: ButtonStyle(
                                      backgroundColor:
                                          MaterialStateProperty.all(Colors.red),
                                      shape: MaterialStateProperty.all<
                                              RoundedRectangleBorder>(
                                          RoundedRectangleBorder(
                                              borderRadius:
                                                  BorderRadius.circular(10.0),
                                              side: const BorderSide(
                                                  color: Colors.redAccent)))),
                                  onPressed: () {
                                    Navigator.pop(context);
                                    Navigator.of(context).push(
                                        MaterialPageRoute(
                                            builder: (context) =>
                                                const StreamMonitor()));
                                  },
                                  child: const Text(
                                    "Borrar",
                                    style: TextStyle(
                                        color: Colors.white,
                                        fontWeight: FontWeight.bold),
                                  )),
                            ))
                          ],
                        ),
                      ])));
        });
  }

  Future<void> showNewDialog(BuildContext context) {
    return showDialog<void>(
        context: context,
        barrierDismissible: false,
        builder: (BuildContext context) {
          return Dialog(
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(15),
              ),
              elevation: 8,
              insetPadding: EdgeInsets.zero,
              clipBehavior: Clip.antiAliasWithSaveLayer,
              backgroundColor: Colors.transparent,
              child: Container(
                  width: 350,
                  height: 200,
                  padding: const EdgeInsets.only(
                      top: 30.0, left: 15.0, right: 15.0, bottom: 10.0),
                  decoration: BoxDecoration(
                    color: Colors.black,
                    borderRadius: BorderRadius.circular(15),
                    border: Border.all(color: Colors.blue.shade900),
                  ),
                  child: Column(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      mainAxisAlignment: MainAxisAlignment.spaceAround,
                      children: [
                        const Center(
                          child: Text("¡No se ha guardado la sesión!",
                              style: TextStyle(
                                  fontWeight: FontWeight.bold, fontSize: 23)),
                        ),
                        const Center(
                          child: Text(
                              "¿Está seguro de hacer una nueva sesión sin guardar?",
                              style: TextStyle(fontSize: 15)),
                        ),
                        Row(
                          children: [
                            Expanded(
                                child: Padding(
                              padding: const EdgeInsets.all(8.0),
                              child: ElevatedButton(
                                  style: ButtonStyle(
                                      backgroundColor:
                                          MaterialStateProperty.all(
                                              Palette.primaryLight.shade700),
                                      shape: MaterialStateProperty.all<
                                              RoundedRectangleBorder>(
                                          RoundedRectangleBorder(
                                              borderRadius:
                                                  BorderRadius.circular(10.0),
                                              side: BorderSide(
                                                  color: Palette.primaryLight
                                                      .shade500)))),
                                  onPressed: () {
                                    Navigator.pop(context);
                                  },
                                  child: Text(
                                    "Cancelar",
                                    style: TextStyle(
                                        color: Palette.primaryDark.shade800,
                                        fontWeight: FontWeight.bold),
                                  )),
                            )),
                            Expanded(
                                child: Padding(
                              padding: const EdgeInsets.all(8.0),
                              child: ElevatedButton(
                                  style: ButtonStyle(
                                      backgroundColor:
                                          MaterialStateProperty.all(Colors.red),
                                      shape: MaterialStateProperty.all<
                                              RoundedRectangleBorder>(
                                          RoundedRectangleBorder(
                                              borderRadius:
                                                  BorderRadius.circular(10.0),
                                              side: const BorderSide(
                                                  color: Colors.redAccent)))),
                                  onPressed: () {
                                    Navigator.pop(context);
                                    Navigator.of(context).push(
                                        MaterialPageRoute(
                                            builder: (context) =>
                                                const StreamMonitor()));
                                  },
                                  child: const Text(
                                    "Continuar",
                                    style: TextStyle(
                                        color: Colors.white,
                                        fontWeight: FontWeight.bold),
                                  )),
                            )),
                          ],
                        ),
                      ])));
        });
  }

  Future<void> setSessionCloud() async {
    Map<String, dynamic> patientModel = {
      "name": _inputNameField,
      "age": _inputAgeField,
      "breathFrecuency": _breathFrecuencyField,
      "hypercapneic": _hypercRespiratoryFailureField,
      "onSuplementalOTwo": _onSupplementalOTwoField,
      "oTwoSaturation": _oTwoSaturationField,
      "systolicBloodPressure": _systolicBloodPressureField,
      "consciousness": _consciousnessField,
      "temperature": _temperatureField,
      "covid": _covidField
    };
    final date = DateTime.now().millisecondsSinceEpoch;
    final sessionTime = widget.sessionTime;
    final sessionTitle = _inputNameField.split(" ").length > 1
        ? "${_inputNameField.split(" ")[1]}-${DateTime.now().year}${DateTime.now().month}${DateTime.now().day}"
        : "$_inputNameField-${DateTime.now().year}${DateTime.now().month}${DateTime.now().day}";
    List<dynamic> crudeData = [];
    for (var item in widget.dataSession) {
      crudeData.add(item.value);
    }
    List<dynamic> dataMetrics = [
      _metricsCalculs.getPromRR(),
      _metricsCalculs.getPromFC(),
      _metricsCalculs.getFCMin(),
      _metricsCalculs.getFCMax(),
      _metricsCalculs.getSDNN(),
      _metricsCalculs.getRMSSD(),
      _metricsCalculs.getnnFifty(),
      _metricsCalculs.getpNNFifty(),
      _metricsCalculs.getSDOne(),
      _metricsCalculs.getSDTwo(),
      _frecuencyMetricsCalculs.getMaxPeackLF(),
      _frecuencyMetricsCalculs.getMaxPeackHF(),
      _frecuencyMetricsCalculs.getTrapzLFPow(),
      _frecuencyMetricsCalculs.getTrapzHFPow(),
      _frecuencyMetricsCalculs.getNaturalLLog(),
      _frecuencyMetricsCalculs.getNaturalHLog(),
      _frecuencyMetricsCalculs.getPowPorcentNuL(),
      _frecuencyMetricsCalculs.getPowPorcentNuH(),
      _frecuencyMetricsCalculs.getPowRate(),
    ];
    SessionModel sessionModel = SessionModel(patientModel, date, sessionTime,
        sessionTitle, crudeData, rrPeaksSolution, dataMetrics);

    final sessionReference = await DataBaseService().sessionsCollection.add({
      "crudeData": sessionModel.crudeData,
      "rrsData": sessionModel.rrsData,
      "metrics": sessionModel.metrics,
      "date": sessionModel.date,
      "title": sessionModel.sessionTitle,
      "patient": sessionModel.patient,
      "session_time": sessionModel.sessionTime,
    });

    final sessionId = sessionReference.id;
    await DataBaseService()
        .sessionsCollection
        .doc(sessionId)
        .update({
          "id": sessionId,
        })
        .then((value) => {
              showSuccessDialog(context, "Se ha guardado con exito la sesión",
                  "Puede revisar en detalle en el dashboard web."),
              setState(() {
                isOnCloud = true;
              })
            })
        .onError((error, stackTrace) => {
              showSuccessDialog(context, "No se ha guardado la sesión",
                  "Ha ocurrido un error interno, intente guardad nuevamente.")
            });
  }

  Future<void> setSessionExport() async {
    var excel = Excel.createExcel();
    excel.rename('Sheet1', 'Patient');
    Sheet sheetPatient = excel['Patient'];
    Sheet sheetFilters = excel['Session'];
    Sheet sheetMetrics = excel['Métricas'];

    List<dynamic> patientData = getPatientData();

    for (var i = 0; i < patientList.length; i++) {
      var cellTitle = sheetPatient
          .cell(CellIndex.indexByColumnRow(columnIndex: 0, rowIndex: i));
      cellTitle.value = patientList[i];
      var cellValue = sheetPatient
          .cell(CellIndex.indexByColumnRow(columnIndex: 1, rowIndex: i));
      cellValue.value = patientData[i];
    }

    List<num?> colMetricsData = getAllMetricsCalculs();
    for (var i = 0; i < dataMetricsList.length; i++) {
      var cellTitle = sheetMetrics
          .cell(CellIndex.indexByColumnRow(columnIndex: 0, rowIndex: i));
      cellTitle.value = dataMetricsList[i];
      var cellValue = sheetMetrics
          .cell(CellIndex.indexByColumnRow(columnIndex: 1, rowIndex: i));
      cellValue.value = colMetricsData[i];
    }

    sheetFilters.insertRowIterables(dataList, 0);

    List<List<num?>> colCrudeData = [];

    for (var i = 0; i < widget.dataSession.length - 1; i++) {
      colCrudeData.insert(i, [
        widget.dataSession[i].value,
        derivatePassSolution[i],
        powPassSolution[i],
        windowSolution[i],
        normalizeSolution[i],
        peaksSolution[i],
        rrPeaksSolution[i]
      ]);
    }

    for (var element in colCrudeData) {
      sheetFilters.appendRow(element);
    }

    String savePath = "";
    var fileBytes = excel.save();
    String currentDirectory = selectedDirectory!.path;

    if (currentDirectory.contains("HeronsFiles")) {
      savePath = "${selectedDirectory!.path}/Sessions/$_inputNameField.xlsx";
    } else {
      savePath =
          "${selectedDirectory!.path}/HeronsFiles/Sessions/$_inputNameField.xlsx";
    }

    File sessionFile = File(savePath);
    await sessionFile.create(recursive: true);
    await sessionFile.writeAsBytes(fileBytes!).then(
          (value) => {
            showSuccessDialog(context, "Se ha exportado con exito la sesión",
                "Puede revisar en detalle en los archivos del telefono."),
            setState(() {
              isOnExport = true;
            })
          },
        );
  }

  Future<Directory?> _pickDirectory(BuildContext context) async {
    var status = await Permission.manageExternalStorage.status;
    if (!status.isGranted) {
      await Permission.storage.request();
    }
    Directory? directory = selectedDirectory;
    directory ??= Directory(FolderPicker.rootPath);

    Directory? newDirectory = await FolderPicker.pick(
        allowFolderCreation: true,
        context: context,
        rootDirectory: directory,
        shape: const RoundedRectangleBorder(
            borderRadius: BorderRadius.all(Radius.circular(10))));
    setState(() {
      selectedDirectory = newDirectory;
    });
    return newDirectory;
  }

  List<dynamic> getPatientData() {
    return [
      _inputNameField,
      _inputAgeField,
      _breathFrecuencyField,
      _hypercRespiratoryFailureField,
      _onSupplementalOTwoField,
      _oTwoSaturationField,
      _systolicBloodPressureField,
      _consciousnessField.split(".")[1],
      _temperatureField,
      _covidField.split(".")[1]
    ];
  }

  List<num?> getAllMetricsCalculs() {
    return [
      _metricsCalculs.getPromRR(),
      _metricsCalculs.getPromFC(),
      _metricsCalculs.getFCMin(),
      _metricsCalculs.getFCMax(),
      _metricsCalculs.getSDNN(),
      _metricsCalculs.getRMSSD(),
      _metricsCalculs.getnnFifty(),
      _metricsCalculs.getpNNFifty(),
      _metricsCalculs.getSDOne(),
      _metricsCalculs.getSDTwo(),
      _frecuencyMetricsCalculs.getMaxPeackLF(),
      _frecuencyMetricsCalculs.getMaxPeackHF(),
      _frecuencyMetricsCalculs.getTrapzLFPow(),
      _frecuencyMetricsCalculs.getTrapzHFPow(),
      _frecuencyMetricsCalculs.getNaturalLLog(),
      _frecuencyMetricsCalculs.getNaturalHLog(),
      _frecuencyMetricsCalculs.getPowPorcentNuL(),
      _frecuencyMetricsCalculs.getPowPorcentNuH(),
      _frecuencyMetricsCalculs.getPowRate(),
    ];
  }
}
