import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:herons_app/theme/theme.dart';
class HeronsTheme {
  static ThemeData get lightTheme { //1
    return ThemeData( 
      brightness: Brightness.dark,//2
      primarySwatch: Palette.primaryLight,
      canvasColor: Colors.transparent,
      scaffoldBackgroundColor: Palette.black.shade900,
      fontFamily: 'Monserrat', //3
      appBarTheme: AppBarTheme(
        color: Palette.black.shade900,
            systemOverlayStyle: SystemUiOverlayStyle.light,
      ),
    );
  }
}