import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import '../theme/theme.dart';

class SingleSessionCard extends StatelessWidget {
  SingleSessionCard(
      {Key? key,
      required this.sessionTitle,
      required this.sessionDate,
      required this.sessionTime,
      required this.sessionAge})
      : super(key: key);

  final String sessionTitle;
  final int sessionTime;
  final int sessionDate;
  final int sessionAge;
  final inputDateFormat = DateFormat('dd MM yyyy HH:mm');
  @override
  Widget build(BuildContext context) {
    return Container(
      width: 300,
      margin: const EdgeInsets.only(right: 10),
      padding: const EdgeInsets.fromLTRB(20, 0, 20, 0),
      decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(20.0),
          color: Palette.primaryDark.shade500,
          border: Border.all(color: Palette.primaryDark)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.center,
        mainAxisSize: MainAxisSize.max,
        children: [
          Text(sessionTitle,
              style: TextStyle(
                color: Palette.primaryLight.shade700,
                fontSize: 22,
                fontWeight: FontWeight.bold,
              )),
          const SizedBox(
            height: 10,
          ),
          Row(
            children: [
              Text(inputDateFormat
                  .format(DateTime.fromMillisecondsSinceEpoch(sessionDate))),
              Row(
                children: [
                  Container(
                    padding: const EdgeInsets.fromLTRB(8, 5, 8, 5),
                    margin: const EdgeInsets.only(left: 10),
                    decoration: BoxDecoration(
                        color: Palette.primaryLight.shade400,
                        borderRadius: BorderRadius.circular(20.0)),
                    child: Text("${(sessionTime ~/ 60).toString()} min"),
                  ),
                  Container(
                    margin: const EdgeInsets.only(left: 10),
                    padding: const EdgeInsets.fromLTRB(8, 5, 8, 5),
                    decoration: BoxDecoration(
                        color: Palette.primaryLight.shade400,
                        borderRadius: BorderRadius.circular(20.0)),
                    child: Text("$sessionAge años"),
                  ),
                ],
              )
            ],
          ),
          const SizedBox(
            height: 20,
          ),
          Divider(
            height: 2,
            color: Palette.primaryLight.shade400,
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              Expanded(
                  child: Padding(
                padding: const EdgeInsets.all(3.0),
                child: ElevatedButton(
                    style: ElevatedButton.styleFrom(
                        primary: Palette.primaryLight.shade800),
                    onPressed: () {},
                    child: Text(
                      "Detalles",
                      style: TextStyle(color: Palette.primaryDark.shade500),
                    )),
              )),
              Expanded(
                  child: Padding(
                padding: const EdgeInsets.all(3.0),
                child: ElevatedButton(
                    style: ElevatedButton.styleFrom(primary: Colors.red),
                    onPressed: () {},
                    child: Text(
                      "Eliminar",
                      style: TextStyle(color: Palette.primaryLight.shade900),
                    )),
              ))
            ],
          )
        ],
      ) /* ListTile(
        title: Text(sessionId),
        subtitle: Text(
            "Fecha: ${inputDateFormat.format(DateTime.fromMillisecondsSinceEpoch(sessionDate))}"),
        trailing: const Icon(
          Icons.arrow_forward_ios_rounded,
          size: 18,
        ),
      ) */
      ,
    );
  }
}
