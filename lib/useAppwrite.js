import { Alert } from "react-native";
import { useEffect, useState } from "react";
import { getAccount } from "../lib/appwrite"; // Import session validation logic

const useAppwrite = (fn) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);

    try {
      // Check if user session is valid
      const account = await getAccount();
      if (!account) {
        throw new Error("User not logged in. Please sign in again.");
      }

      // Fetch data if session is valid
      const res = await fn();
      setData(res);
    } catch (error) {
      console.error("Error in useAppwrite:", error.message); // Log error
      Alert.alert("Error", error.message); // Show user-friendly alert
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Dependency array is empty; runs only once on mount

  const refetch = () => fetchData(); // Expose refetch for manual updates

  return { data, loading, refetch };
};

export default useAppwrite;
