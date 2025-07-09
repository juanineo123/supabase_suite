const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.createUserProfile = functions.auth.user().onCreate(async (user) => {
  // Corregido para cumplir con la regla 'object-curly-spacing'.
  const {uid, email, displayName} = user;

  const trialEndDate = admin.firestore.Timestamp.fromDate(
      new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
  );

  const newUserProfile = {
    email: email,
    displayName: displayName || null,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    status: "trial",
    trialEndDate: trialEndDate,
  };

  try {
    await admin
        .firestore()
        .collection("users")
        .doc(uid)
        .set(newUserProfile);
    
    console.log(`Perfil creado exitosamente para el usuario: ${uid}`);
  } catch (error) {
    console.error(`Error al crear el perfil para el usuario: ${uid}`, error);
  }
});