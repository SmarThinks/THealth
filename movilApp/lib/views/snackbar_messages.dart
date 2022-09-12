import 'package:flutter/material.dart';

import '../theme/theme.dart';

ScaffoldFeatureController<SnackBar, SnackBarClosedReason> snackBarMessage(
    BuildContext context, String message) {
  return ScaffoldMessenger.of(context).showSnackBar(SnackBar(
      backgroundColor: Colors.red.shade500,
      content: Text(
        message,
        style: TextStyle(color: Palette.primaryLight.shade900),
      )));
}
