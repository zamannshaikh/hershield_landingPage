import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Share2, Shield, Mail, MessageCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const DownloadCTA = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState({ title: '', message: '' });

  const handleDownload = () => {
    setDialogContent({
      title: 'Download HerShield',
      message: 'The APK download will start shortly. Thank you for choosing HerShield!',
    });
    setShowDialog(true);
  };

  const handleShare = () => {
    setDialogContent({
      title: 'Share HerShield',
      message: 'Share link copied to clipboard! Help spread safety to your loved ones.',
    });
    setShowDialog(true);
    if (navigator.share) {
      navigator.share({
        title: 'HerShield - Safety Powered by Community',
        text: 'Check out HerShield, a personal safety app that helps keep you protected.',
        url: window.location.href,
      }).catch(() => {
        // User cancelled or error
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const handleFooterClick = (title: string, message: string) => {
    setDialogContent({ title, message });
    setShowDialog(true);
  };

  return (
    <section
      id="download"
      className="relative w-full py-20 lg:py-28 bg-hershield-bg overflow-hidden"
    >
      {/* Background Blobs */}
      <div
        className="blob-bg absolute -left-[20vw] -top-[15vh] w-[70vw] h-[80vh] opacity-30"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 105, 180, 0.35) 0%, transparent 70%)',
          borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
        }}
      />
      <div
        className="blob-bg absolute -right-[15vw] -bottom-[20vh] w-[75vw] h-[85vh] opacity-30"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(123, 97, 255, 0.35) 0%, transparent 70%)',
          borderRadius: '60% 40% 30% 70% / 50% 60% 40% 50%',
          animationDelay: '-12s',
        }}
      />

      <div className="relative z-10 w-full px-5">
        {/* CTA Block - Always visible, no animation delay */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-poppins font-bold text-3xl lg:text-5xl text-hershield-text mb-5">
            Ready when you are.
          </h2>
          <p className="text-hershield-text-secondary text-lg mb-10">
            Download HerShield today and choose who walks with you.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              onClick={handleDownload}
              size="lg"
              className="bg-violet-500 hover:bg-violet-600 text-white rounded-full px-8 py-5 text-base font-semibold shadow-lg shadow-violet-500/20 btn-primary"
            >
              <Download className="w-5 h-5 mr-2" />
              Get the app
            </Button>
            <Button
              onClick={handleShare}
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-5 text-base font-semibold border-2 border-violet-200 text-violet-600 hover:bg-violet-50 hover:border-violet-300 transition-all duration-150"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Share with a friend
            </Button>
          </div>

          {/* App Info */}
          <div className="mt-8 flex flex-wrap justify-center gap-5 text-sm text-hershield-text-secondary">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-violet-500" />
              <span>Version 1.0.0</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span>Last updated: February 2026</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200 pt-12">
          <div className="max-w-6xl mx-auto">
            {/* Footer Top */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-10">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-pink-400 flex items-center justify-center shadow-md">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="font-poppins font-semibold text-xl text-hershield-text">
                  HerShield
                </span>
              </div>

              {/* Links */}
              <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
                <button 
                  onClick={() => handleFooterClick('Privacy Policy', 'Our privacy policy ensures your data is always protected. We never share your location or personal information with third parties.')}
                  className="text-sm text-hershield-text-secondary hover:text-violet-600 transition-colors duration-150"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => handleFooterClick('Terms of Service', 'By using HerShield, you agree to our terms of service. We are committed to providing a safe and secure platform for all users.')}
                  className="text-sm text-hershield-text-secondary hover:text-violet-600 transition-colors duration-150"
                >
                  Terms of Service
                </button>
                <button 
                  onClick={() => handleFooterClick('Contact Support', 'Email us at support@hershield.app. We are here to help 24/7!')}
                  className="text-sm text-hershield-text-secondary hover:text-violet-600 transition-colors duration-150"
                >
                  Support
                </button>
              </div>

              {/* Social */}
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => handleFooterClick('Email Us', 'Contact us at hello@hershield.app')}
                  className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:shadow-md hover:bg-violet-50 transition-all duration-150"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4 text-hershield-text-secondary" />
                </button>
                <button 
                  onClick={() => handleFooterClick('Community', 'Join our community forum to connect with other HerShield users!')}
                  className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:shadow-md hover:bg-violet-50 transition-all duration-150"
                  aria-label="Community"
                >
                  <MessageCircle className="w-4 h-4 text-hershield-text-secondary" />
                </button>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center pt-8 border-t border-gray-100">
              <p className="text-sm text-hershield-text-secondary">
                © 2026 HerShield. All rights reserved. Safety Powered by Community.
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-poppins">{dialogContent.title}</DialogTitle>
            <DialogDescription>{dialogContent.message}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default DownloadCTA;
