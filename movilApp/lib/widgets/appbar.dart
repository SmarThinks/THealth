import 'package:flutter/material.dart';
import 'package:herons_app/theme/herons_pallete.dart';

class AppBar extends StatelessWidget {
  const AppBar({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(color: Colors.transparent),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Expanded(
            flex: 2,
            child: Text("Herons HRV".toUpperCase(),
                style: const TextStyle(
                    fontWeight: FontWeight.w900,
                    color: Palette.primaryDark,
                    fontSize: 25))
          )
        ],
      ),
    );
  }
}
