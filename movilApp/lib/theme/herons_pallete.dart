import 'package:flutter/material.dart';

class Palette {
  static const MaterialColor black = MaterialColor(
    0xff212121, // 0% comes in here, this will be color picked if no shade is selected when defining a Color property which doesn’t require a swatch.
    <int, Color>{
      50: Color(0xff1e1e1e), //10%
      100: Color(0xff1a1a1a), //20%
      200: Color(0xff171717), //30%
      300: Color(0xff141414), //40%
      400: Color(0xff111111), //50%
      500: Color(0xff0d0d0d), //60%
      600: Color(0xff0a0a0a), //70%
      700: Color(0xff070707), //80%
      800: Color(0xff030303), //90%
      900: Color(0xff000000), //100%
    },
  );
  static const MaterialColor white = MaterialColor(
    0xffffffff, // 0% comes in here, this will be color picked if no shade is selected when defining a Color property which doesn’t require a swatch.
    <int, Color>{
      50: Color(0xffe9e9e9), //10%
      100: Color(0xffd3d3d3), //20%
      200: Color(0xffbcbcbc), //30%
      300: Color(0xffa6a6a6), //40%
      400: Color(0xff909090), //50%
      500: Color(0xff7a7a7a), //60%
      600: Color(0xff646464), //70%
      700: Color(0xff4d4d4d), //80%
      800: Color(0xff373737), //90%
      900: Color(0xff212121), //100%
    },
  );
  static const MaterialColor primaryDark = MaterialColor(
    0xff0288d1, // 0% comes in here, this will be color picked if no shade is selected when defining a Color property which doesn’t require a swatch.
    <int, Color>{
      50: Color(0xff027abc), //10%
      100: Color(0xff026da7), //20%
      200: Color(0xff015f92), //30%
      300: Color(0xff01527d), //40%
      400: Color(0xff014469), //50%
      500: Color(0xff013654), //60%
      600: Color(0xff01293f), //70%
      700: Color(0xff001b2a), //80%
      800: Color(0xff000e15), //90%
      900: Color(0xff000000), //100%
    },
  );
  static const MaterialColor primaryLight = MaterialColor(
    0xff0288d1, // 0% comes in here, this will be color picked if no shade is selected when defining a Color property which doesn’t require a swatch.
    <int, Color>{
      50: Color(0xff1b94d6), //10%
      100: Color(0xff35a0da), //20%
      200: Color(0xff4eacdf), //30%
      300: Color(0xff67b8e3), //40%
      400: Color(0xff81c4e8), //50%
      500: Color(0xff9acfed), //60%
      600: Color(0xffb3dbf1), //70%
      700: Color(0xffcce7f6), //80%
      800: Color(0xffe6f3fa), //90%
      900: Color(0xffffffff), //100%
    },
  );
}
