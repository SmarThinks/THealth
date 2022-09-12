import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

import '../bloc/bloc.dart';
import '../theme/theme.dart';

class ProfileDialog extends StatelessWidget {
  const ProfileDialog({Key? key, required this.userMetadata}) : super(key: key);
  final Map<String, dynamic> userMetadata;
  @override
  Widget build(BuildContext context) {
    return Dialog(
      backgroundColor: Colors.transparent,
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            SizedBox(
              width: 300,
              height: 500,
              child: Card(
                color: Palette.primaryDark.shade500,
                shape: RoundedRectangleBorder(
                  side:
                      BorderSide(color: Palette.primaryDark.shade300, width: 1),
                  borderRadius: BorderRadius.circular(10),
                ),
                child: Padding(
                  padding: const EdgeInsets.fromLTRB(10, 20, 10, 20),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      Expanded(
                        child: Column(
                          children: [
                            CircleAvatar(
                              backgroundColor: Palette.primaryLight.shade200,
                              radius: 70,
                              child: CircleAvatar(
                                  radius: 65,
                                  backgroundImage:
                                      NetworkImage(userMetadata["photo"])),
                            ),
                            const SizedBox(
                              height: 20,
                            ),
                            Text(
                              userMetadata["type"],
                              style: TextStyle(
                                  color: Palette.primaryLight.shade900,
                                  fontSize: 30,
                                  fontWeight: FontWeight.bold),
                            ),
                            const SizedBox(
                              height: 10,
                            ),
                            Text(
                              userMetadata["name"],
                              style: TextStyle(
                                color: Palette.primaryLight.shade700,
                                fontSize: 20,
                              ),
                            )
                          ],
                        ),
                      ),
                      SizedBox(
                        height: 50,
                        child: ElevatedButton(
                          style: ElevatedButton.styleFrom(
                              elevation: 0.0,
                              primary: Palette.primaryDark.shade500),
                          onPressed: () {
                            BlocProvider.of<AuthBloc>(context).add(
                              SignOutRequested(),
                            );
                            Navigator.of(context).pop();
                          },
                          child: const Text("Cerrar sesión",
                              style: TextStyle(
                                fontWeight: FontWeight.w500,
                                fontSize: 15,
                              )),
                        ),
                      )
                    ],
                  ),
                ),
              ),
            ),
            ElevatedButton(
                style: ElevatedButton.styleFrom(
                    elevation: 0,
                    primary: Palette.primaryDark.shade900.withOpacity(0.5)),
                onPressed: () {
                  Navigator.of(context).pop();
                },
                child: FaIcon(
                  FontAwesomeIcons.xmark,
                  color: Palette.primaryLight.shade900,
                  size: 23,
                ))
          ],
        ),
      ),
    );
  }
}
