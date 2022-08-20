import "./styles.css";
import Header from "./Header";
import Sidebar from "./sidebar";
import Feed from "./feed";

export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <Sidebar />
        <Feed />
        {/*widgets */}
      </div>
    </div>
  );
}
