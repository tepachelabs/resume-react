import Footer from '@/components/Footer/Footer';
import MainContent from '@/components/MainContent/MainContent';
import Sidebar from '@/components/Sidebar/Sidebar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="Resume">
      <div className="Resume wrapper">
        <Sidebar/>
        <MainContent/>
      </div>
      <Footer/>
    </div>
    </main>
  );
}
