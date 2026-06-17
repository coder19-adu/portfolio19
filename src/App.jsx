import { useEffect, useState } from "react";
import Desktop from "./components/Desktop";
import BootScreen from "./components/BootScreen";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? <BootScreen /> : <Desktop />;
}