import 'dart:math' as math;

class FrecuencyMetricsCalculs {
  static const NFFT = 300;
  final List<dynamic> frecuencySignal = [];
  List<dynamic> winHan = [];
  final List<dynamic> winHanOne = [];
  final List<dynamic> winHanTwo = [];
  final List<dynamic> frecuancyAuxiliar = [];
  final List<dynamic> FFTOverlap = [];
  final List<dynamic> complexVector = [];
  final List<dynamic> fftSpectrum = [];
  final List<dynamic> fftSpectrumOne = [];
  final List<dynamic> finalFrecuency = [];
  final List<dynamic> BDLFVectorH = [];
  final List<dynamic> BDLFVectorL = [];
  final List<dynamic> BDHFVectorH = [];
  final List<dynamic> BDHFVectorL = [];
  late num LfPkCC = 0;
  late num HfPkCC = 0;
  late num PLF = 0;
  late num PHF = 0;
  late num LogPLF = 0;
  late num LogPHF = 0;
  late num NuPLF = 0;
  late num NuPHF = 0;
  late num PRT = 0;
  num samplesLenght = 0;

  void init() {
    for (var i = 0; i < NFFT; i++) {
      /* BDLFVectorH.insert(i, 0);
      BDLFVectorL.insert(i, 0); 
      BDHFVectorH.insert(i, 0);
      BDHFVectorL.insert(i, 0);*/
    }
  }

  void setFrecuencySignal(List<dynamic> rrProm) {
    num acumulator = 0, frecuencyProm = 0;
    num vectorLenght = rrProm.length;
    for (var i = 0; i < vectorLenght; i++) {
      acumulator = acumulator + rrProm[i];
    }
    frecuencyProm = acumulator / vectorLenght;
    print("-frecuency prom: $frecuencyProm");
    for (var i = 0; i < vectorLenght; i++) {
      num value = rrProm[i] - frecuencyProm;
      frecuencySignal.insert(i, value);
    }
    print(
        "-frecuency value: ${frecuencySignal[0]}, ${frecuencySignal[frecuencySignal.length - 1]}, ${frecuencySignal.length}}");
    setWindowHanningOne();
    setWindowHanningTwo();
    setWindowHanning();
    setFFTOverlap(frecuencySignal);
    setTransformFurier();
    setFFTSpectrum();
    setBandSeparationLF();
    setBandSeparationHF();
    setMaxPeackLF();
    setMaxPeackHF();
    setTrapzLFPow();
    setTrapzHFPow();
    setNaturalLLog();
    setNaturalHLog();
    setPowPercents();
  }

  List<dynamic> getFrecuencySignal() {
    return frecuencySignal;
  }

  void setSamplesLenght(num vectorLenght) {
    samplesLenght = vectorLenght;
  }

  num getSamplesLenght() {
    return samplesLenght;
  }

  void setWindowHanningOne() {
    var numerito = 1;
    for (var i = 0; i < (NFFT / 2); i++) {
      num degValue = 2 * math.pi * (numerito / NFFT);
      numerito++;
      num windValue = 0.5 * (1 - math.cos(degValue));
      winHanOne.insert(i, windValue);
    }
    print(
        "-Wind one value: ${winHanOne[0]}, ${winHanOne[149]}, ${winHanOne.length}}");
  }

  List<dynamic> getWindowHanningOne() {
    return winHanOne;
  }

  void setWindowHanningTwo() {
    var numerito = 0;
    for (var i = 0; i < (NFFT / 2); i++) {
      num degValue = 2 * math.pi * ((numerito + (NFFT / 2)) / NFFT);
      num windValue = 0.5 * (1 - math.cos(degValue));
      winHanTwo.insert(i, windValue);
      numerito++;
    }
    print(
        "-Wind Two value: ${winHanTwo[0]}, ${winHanTwo[winHanTwo.length - 1]}, ${winHanTwo.length}}");
  }

  List<dynamic> getWindowHanningTwo() {
    return winHanTwo;
  }

  void setWindowHanning() {
    if (winHanOne.isNotEmpty && winHanTwo.isNotEmpty) {
      winHan = [...winHanOne, ...winHanTwo];
    }
    print(
        "-Wind value: ${winHan[0]}, ${winHan[winHan.length - 1]}, ${winHan.length}}");
  }

  List<dynamic> getWindowHanning() {
    return winHan;
  }

