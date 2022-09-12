import 'package:flutter/material.dart';
import 'package:herons_app/theme/herons_pallete.dart';

class MetricCard extends StatelessWidget {
  const MetricCard({Key? key, required this.titleMetric, required this.unitMetric, required this.valueMetric}) : super(key: key);
  final String titleMetric;
  final String unitMetric;
  final num valueMetric;

  @override
  Widget build(BuildContext context) {
      return Card(
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10), side: BorderSide(color: Palette.primaryDark.shade400, width: 3.0)),
          color:Palette.primaryDark.shade800,
          child: Padding(
            padding: const EdgeInsets.only(left: 20, right: 20),
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
                        style: const TextStyle(
                            fontWeight: FontWeight.w900,
                            fontSize: 25,
                            color: Palette.primaryDark)),
                    const SizedBox(width: 5),
                    Text(unitMetric,
                        style: TextStyle(
                            fontWeight: FontWeight.w500,
                            fontSize: 15,
                            color: Palette.primaryLight.shade400)),
                  ],
                ),
              ],
            ),
          ));
    
  }
}
