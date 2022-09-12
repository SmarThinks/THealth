import 'package:flutter/material.dart';
import 'package:herons_app/theme/herons_pallete.dart';

class SingleMectricCard extends StatelessWidget {
  const SingleMectricCard({Key? key, required this.titleMetric, required this.unitMetric, required this.valueMetric}) : super(key: key);
  final String titleMetric;
  final String unitMetric;
  final num valueMetric;
  @override
  Widget build(BuildContext context) {
    return Card(
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
        color: Colors.black26,
        child: Padding(
          padding: const EdgeInsets.only(left: 8, right: 8),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(titleMetric,
                  style: const TextStyle(
                      fontWeight: FontWeight.bold, fontSize: 15)),
              const SizedBox(
                height: 10,
              ),
              Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(valueMetric.toStringAsFixed(2),
                      style: TextStyle(
                          fontWeight: FontWeight.w900,
                          fontSize: 25,
                          color: Palette.primaryDark.shade300)),
                  const SizedBox(width: 5),
                  Text(unitMetric,
                      style: const TextStyle(
                          fontWeight: FontWeight.w500,
                          fontSize: 15,
                          color: Palette.primaryDark)),
                ],
              ),
            ],
          ),
        ));
  }
}