  void setFFTOverlap(List<dynamic> natureSignal) {
    for (var i = 0; i < NFFT; i++) {
      frecuancyAuxiliar.insert(i, natureSignal[i]);
    }
    print(
        "-Frecuency Auxiliar value: ${frecuancyAuxiliar[0]}, ${frecuancyAuxiliar[frecuancyAuxiliar.length - 1]}, ${frecuancyAuxiliar.length}}");
    if (frecuancyAuxiliar.isNotEmpty && winHan.isNotEmpty) {
      num frecuencyLength = frecuancyAuxiliar.length;
      for (var i = 0; i < frecuencyLength; i++) {
        FFTOverlap.insert(i, frecuancyAuxiliar[i] * winHan[i]);
      }
      print(
          "-Frecuency Overlap value: ${FFTOverlap[0]}, ${FFTOverlap[FFTOverlap.length - 1]}, ${FFTOverlap.length}}");
    }
  }

  List<dynamic> getFFTOverlap() {
    return FFTOverlap;
  }

  void setTransformFurier() {
    num fourierSumatoryReal = 0;
    num fourierSumatoryImaginary = 0;
    for (var i = 0; i < NFFT; i++) {
      for (var j = 0; j < NFFT; j++) {
        num y = i / NFFT;
        fourierSumatoryReal = fourierSumatoryReal +
            FFTOverlap[j] * math.cos(-2 * math.pi * j * y);
        fourierSumatoryImaginary = fourierSumatoryImaginary +
            FFTOverlap[j] * (-math.sin(-2 * math.pi * j * y));
      }

      num fourierModule = math.sqrt((math.pow(fourierSumatoryReal, 2)) +
          (math.pow(fourierSumatoryImaginary, 2)));
      complexVector.insert(i, fourierModule);

      fourierSumatoryReal = 0;
      fourierSumatoryImaginary = 0;
    }
    print(
        "-Furier value: ${complexVector[0]}, ${complexVector[complexVector.length - 1]}, ${complexVector.length}}");
  }

  List<dynamic> getTransformFurier() {
    return complexVector;
  }

  void setFFTSpectrum() {
    num fttAcomulator = 0;
    List<dynamic> fftSelect = [];
    if (complexVector.isNotEmpty) {
      for (var i = 0; i < complexVector.length; i++) {
        num fftValue = complexVector[i] * (2.6 / NFFT);
        fftSpectrum.insert(i, fftValue);
      }

      print(
          "-FFT Spectrum value: ${fftSpectrum[0]}, ${fftSpectrum[fftSpectrum.length - 1]}, ${fftSpectrum.length}}");

      for (var i = 0; i < (NFFT / 2); i++) {
        fttAcomulator = fttAcomulator + 1;
        fftSelect.insert(i, fttAcomulator);
      }

      print(
          "-FFT Select value: ${fftSelect[0]}, ${fftSelect[fftSelect.length - 1]}, ${fftSelect.length}}");

      for (var i = 0; i < fftSelect.length + 1; i++) {
        fftSpectrumOne.insert(i, fftSpectrum[i] * 980);
      }
      print(
          "-FFT Spectrum One value: ${fftSpectrumOne[0]}, ${fftSpectrumOne[fftSpectrumOne.length - 1]}, ${fftSpectrumOne.length}}");
      for (var i = 0; i < fftSelect.length + 1; i++) {
        num frecuencyValue = i * (1 / NFFT);
        finalFrecuency.insert(i, frecuencyValue);
      }

      print(
          "-FFT Frecuency value: ${finalFrecuency[0]}, ${finalFrecuency[finalFrecuency.length - 1]}, ${finalFrecuency.length}}");
    }
  }

  List<dynamic> getFFTSpectrum() {
    return fftSpectrum;
  }

  List<dynamic> getFFTSpectrumOne() {
    return fftSpectrumOne;
  }

  List<dynamic> getFFTSpectrumFinal() {
    return finalFrecuency;
  }

  void setBandSeparationLF() {
    int posBDLF = 0;
    if (finalFrecuency.isNotEmpty && fftSpectrumOne.isNotEmpty) {
      for (var i = 0; i < finalFrecuency.length; i++) {
        if (finalFrecuency[i] >= 0.04 && finalFrecuency[i] <= 0.15) {
          BDLFVectorH.insert(posBDLF, fftSpectrumOne[i]);
          BDLFVectorL.insert(posBDLF, finalFrecuency[i]);
          posBDLF += 1;
        }
      }
      print(
          "-BDLFVectorH value: ${BDLFVectorH[0]}, ${BDLFVectorH[BDLFVectorH.length - 1]}, ${BDLFVectorH.length}}");
      print(
          "-BDLFVectorL value: ${BDLFVectorL[0]}, ${BDLFVectorL[BDLFVectorH.length - 1]}, ${BDLFVectorL.length}}");
    }
  }

