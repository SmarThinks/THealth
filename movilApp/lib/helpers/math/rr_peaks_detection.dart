import 'dart:math' as math;

import '../../models/models.dart';

class RRPeaksDetection {
  final List<dynamic> lowPassFilterArr = [];
  final List<dynamic> highPassFilterArr = [];
  final List<dynamic> derivativePassFilterArr = [];
  final List<dynamic> powPassFilterArr = [];
  final List<dynamic> windowFilterArr = [];
  final List<dynamic> normalizeArr = [];
  final List<dynamic> findPeaksArr = [];
  final List<dynamic> rrDetectionArr = [];
  List<dynamic> rrMediaCorrectionArr = [];
  var xlp = [], xhp = [];

  /// Define el mismo tamaño para todos los vectores, con respecto al vector crudo
  /// @param: lenght raw vector
  /// @void
  void init(int listLenght) {
    for (var i = 0; i < listLenght - 1; i++) {
      xlp.insert(i, 0);
      xhp.insert(i, 0);
      derivativePassFilterArr.insert(i, 0);
      windowFilterArr.insert(i, 0);
      normalizeArr.insert(i, 0);
      findPeaksArr.insert(i, 0);
      rrDetectionArr.insert(i, 0);
      //rrMediaCorrectionArr.insert(i, 0);
    }
  }

  bool setCalculsTask(List<dynamic> rawData, num frecuency) {
    setDerivativeFilter(rawData);
    setPowPassFilter(getDerivativeFilter());
    setWindowFilter(getPowPassFilter());
    setNormalizeSignal(getWindowFilter());
    setFindPeaks(getNormalizeSignal());
    setRRDetection(getFindPeaks(), frecuency);
    setArtifactsCorrection(getRRDetection());

    if (getDerivativeFilter().isEmpty) {
      return false;
    } else if (getPowPassFilter().isEmpty) {
      return false;
    } else if (getWindowFilter().isEmpty) {
      return false;
    } else if (getNormalizeSignal().isEmpty) {
      return false;
    } else if (getFindPeaks().isEmpty) {
      return false;
    } else if (getRRDetection().isEmpty) {
      return false;
    } else if (getRRCorrection().isEmpty) {
      return false;
    }

    return true;
  }

  /// set first filter low pass, actually inuse
  /// @param: List raw vector
  /// @void
  void setLowPassFilter(List<ListDataModel> rawData) {
    var a = 0;
    for (var i = 12; i < rawData.length; i++) {
      var lpSalmple = 2 * xlp[i - 1] -
          xlp[i - 2] +
          rawData[i].value -
          2 * rawData[i - 6].value +
          rawData[i - 12].value;

      lowPassFilterArr.insert(a++, lpSalmple);
    }
  }

  /// get low pass filter list result
  ///list result save inf [lowPassFilterArr]
  List getLowPassFilter() {
    return lowPassFilterArr;
  }

  void setHighPassFilter(List<dynamic> lowPassFilterArr) {
    var a = 0;
    for (var i = 33; i < lowPassFilterArr.length; i++) {
      var hpSalmple = xhp[i - 1] -
          (1 / 32) * xhp[i] +
          lowPassFilterArr[i - 16] -
          lowPassFilterArr[i - 17] +
          (1 / 32) * lowPassFilterArr[i - 32];
      highPassFilterArr.insert(a, hpSalmple);
      a++;
    }
  }

  List getHighPassFilter() {
    return highPassFilterArr;
  }

  void setDerivativeFilter(List<dynamic> rawData) {
    for (var i = 5; i < rawData.length; i++) {
      var derSample = (1 / 8) *
          (2 * rawData[i].value +
              rawData[i - 1].value -
              rawData[i - 3].value -
              (2 * rawData[i - 4].value));
      derivativePassFilterArr.insert(i, derSample);
    }
  }

  List getDerivativeFilter() {
    return derivativePassFilterArr;
  }

  void setPowPassFilter(List<dynamic> derivativePassFilterArr) {
    for (var i = 0; i < derivativePassFilterArr.length; i++) {
      var powSample = math.pow(derivativePassFilterArr[i], 2);
      powPassFilterArr.insert(i, powSample);
    }
  }

  List getPowPassFilter() {
    return powPassFilterArr;
  }

  void setWindowFilter(List<dynamic> powPassFilterArr) {
    int window = 13; //ToDo: variable a jugar
    num windSample = 0;
    for (int i = 6; i < (powPassFilterArr.length - window); i += 1) {
      windSample = 0;
      for (int j = -6; j < 6; j++) {
        int k = i + j;
        windSample = windSample + powPassFilterArr[k];
      }
      windSample = windSample / window;
      windowFilterArr.insert(i, windSample);
    }
  }

  List getWindowFilter() {
    return windowFilterArr;
  }

