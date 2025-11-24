import BaseLayout  from "../src/components/layout/baseLayout";
import AppRoutes  from "../src/routes/AppRoutes";

export default function App() {
  return (
    <BaseLayout>
      <AppRoutes />
    </BaseLayout>
  );
}