  List<dynamic> getBDLFH() {
    return BDLFVectorH;
  }

  List<dynamic> getBDLFL() {
    return BDLFVectorL;
  }

  void setBandSeparationHF() {
    int posBDHF = 0;
    if (finalFrecuency.isNotEmpty && fftSpectrumOne.isNotEmpty) {
      for (var i = 0; i < finalFrecuency.length; i++) {
        if (finalFrecuency[i] >= 0.15 && finalFrecuency[i] <= 0.4) {
          BDHFVectorH.insert(posBDHF, fftSpectrumOne[i]);
          BDHFVectorL.insert(posBDHF, finalFrecuency[i]);
          posBDHF += 1;
        }
      }
      print(
          "-BDHFVectorH value: ${BDHFVectorH[0]}, ${BDHFVectorH[BDHFVectorH.length - 1]}, ${BDHFVectorH.length}}");
      print(
          "-BDHFVectorL value: ${BDHFVectorL[0]}, ${BDHFVectorL[BDHFVectorL.length - 1]}, ${BDHFVectorL.length}}");
    }
  }

  List<dynamic> getBDHFH() {
    return BDHFVectorH;
  }

  List<dynamic> getBDHFL() {
    return BDHFVectorL;
  }

  void setMaxPeackLF() {
    num LFPkAmp = 0;
    if (BDLFVectorH.isNotEmpty) {
      for (var i = 0; i < BDLFVectorH.length; i++) {
        if (BDLFVectorH[i] > LFPkAmp) {
          LFPkAmp = BDLFVectorH[i];
          LfPkCC = BDLFVectorL[i];
        }
      }
    }
  }

  num getMaxPeackLF() {
    return LfPkCC;
  }

  void setMaxPeackHF() {
    num HFPkAmp = 0;
    if (BDHFVectorH.isNotEmpty) {
      for (var i = 0; i < BDHFVectorH.length; i++) {
        if (BDHFVectorH[i] > HFPkAmp) {
          HFPkAmp = BDHFVectorH[i];
          HfPkCC = BDHFVectorL[i];
        }
      }
    }
  }

  num getMaxPeackHF() {
    return HfPkCC;
  }

  void setTrapzLFPow() {
    num sumatory = 0;
    if (BDLFVectorH.isNotEmpty) {
      for (var i = 0; i < BDLFVectorH.length; i++) {
        if (i == 1 || i == (BDLFVectorH.length - 1)) {
          sumatory = sumatory + (BDLFVectorH[i] / 2);
        } else {
          sumatory = sumatory + BDLFVectorH[i];
        }
      }
    }
    PLF = sumatory * (1 / NFFT);
  }

  num getTrapzLFPow() {
    return PLF;
  }

  void setTrapzHFPow() {
    num sumatory = 0;
    if (BDHFVectorH.isNotEmpty) {
      for (var i = 0; i < BDHFVectorH.length; i++) {
        if (i == 1 || i == (BDHFVectorH.length - 1)) {
          sumatory = sumatory + (BDHFVectorH[i] / 2);
        } else {
          sumatory = sumatory + BDHFVectorH[i];
        }
      }
    }
    PHF = sumatory * (1 / NFFT);
  }

  num getTrapzHFPow() {
    return PHF;
  }

  void setNaturalLLog() {
    LogPLF = math.log(PLF);
  }

  num getNaturalLLog() {
    return LogPLF;
  }

  void setNaturalHLog() {
    LogPHF = math.log(PHF);
  }

  num getNaturalHLog() {
    return LogPHF;
  }

  void setPowPercents() {
    NuPLF = (PLF * 100) / (PLF + PHF);
    NuPHF = (PHF * 100) / (PLF + PHF);
    PRT = PLF / PHF;
    print("NuPLF: $NuPLF");
  }

  num getPowPorcentNuL() {
    return NuPLF;
  }

  num getPowPorcentNuH() {
    return NuPHF;
  }

  num getPowRate() {
    return PRT;
  }
}