  void setNormalizeSignal(List<dynamic> windowFilterArr) {
    var minArr = 0.0;
    var maxArr = 0.0;
    for (var i = 0; i < windowFilterArr.length; i++) {
      if (maxArr < windowFilterArr[i]) {
        maxArr = windowFilterArr[i];
      }
      if (minArr > windowFilterArr[i]) {
        minArr = windowFilterArr[i];
      }
    }

    var diffArr = maxArr - minArr;
    var lessArr = [];
    for (var i = 0; i < windowFilterArr.length - 1; i++) {
      var item = windowFilterArr[i];
      lessArr.insert(i, item - minArr);
    }
    for (var i = 0; i < lessArr.length - 1; i++) {
      var item = lessArr[i];
      normalizeArr.insert(i, item / diffArr);
    }
  }

  List getNormalizeSignal() {
    return normalizeArr;
  }

  void setFindPeaks(List<dynamic> normalizeArr) {
    int window = 15;
    num peak = 0;
    for (var i = window; i <= normalizeArr.length - window; i++) {
      int counter = 0;
      for (var j = 0; j <= window; j++) {
        if (normalizeArr[i] > 0.2) {
          if (normalizeArr[i] > normalizeArr[i - j] &&
              normalizeArr[i] >= normalizeArr[i + j]) {
            counter++;
          }
        }
      }

      if (counter == window) {
        peak = normalizeArr[i];
      } else {
        peak = 0;
      }
      findPeaksArr.insert(i, peak);
    }
  }

  List getFindPeaks() {
    return findPeaksArr;
  }

  /// It takes an array of numbers and a frequency, and returns an array of numbers
  ///
  /// Args:
  ///   finPeaksArr (List<dynamic>): List of the peaks detected in the ECG signal.
  ///   frecuency (num): the sampling rate of the data
  void setRRDetection(List<dynamic> finPeaksArr, num frecuency) {
    num acuTime = 0;
    List timeArr = [];
    for (var i = 0; i < finPeaksArr.length; i++) {
      acuTime += frecuency;
      timeArr.insert(i, acuTime);
    }
    var RR_1 = 0.0, RR_2 = 0.0, RR_3 = 0.0, RRV = [], HR = [], f = -1;
    for (var j = 0; j < finPeaksArr.length; j++) {
      if (finPeaksArr[j] != 0) {
        RR_1 = timeArr[j];
        if (RR_1 != 0 && RR_2 != 0) {
          var simpleCounter = 0;
          var _RR = (RR_1 - RR_2);
          rrDetectionArr.insert(simpleCounter++, _RR);
        }
      }
      RR_2 = RR_1;
    }
  }

  List getRRDetection() {
    return rrDetectionArr;
  }

