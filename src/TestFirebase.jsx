
import { useEffect, useState } from "react";
import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

const TestFirebase = () => {
  const [status, setStatus] = useState("Checking...");

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const docRef = doc(db, "test", "ping");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setStatus("✅ Firestore connected and data found.");
        } else {
          setStatus("✅ Firestore connected, but no data found.");
        }
      } catch (error) {
        console.error(error);
        setStatus("❌ Firestore connection failed.");
      }
    };

    checkConnection();
  }, []);

  return (
    <div style={{ padding: "2rem", fontSize: "1.2rem" }}>
      Firestore Status: {status}
    </div>
  );
};

export default TestFirebase;
