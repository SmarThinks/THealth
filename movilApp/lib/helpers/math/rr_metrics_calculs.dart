import 'dart:math' as math;

class RRMetricsCalculs {
  final List<dynamic> secondsTime = [];
  final List<dynamic> heartRate = [];
  late num promRR = 0.0;
  late num pormArrSize = 0;
  late num promFC = 0.0;
  late num fcMin = 0.0;
  late num fcMax = 0.0;
  late num sdnnValue = 0.0;
  late num rmssdValue = 0.0;
  late num nnFiftyValue = 0.0;
  late num pNNFiftyValue = 0.0;
  late num sdOneValue = 0.0;
  late num sdTwoValue = 0.0;
  List<dynamic> initTime(List<dynamic> miliSecondsTime) {
    for (var i = 0; i < miliSecondsTime.length; i++) {
      secondsTime.insert(i, 0);
      heartRate.insert(i, 0);
    }
    for (var i = 0; i < miliSecondsTime.length; i++) {
      if (miliSecondsTime[i] != 0) {
        secondsTime.insert(i, miliSecondsTime[i] / 1000);
      }
    }
    return secondsTime;
  }

  List<dynamic> setHeartRate(List<dynamic> rrSecondsArray) {
    for (var i = 0; i < rrSecondsArray.length; i++) {
      if (rrSecondsArray[i] != 0) {
        heartRate.insert(i, 60 / rrSecondsArray[i]);
      }
    }
    setFCMinMax(heartRate);
    return heartRate;
  }

  Future<void> setPromRR(List<dynamic> miliSecondsTime) async {
    var size = 0;
    for (var i = 0; i < miliSecondsTime.length; i++) {
      if (miliSecondsTime[i] != 0) {
        size += 1;
      }
    }

    var sumatory = miliSecondsTime.reduce((partial, e) => partial + e);
    pormArrSize = size;
    promRR = sumatory / size;
    setPromFC(heartRate);
    setSDNN(miliSecondsTime, promRR);
    setRMSSD(miliSecondsTime);
    setNNFifty(miliSecondsTime);
    setSDD(miliSecondsTime, promRR, getSDNN());
  }

  num getPromRR() {
    return promRR;
  }

  //Promedio de segundos a promedio cardiaco
  void setPromFC(List<dynamic> heartRate) {
    var size = 0;
    for (var i = 0; i < heartRate.length; i++) {
      if (heartRate[i] != 0) {
        size += 1;
      }
    }

    var sumatory = heartRate.reduce((partial, e) => partial + e);
    pormArrSize = size;
    promFC = sumatory / size;
  }

  num getPromFC() {
    return promFC;
  }

  void setFCMinMax(List<dynamic> heartRate) {
    var minArr = heartRate[0];
    var maxArr = heartRate[0];
    for (var i = 1; i < heartRate.length; i++) {
      if (heartRate[i] > maxArr) {
        maxArr = heartRate[i];
      }
      if (heartRate[i] < minArr && heartRate[i] != 0) {
        minArr = heartRate[i];
      }
    }
    fcMin = minArr;
    fcMax = maxArr;
  }

  num getFCMin() {
    return fcMin;
  }

  num getFCMax() {
    return fcMax;
  }

  void setSDNN(List<dynamic> rrVector, num promRR) {
    num acumulation = 0.0, acumulationTwo = 0.0;
    List<dynamic> newRRZeroZero = [];
    for (var i = 0; i < rrVector.length; i++) {
      if (rrVector[i] != 0) {
        newRRZeroZero.add(rrVector[i]);
      }
    }
    for (var i = 0; i < pormArrSize - 1; i++) {
      acumulationTwo = math.pow(newRRZeroZero[i] - promRR, 2);
      acumulation += acumulationTwo;
    }
    sdnnValue = math.sqrt(acumulation / (pormArrSize - 1));
  }

  num getSDNN() {
    return sdnnValue;
  }

  void setRMSSD(List<dynamic> rrVector) {
    num acumulation = 0.0, acumulationTwo = 0.0;
    List<dynamic> newRRZeroZero = [];
    for (var i = 0; i < rrVector.length; i++) {
      if (rrVector[i] != 0) {
        newRRZeroZero.add(rrVector[i]);
      }
    }
    for (var i = 0; i < pormArrSize - 1; i++) {
      acumulationTwo = math.pow(newRRZeroZero[i + 1] - newRRZeroZero[i], 2);
      acumulation += acumulationTwo;
    }
    rmssdValue = math.sqrt(acumulation / (pormArrSize - 1));
  }

  num getRMSSD() {
    return rmssdValue;
  }

  void setNNFifty(List<dynamic> rrVector) {
    num acumulation = 0;
    List<dynamic> newRRZeroZero = [];
    for (var i = 0; i < rrVector.length; i++) {
      if (rrVector[i] != 0) {
        newRRZeroZero.add(rrVector[i]);
      }
    }
    for (var i = 0; i < newRRZeroZero.length - 1; i++) {
      if ((newRRZeroZero[i] - newRRZeroZero[i + 1]).abs() > 50) {
        acumulation += 1;
      }
    }
    nnFiftyValue = acumulation;
    pNNFiftyValue = (nnFiftyValue / (newRRZeroZero.length - 1)) * 100;
  }

  num getnnFifty() {
    return nnFiftyValue;
  }

  num getpNNFifty() {
    return pNNFiftyValue;
  }

  void setSDD(List<dynamic> rrVector, num promRR, num sdnn) {
    List<dynamic> newRRZeroZero = [], rrpostions = [];
    num acumulator = 0.0, acumulatorTwo = 0.0, sdAux = 0.0;
    for (var i = 0; i < rrVector.length; i++) {
      if (rrVector[i] != 0) {
        newRRZeroZero.add(rrVector[i]);
      }
    }

    for (var i = 0; i < newRRZeroZero.length - 1; i++) {
      rrpostions.add((newRRZeroZero[i + 1] - newRRZeroZero[i]));
    }

    var sumatory = rrpostions.reduce((partial, e) => partial + e);
    var promRRPositions = sumatory / (rrpostions.length);

    for (var i = 0; i < rrpostions.length; i++) {
      acumulator = math.pow(rrpostions[i] - promRRPositions, 2);
      acumulatorTwo += acumulator;
    }

    sdAux = math.sqrt(acumulatorTwo / (rrpostions.length - 1));

    sdOneValue = math.sqrt(math.pow(sdAux, 2) / 2);
    sdTwoValue = math.sqrt((2 * math.pow(sdnn, 2)) - (math.pow(sdAux, 2) / 2));
  }

  num getSDOne() {
    return sdOneValue;
  }

  num getSDTwo() {
    return sdTwoValue;
  }
}