  List<dynamic> helperData = [
    807.219032,
    866.2838392,
    866.2838392,
    945.0369155,
    885.9721083,
    846.5955701,
    925.3486464,
    905.6603774,
    846.5955701,
    925.3486464,
    945.0369155,
    905.6603774,
    905.6603774,
    964.7251846,
    925.3486464,
    846.5955701,
    866.2838392,
    885.9721083,
    964.7251846,
    767.8424938,
    905.6603774,
    885.9721083,
    846.5955701,
    885.9721083,
    885.9721083,
    669.4011485,
    1043.478261,
    905.6603774,
    885.9721083,
    925.3486464,
    945.0369155,
    689.0894176,
    1043.478261,
    866.2838392,
    905.6603774,
    767.8424938,
    905.6603774,
    885.9721083,
    846.5955701,
    748.1542248,
    1082.854799,
    846.5955701,
    885.9721083,
    866.2838392,
    826.9073011,
    866.2838392,
    885.9721083,
    846.5955701,
    905.6603774,
    1004.101723,
    885.9721083,
    826.9073011,
    885.9721083,
    866.2838392,
    826.9073011,
    905.6603774,
    905.6603774,
    866.2838392,
    905.6603774,
    905.6603774,
    846.5955701,
    885.9721083,
    905.6603774,
    925.3486464,
    807.219032,
    905.6603774,
    945.0369155,
    826.9073011,
    984.4134537,
    925.3486464,
    885.9721083,
    767.8424938,
    1141.919606,
    945.0369155,
    807.219032,
    1122.231337,
    925.3486464,
    964.7251846,
    885.9721083,
    925.3486464,
    945.0369155,
    905.6603774,
    964.7251846,
    905.6603774,
    826.9073011,
    807.219032,
    846.5955701,
    787.5307629,
    807.219032,
    885.9721083,
    728.4659557,
    1141.919606,
    866.2838392,
    945.0369155,
    905.6603774,
    866.2838392,
    905.6603774,
    925.3486464,
    866.2838392,
    1023.789992,
    826.9073011,
    866.2838392,
    1043.478261,
    846.5955701,
    905.6603774,
    945.0369155,
    885.9721083,
    846.5955701,
    885.9721083,
    826.9073011,
    866.2838392,
    964.7251846,
    807.219032,
    866.2838392,
    885.9721083,
    885.9721083,
    846.5955701,
    708.7776866,
    1122.231337,
    866.2838392,
    708.7776866,
    1141.919606,
    826.9073011,
    885.9721083,
    846.5955701,
    807.219032,
    826.9073011,
    826.9073011,
    846.5955701,
    807.219032,
    984.4134536,
    866.2838392,
    885.9721083,
    905.6603774,
    925.3486464,
    945.0369155,
    787.5307629,
    728.4659557,
    1023.789992,
    826.9073011,
    866.2838392,
    866.2838392,
    866.2838392,
    905.6603774,
    964.7251846,
    925.3486464,
    905.6603774,
    866.2838392,
    964.7251846,
    964.7251846,
    905.6603774,
    905.6603774,
    905.6603774,
    866.2838392,
    866.2838392,
    905.6603774,
    885.9721083,
    1004.101723,
    885.9721083,
    964.7251846,
    748.1542248,
    1122.231337,
    964.7251846,
    689.0894176,
    1141.919606,
    925.3486464,
    905.6603774,
    905.6603774,
    964.7251846,
    1004.101723,
    866.2838392,
    964.7251846,
    885.9721083,
    945.0369155,
    964.7251846,
    945.0369155,
    945.0369155,
    787.5307629,
    1161.607875,
    885.9721083,
    1004.101723,
    866.2838392,
    728.4659557,
    1122.231337,
    984.4134536,
    945.0369155,
    905.6603774,
    945.0369155,
    866.2838392,
    885.9721083,
    787.5307629,
    1082.854799,
    846.5955701,
    905.6603774,
    885.9721083,
    866.2838392,
    964.7251846,
    1004.101723,
    945.0369155,
    984.4134536,
    905.6603774,
    866.2838392,
    885.9721083,
    866.2838392,
    826.9073011,
    885.9721083,
    925.3486464,
    964.7251846,
    826.9073011,
    945.0369155,
    866.2838392,
    885.9721083,
    885.9721083,
    826.9073011,
    925.3486464,
    570.9598031,
    1082.854799,
    925.3486464,
    964.7251846,
    925.3486464,
    984.4134536,
    984.4134536,
    945.0369155,
    964.7251846,
    905.6603774,
    826.9073011,
    964.7251846,
    787.5307629,
    826.9073011,
    905.6603774,
    905.6603774,
    866.2838392,
    964.7251846,
    925.3486464,
    885.9721083,
    984.4134536,
    945.0369155,
    905.6603774,
    905.6603774,
    905.6603774,
    846.5955701,
    964.7251846,
    610.3363413,
    1102.543068,
    807.219032,
    866.2838392,
    866.2838392,
    689.0894176,
    1082.854799,
    905.6603774,
    826.9073011,
    866.2838392,
    846.5955701,
    649.7128794,
    1004.101723,
    846.5955701,
    846.5955701,
    846.5955701,
    708.7776866,
    1082.854799,
    846.5955701,
    866.2838392,
    905.6603774,
    866.2838392,
    846.5955701,
    905.6603774,
    885.9721083,
    649.7128794,
    1023.789992,
    885.9721083,
    905.6603774,
    826.9073011,
    866.2838392,
    846.5955701,
    885.9721083,
    885.9721083,
    905.6603774,
    925.3486464,
    748.1542248,
    1082.854799,
    925.3486464,
    945.0369155,
    748.1542248,
    1161.607875,
    945.0369155,
    905.6603774,
    905.6603774,
    945.0369155,
    846.5955701,
    885.9721083,
    925.3486464,
    885.9721083,
    885.9721083,
    748.1542248,
    1102.543068,
    885.9721083,
    1004.101723,
    826.9073011,
    885.9721083,
    984.4134537,
    846.5955701,
    866.2838392,
    1004.101723,
    905.6603774,
    748.1542248,
    1122.231337,
    925.3486464,
    905.6603774,
    905.6603774,
    925.3486464,
    885.9721083,
    885.9721083,
    925.3486464,
    885.9721083,
    846.5955701,
    1004.101723,
    767.8424938,
    905.6603774,
    748.1542248,
    826.9073011,
    787.5307629,
    787.5307629,
    807.219032,
    885.9721083,
    590.6480722,
    393.7653815,
    846.5955701,
    945.0369155,
    905.6603774,
    925.3486464,
    787.5307629,
    964.7251846,
    984.4134537,
    925.3486464,
    905.6603774,
    925.3486464,
    964.7251846,
    925.3486464,
    1043.478261,
    1023.789992,
    885.9721083,
    866.2838392,
    748.1542248,
    1082.854799,
    630.0246103,
    334.7005742,
    984.4134537,
    866.2838392,
    945.0369155,
    807.219032,
    1220.672683,
    1004.101723,
    1063.16653,
    1063.16653,
    826.9073011,
    728.4659557,
    1063.16653,
    885.9721083,
    649.7128794,
    1102.543068,
    925.3486464,
    925.3486464,
    807.219032,
    1082.854799,
    885.9721083,
    767.8424938,
    1063.16653,
    846.5955701,
    689.0894176,
    1102.543068,
    846.5955701,
    925.3486464,
    925.3486464,
    866.2838392,
    866.2838392,
    826.9073011,
    728.4659557,
    767.8424938,
    748.1542248,
    807.219032,
    826.9073011,
    531.583265,
    1122.231337,
    905.6603774,
    885.9721083,
    925.3486464,
    964.7251846,
    1004.101723,
    866.2838392,
    964.7251846,
    945.0369155,
    945.0369155,
    984.4134537,
    964.7251846,
    925.3486464,
    984.4134537,
    945.0369155,
    984.4134537,
    846.5955701,
    945.0369155,
    885.9721083,
    649.7128794,
  ];

