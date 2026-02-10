import Navigation from './sections/Navigation';
import HeroSection from './sections/HeroSection';
import FeatureMosaic from './sections/FeatureMosaic';
import RealTimeAlerts from './sections/RealTimeAlerts';
import CommunityNetwork from './sections/CommunityNetwork';
import VoiceSOS from './sections/VoiceSOS';
import TwoLevelSafety from './sections/TwoLevelSafety';
import VerifiedCommunity from './sections/VerifiedCommunity';
import HowItWorks from './sections/HowItWorks';
import DownloadCTA from './sections/DownloadCTA';

function App() {
  return (
    <div className="relative overflow-x-hidden bg-hershield-bg min-h-screen">
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main className="relative">
        <HeroSection />
        <FeatureMosaic />
        <RealTimeAlerts />
        <CommunityNetwork />
        <VoiceSOS />
        <TwoLevelSafety />
        <VerifiedCommunity />
        <HowItWorks />
        <DownloadCTA />
      </main>
    </div>
  );
}

export default App;
