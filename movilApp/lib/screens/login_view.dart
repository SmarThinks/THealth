import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:herons_app/screens/home_view.dart';
import '../bloc/bloc.dart';
import '../theme/herons_pallete.dart';

class LoginView extends StatefulWidget {
  const LoginView({Key? key}) : super(key: key);

  @override
  State<LoginView> createState() => _LoginViewState();
}

class _LoginViewState extends State<LoginView> {
  final _formKey = GlobalKey<FormState>();
/*   final user = FirebaseAuth.instance.currentUser!; */
  final _emailPatienTextController = TextEditingController();
  final _passwordPatienTextController = TextEditingController();
  String _inputEmailField = '', _inputPasswordField = '', _errorMessage = "";
  bool isFormCompleted = false, isFormError = false;
  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Scaffold(
      resizeToAvoidBottomInset: false,
      body: BlocListener<AuthBloc, AuthState>(
        listener: (context, state) {
          if (state is Authenticated) {
            Navigator.of(context).pushAndRemoveUntil(
              MaterialPageRoute(builder: (context) => const HomeScreen()),
              (route) => false,
            );
          }
          if (state is AuthError) {
            _emailPatienTextController.clear();
            _passwordPatienTextController.clear();
            setState(() {
              isFormCompleted = false;
            });

            ScaffoldMessenger.of(context).showSnackBar(SnackBar(
                backgroundColor: Colors.red.shade500,
                content: Text(
                  state.error,
                  style: TextStyle(color: Palette.primaryLight.shade900),
                )));
          }
        },
        child: Padding(
          padding: const EdgeInsets.fromLTRB(0, 0, 0, 30),
          child: Column(
              mainAxisSize: MainAxisSize.max,
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                ElevatedButton(
                    style: ElevatedButton.styleFrom(
                        elevation: 0,
                        primary: Colors.transparent,
                        onSurface: Colors.transparent,
                        shadowColor: Colors.transparent),
                    onPressed: () {
                      Navigator.of(context).pushAndRemoveUntil(
                        MaterialPageRoute(
                            builder: (context) => const HomeScreen()),
                        (route) => false,
                      );
                    },
                    child: const FaIcon(FontAwesomeIcons.arrowLeft)),
                const SizedBox(
                  height: 40,
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(30, 0, 30, 0),
                  child: Text(
                    "Herons Plataform",
                    style: TextStyle(
                      fontSize: 40,
                      fontWeight: FontWeight.bold,
                      color: Palette.primaryLight.shade300,
                    ),
                  ),
                ),
                const SizedBox(
                  height: 20,
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(30, 0, 30, 0),
                  child: Text(
                    "Iniciar sesión",
                    style: TextStyle(
                      fontSize: 30,
                      fontWeight: FontWeight.bold,
                      color: Palette.primaryLight.shade500,
                    ),
                  ),
                ),
                const SizedBox(
                  height: 70,
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(35, 0, 35, 0),
                  child: Form(
                      autovalidateMode: AutovalidateMode.onUserInteraction,
                      key: _formKey,
                      child: Column(
                        children: [
                          Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              const Text(
                                "Usuario",
                                style: TextStyle(
                                    fontSize: 22, fontWeight: FontWeight.bold),
                              ),
                              const SizedBox(
                                height: 10,
                              ),
                              TextFormField(
                                  autofocus: true,
                                  controller: _emailPatienTextController,
                                  validator: (value) {
                                    return _errorValidEmailField(value!);
                                  },
                                  decoration: InputDecoration(
                                      filled: true,
                                      fillColor: Palette.primaryLight.shade700
                                          .withOpacity(0.35),
                                      border: OutlineInputBorder(
                                          borderRadius:
                                              BorderRadius.circular(20.0),
                                          borderSide: BorderSide(
                                              width: 2,
                                              color: Palette
                                                  .primaryLight.shade900)),
                                      hintText: 'Ingrese su correo electrónico',
                                      hintStyle: TextStyle(
                                          color:
                                              Palette.primaryLight.shade900)),
                                  onSaved: (val) =>
                                      setState(() => {_inputEmailField = val!}),
                                  textInputAction: TextInputAction.next,
                                  keyboardType: TextInputType.emailAddress,
                                  onChanged: (value) => {
                                        setState(
                                            () => (_inputEmailField = value))
                                      }),
                            ],
                          ),
                          const SizedBox(
                            height: 20,
                          ),
                          Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              const Text("Contraseña",
                                  style: TextStyle(
                                      fontSize: 22,
                                      fontWeight: FontWeight.bold)),
                              const SizedBox(
                                height: 10,
                              ),
                              TextFormField(
                                controller: _passwordPatienTextController,
                                obscureText: true,
                                decoration: InputDecoration(
                                    filled: true,
                                    fillColor: Palette.primaryLight.shade700
                                        .withOpacity(0.35),
                                    border: OutlineInputBorder(
                                        borderRadius:
                                            BorderRadius.circular(20.0),
                                        borderSide: BorderSide(
                                            width: 2,
                                            color:
                                                Palette.primaryLight.shade900)),
                                    hintText: 'Ingrese su contraseña',
                                    hintStyle: TextStyle(
                                        color: Palette.primaryLight.shade900)),
                                validator: (value) {
                                  return _errorEmpetyField(value!);
                                },
                                onChanged: (value) => {
                                  setState(() => (_inputPasswordField = value))
                                },
                                keyboardType: TextInputType.url,
                                onSaved: (val) => setState(
                                    () => {_inputPasswordField = val!}),
                                textInputAction: TextInputAction.done,
                              ),
                            ],
                          ),
                        ],
                      )),
                ),
                const SizedBox(
                  height: 50,
                ),
                Center(
                  child: SizedBox(
                    width: MediaQuery.of(context).size.width - 70,
                    height: 50,
                    child: ElevatedButton(
                        style: ElevatedButton.styleFrom(
                            side: BorderSide(
                                width: 1, color: Palette.primaryDark.shade50),
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(10.0),
                            ),
                            primary: Palette.primaryLight),
                        onPressed: () {
                          final formValidateFlag =
                              _formKey.currentState!.validate();
                          if (formValidateFlag) {
                            setState(() {
                              isFormCompleted = true;
                            });
                          }
                          singinUser();
                        },
                        child: isFormCompleted
                            ? SizedBox(
                                width: 30,
                                height: 30,
                                child: CircularProgressIndicator(
                                  color: Palette.primaryLight.shade900,
                                ))
                            : Text("Iniciar Sesión",
                                style: TextStyle(
                                  fontSize: 20,
                                  fontWeight: FontWeight.w700,
                                  color: Palette.primaryLight.shade900,
                                ))),
                  ),
                )
              ]),
        ),
      ),
    ));
  }

  String? _errorValidEmailField(String text) {
    final emailRegx = RegExp(
        r"^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+");
    if (text.isEmpty) {
      return "El campo no puede estar vacio";
    } else if (!emailRegx.hasMatch(text)) {
      return "Debe ingresar una dirección de correo válida";
    }
    return null;
  }

  String? _errorEmpetyField(String text) {
    if (text.isEmpty) {
      return "El campo no puede estar vacio";
    }
    return null;
  }

  Future<void> singinUser() async {
    if (isFormCompleted) {
      BlocProvider.of<AuthBloc>(context).add(
        SignInRequested(_inputEmailField, _inputPasswordField),
      );
    }
  }
}