  void setArtifactsCorrection(List<dynamic> rrPeaksDetection) {
    int lenghtRR = rrPeaksDetection.length;
    int windowMean = 13;
    List<dynamic> rrMediaArr = [];
    List<dynamic> rrMediaAuxiliar = [];
    List<dynamic> nrrAuxiliar = [];
    int started = windowMean + 1;
    num finished = lenghtRR - windowMean;
    for (var i = 0; i < lenghtRR - 2; i++) {
      rrMediaArr.insert(i, 0);
      rrMediaAuxiliar.insert(i, 0);
      nrrAuxiliar.insert(i, 0);
    }

    for (var i = 1; i < windowMean + 1; i++) {
      num acumulatorOne = 0;
      num acumulatorTwo = 0;
      for (var j = 0; j < ((2 * i) + 1); j++) {
        acumulatorOne += rrPeaksDetection[j];
      }
      rrMediaArr[i] = acumulatorOne / ((2 * i) + 1);

      int startedK = lenghtRR - 2 * (i + 1) + 2;
      for (int k = startedK - 1; k < lenghtRR; k++) {
        acumulatorTwo += rrPeaksDetection[k];
      }
      rrMediaArr[(lenghtRR - 2) - i] = acumulatorTwo / ((2 * i) + 1);
    }

    for (var i = windowMean; i < finished; i++) {
      num acumulatorThree = 0;
      for (var j = (i - windowMean); j < (i + windowMean + 1); j++) {
        acumulatorThree += rrPeaksDetection[j];
      }
      rrMediaArr[i] = acumulatorThree / ((i + windowMean) - (i - windowMean));
    }

    for (var k = 0; k < lenghtRR - 3; k++) {
      rrMediaAuxiliar[k] = rrMediaArr[k + 1];
      nrrAuxiliar[k] = rrPeaksDetection[k + 1];
    }

    setRRCorrection(rrMediaAuxiliar, nrrAuxiliar);
  }

  void setRRCorrection(
      List<dynamic> rrMediaAuxiliar, List<dynamic> nrrAuxiliar) {
    int threashold = 200;
    int nrrLength = nrrAuxiliar.length;
    List<dynamic> upperRRLimit = [];
    List<dynamic> lowerRRLimit = [];
    List<dynamic> helperRRLimits = [];
    rrMediaCorrectionArr = nrrAuxiliar;
    for (var i = 0; i < rrMediaAuxiliar.length; i++) {
      upperRRLimit.insert(i, 0);
      lowerRRLimit.insert(i, 0);
    }

    for (var i = 0; i < rrMediaAuxiliar.length - 1; i++) {
      upperRRLimit[i] = rrMediaAuxiliar[i] + threashold;
      lowerRRLimit[i] = rrMediaAuxiliar[i] - threashold;
    }
    for (var i = 0; i < nrrLength; i++) {
      if (nrrAuxiliar[i] >= upperRRLimit[i] ||
          nrrAuxiliar[i] <= lowerRRLimit[i]) {
        rrMediaCorrectionArr[i] = rrMediaAuxiliar[i];
      }
    }
    var removeCounter = 0;
    for (var i = 0; i < rrMediaCorrectionArr.length; i++) {
      if (rrMediaCorrectionArr[i] != 0) {
        removeCounter++;
      }
    }

    for (var i = 0; i <= 14; i++) {
      rrMediaCorrectionArr[removeCounter - i] = 0;
    }
  }

  List<dynamic> getRRCorrection() {
    return rrMediaCorrectionArr;
  }
}
