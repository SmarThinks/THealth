import 'package:animated_splash_screen/animated_splash_screen.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:herons_app/data/repositories/repositories.dart';
import 'package:page_transition/page_transition.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:herons_app/screens/screens.dart';
import 'package:herons_app/theme/theme.dart';

import 'bloc/bloc.dart';
import 'widgets/widgets.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(MultiBlocProvider(providers: [
    BlocProvider(create: (context) => SettingsBloc()),
    BlocProvider(
        create: (context) => AuthBloc(authRepository: AuthRepository())),
    BlocProvider(
        create: (context) => BlueBloc(blueRepository: BlueRepository()))
  ], child: const HeronsApp()));
}

class HeronsApp extends StatelessWidget {
  const HeronsApp({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Herons App',
      theme: HeronsTheme.lightTheme,
      debugShowCheckedModeBanner: false,
      home: AnimatedSplashScreen(
          duration: 5000,
          splash: Column(
            mainAxisSize: MainAxisSize.max,
            children: [
              const FaIcon(FontAwesomeIcons.handHoldingHeart,
                  color: Palette.primaryDark, size: 55),
              const SizedBox(
                height: 5,
              ),
              Text("Herons HRV".toUpperCase(),
                  style: const TextStyle(
                      fontWeight: FontWeight.w900,
                      color: Palette.primaryDark,
                      fontSize: 20))
            ],
          ),
          centered: true,
          nextScreen: SafeArea(
              child: Scaffold(
            body: Stack(
              children: [
                const HomeScreen(),
                BlocBuilder<SettingsBloc, SettingsState>(
                  builder: (context, state) {
                    if (!state.isAllGranted) {
                      return ErrorEventHandler(blocState: state);
                    }
                    return const Center(); // ResultsMonitor(dataSession: [],frecuency: 0.0, sessionTime: 0,);
                  },
                ),
              ],
            ),
          )),
          splashTransition: SplashTransition.fadeTransition,
          pageTransitionType: PageTransitionType.leftToRight,
          backgroundColor: Colors.black),
    );
  }
}
