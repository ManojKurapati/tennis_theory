import React, { useState } from 'react';
import { ShieldCheck, FileText, RefreshCw } from 'lucide-react';

export default function Legal() {
  const [activeTab, setActiveTab] = useState('terms');

  return (
    <div className="w-full pt-24 pb-16 bg-tennis-dark bg-grid-pattern min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs text-tennis-gold font-bold tracking-widest uppercase">Policies & Disclosures</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-tennis-cream mt-2">
            Legal Information
          </h2>
          <p className="text-xs text-slate-400 mt-2">Please read our service terms, safety warnings, and data policies.</p>
          <div className="w-16 h-[2px] bg-tennis-gold mx-auto mt-4" />
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center gap-2 mb-10 border-b border-tennis-gold/10 pb-4">
          <button
            onClick={() => setActiveTab('terms')}
            className={`px-4 py-2.5 rounded-lg border font-display text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
              activeTab === 'terms'
                ? 'bg-tennis-gold text-tennis-dark border-tennis-gold'
                : 'bg-tennis-deep/40 text-slate-400 border-tennis-gold/10 hover:border-tennis-gold/30 hover:text-tennis-cream'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            Terms & Conditions
          </button>
          
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-4 py-2.5 rounded-lg border font-display text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
              activeTab === 'privacy'
                ? 'bg-tennis-gold text-tennis-dark border-tennis-gold'
                : 'bg-tennis-deep/40 text-slate-400 border-tennis-gold/10 hover:border-tennis-gold/30 hover:text-tennis-cream'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Privacy Policy
          </button>

          <button
            onClick={() => setActiveTab('refund')}
            className={`px-4 py-2.5 rounded-lg border font-display text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
              activeTab === 'refund'
                ? 'bg-tennis-gold text-tennis-dark border-tennis-gold'
                : 'bg-tennis-deep/40 text-slate-400 border-tennis-gold/10 hover:border-tennis-gold/30 hover:text-tennis-cream'
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Cancellation & Refunds
          </button>
        </div>

        {/* Policy Contents Container */}
        <div className="glass-card rounded-2xl p-6 md:p-8 border border-tennis-gold/15 text-xs md:text-sm text-slate-300 leading-relaxed font-sans space-y-6">
          
          {activeTab === 'terms' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-tennis-gold/10 pb-3">
                <h3 className="font-display font-semibold text-base text-tennis-cream">Terms & Conditions</h3>
                <span className="text-[10px] font-mono text-slate-500">Updated: Nov 09, 2025</span>
              </div>
              
              <p className="font-light">
                Welcome to **The Tennis Theory**. By accessing our services, uploading video files, or requesting coaching diagnostics, you agree to comply with and be bound by the following terms.
              </p>

              <div className="space-y-3">
                <h4 className="font-display font-semibold text-xs text-tennis-gold uppercase tracking-wider">1. Educational & Informational Purpose Only</h4>
                <p className="font-light">
                  The reports, biomechanical calculations, and drills provided are for educational and athletic developmental purposes. They are not medical diagnostic records, orthopaedic prescriptions, or physical therapy regimes. Consult a medical professional before starting any high-intensity athletic training.
                </p>

                <h4 className="font-display font-semibold text-xs text-tennis-gold uppercase tracking-wider">2. Age Limit Requirements</h4>
                <p className="font-light">
                  Our services are structured for players aged 11 and above. If the athlete being analyzed is under 18 years of age, consent from a parent or legal guardian is required.
                </p>

                <h4 className="font-display font-semibold text-xs text-tennis-gold uppercase tracking-wider">3. Liability Disclaimer</h4>
                <p className="font-light">
                  The Tennis Theory and its coaches (including Hans) assume no liability or responsibility for physical injuries, joint strains, tendon damages, or hardware failures occurring during the implementation of our corrective drills or tracking sessions. Players assume all operational risk on court.
                </p>

                <h4 className="font-display font-semibold text-xs text-tennis-gold uppercase tracking-wider">4. Video Usage Consent</h4>
                <p className="font-light">
                  By uploading your stroke videos, you grant The Tennis Theory permission to digitize, process, and map the skeletal coordinates. Your videos will never be shared publicly or used in promotional materials without your explicit, written consent.
                </p>

                <h4 className="font-display font-semibold text-xs text-tennis-gold uppercase tracking-wider">5. Intellectual Property</h4>
                <p className="font-light">
                  All metrics, 90-point calibration frameworks, diagnostic graphics, report models, and website code are owned exclusively by The Tennis Theory. Redistribution or replication is strictly prohibited.
                </p>

                <h4 className="font-display font-semibold text-xs text-tennis-gold uppercase tracking-wider">6. Governing Law</h4>
                <p className="font-light">
                  These terms are governed by and construed in accordance with the laws of India and the state of Texas, USA, without regard to conflict of law principles.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-tennis-gold/10 pb-3">
                <h3 className="font-display font-semibold text-base text-tennis-cream">Privacy Policy</h3>
                <span className="text-[10px] font-mono text-slate-500">Updated: Nov 09, 2025</span>
              </div>

              <p className="font-light">
                At **The Tennis Theory**, protecting your personal data and athletic media is our primary responsibility. This policy describes how we collect, store, and secure your information.
              </p>

              <div className="space-y-3">
                <h4 className="font-display font-semibold text-xs text-tennis-gold uppercase tracking-wider">1. Data We Collect</h4>
                <p className="font-light">
                  - **Personal Identifiers**: Name, age, email address, WhatsApp/phone number, and city.
                  - **Media Uploads**: Raw video footage of serves, forehands, backhands, or movements.
                  - **Technical Diagnostics**: Kinetic chain values, joint velocity metrics, and performance metrics calculated by our engine.
                </p>

                <h4 className="font-display font-semibold text-xs text-tennis-gold uppercase tracking-wider">2. Data Usage Policies</h4>
                <p className="font-light">
                  We use your personal identifiers and media files exclusively to generate your biomechanical reports, compile target drills, handle payments, and communicate diagnostic progress. We do not sell, rent, or lease your personal info or raw videos to third-party brokers.
                </p>

                <h4 className="font-display font-semibold text-xs text-tennis-gold uppercase tracking-wider">3. Security Measures</h4>
                <p className="font-light">
                  All uploaded video assets and compiled reports are hosted on secure, encrypted cloud servers. Access is restricted exclusively to Hans and our processing technicians to prevent coordinate leaks.
                </p>

                <h4 className="font-display font-semibold text-xs text-tennis-gold uppercase tracking-wider">4. Cookies & Trackers</h4>
                <p className="font-light">
                  Our website uses cookies to maintain session states and save loading preferences. You can disable cookies in your browser settings, though some portal mockups may display defaults.
                </p>

                <h4 className="font-display font-semibold text-xs text-tennis-gold uppercase tracking-wider">5. Contact Information</h4>
                <p className="font-light">
                  For privacy enquiries or to request deletion of your uploaded stroke videos, email us directly at **info@thetennistheory.com**.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'refund' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-tennis-gold/10 pb-3">
                <h3 className="font-display font-semibold text-base text-tennis-cream">Cancellation & Refund Policy</h3>
                <span className="text-[10px] font-mono text-slate-500">Updated: Nov 09, 2025</span>
              </div>

              <p className="font-light">
                We believe in providing the absolute highest quality biomechanical analysis reports. Due to the high expert engineering time dedicated to each player's skeletal digitizing, we adhere to the following cancellation rules.
              </p>

              <div className="space-y-3">
                <h4 className="font-display font-semibold text-xs text-tennis-gold uppercase tracking-wider">1. Full Refunds</h4>
                <p className="font-light">
                  You are eligible for a 100% refund of fees paid in cases of duplicate payments, billing errors, or technical system failures where your video cannot be uploaded or processed.
                </p>

                <h4 className="font-display font-semibold text-xs text-tennis-gold uppercase tracking-wider">2. Pre-Delivery Cancellation</h4>
                <p className="font-light">
                  If you cancel your request before our diagnostics team begins manual digitizing (typically within 4 hours of your upload/booking), you will receive a full refund minus a 5% card-processing transaction fee.
                </p>

                <h4 className="font-display font-semibold text-xs text-tennis-gold uppercase tracking-wider">3. Post-Delivery Refunds</h4>
                <p className="font-light">
                  Once your biomechanical report (the 90-Point assessment) has been completed and delivered to your email/WhatsApp, we cannot issue any refund. We invest massive clinical/engineering hours to calibrate your coordinate charts.
                </p>

                <h4 className="font-display font-semibold text-xs text-tennis-gold uppercase tracking-wider">4. Booking Support</h4>
                <p className="font-light">
                  If you are unsatisfied with the coordinate points or drill selections in your report, please let us know. Hans will review the calibration metrics and run corrective updates to address your feedback.
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
