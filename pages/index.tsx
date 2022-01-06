import SideBar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="">
        <SideBar />
        {/* Center */}
      </main>

      <div>{/* Player */}</div>
    </div>
  );
}
