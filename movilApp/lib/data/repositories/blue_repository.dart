import 'package:flutter_blue/flutter_blue.dart';

class BlueRepository {
  Future<void> blueConnected({
    required BluetoothDevice device,
  }) async {
    try {
      await device.disconnect();
      await device
          .connect(autoConnect: false)
          .timeout(const Duration(seconds: 5), onTimeout: () {
        device.disconnect();
      });
    } catch (e) {
      throw Exception(e);
    }
  }

  Future<void> blueDisconnected({
    required BluetoothDevice device,
  }) async {
    try {
      await device.disconnect();
    } catch (e) {
      throw Exception(e);
    }
  }
}
