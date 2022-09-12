import 'package:cloud_firestore/cloud_firestore.dart';

class DataBaseService {
  DataBaseService();
  Stream collectionStream =
      FirebaseFirestore.instance.collection('users').snapshots();
  final CollectionReference sessionsCollection =
      FirebaseFirestore.instance.collection("sessions");
}

