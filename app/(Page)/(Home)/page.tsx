import ActiveButton from "./components/ActiveButton";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">活動管理</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="text-center">
          <ActiveButton />
        </div>
      </div>
    </div>
  );
}
