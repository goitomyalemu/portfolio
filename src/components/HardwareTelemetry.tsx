import React, { useState } from 'react';
import { Cpu, Zap, Activity, CheckCircle2, Gauge, Waves } from 'lucide-react';

interface ClockMetrics {
  periodNs: string;
  nyquistMhz: string;
  powerWatts: string;
  jitterPs: string;
  riseFallTimePs: string;
}

const TIMING_METRICS: Record<'100MHz' | '250MHz' | '500MHz', ClockMetrics> = {
  '100MHz': {
    periodNs: '10.0 ns',
    nyquistMhz: '50.0 MHz',
    powerWatts: '0.18 W',
    jitterPs: '12 ps',
    riseFallTimePs: '350 ps'
  },
  '250MHz': {
    periodNs: '4.0 ns',
    nyquistMhz: '125.0 MHz',
    powerWatts: '0.42 W',
    jitterPs: '8 ps',
    riseFallTimePs: '210 ps'
  },
  '500MHz': {
    periodNs: '2.0 ns',
    nyquistMhz: '250.0 MHz',
    powerWatts: '0.85 W',
    jitterPs: '5 ps',
    riseFallTimePs: '140 ps'
  }
};

export const HardwareTelemetry: React.FC = () => {
  const [clockSpeed, setClockSpeed] = useState<'100MHz' | '250MHz' | '500MHz'>('100MHz');
  const [bitstreamLoaded, setBitstreamLoaded] = useState(true);
  const [activeSignal, setActiveSignal] = useState<'CLK' | 'FSYNC' | 'DOUT'>('CLK');
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const currentMetrics = TIMING_METRICS[clockSpeed];

  const toggleBitstream = () => {
    const nextState = !bitstreamLoaded;
    setBitstreamLoaded(nextState);
    showToast(nextState ? `Bitstream GYA.bit locked · Clock: ${clockSpeed} (${currentMetrics.periodNs})` : 'FPGA tri-stated into bootloader standby');
  };

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const pulseDuration = clockSpeed === '100MHz' ? '4s' : clockSpeed === '250MHz' ? '2.2s' : '1.2s';

  return (
    <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800/90 bg-white dark:bg-[#0c1424] p-5 shadow-xs overflow-hidden transition-colors">
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-950/10 dark:bg-red-900/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header telemetry info */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-teal-700 dark:text-teal-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 font-mono">
            FPGA Logic Analyzer &amp; Waveform Trace
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500 dark:text-slate-400">
          <span className={`w-2 h-2 rounded-full ${bitstreamLoaded ? 'bg-emerald-500' : 'bg-amber-500'}`} />
          <span>{bitstreamLoaded ? 'PYNQ-Z1 : RUNNING' : 'STANDBY'}</span>
        </div>
      </div>

      {/* Circuit traces SVG */}
      <div className="my-3 relative">
        <svg 
          viewBox="0 0 800 120" 
          className="w-full h-auto cursor-pointer" 
          onClick={toggleBitstream}
          aria-label="Interactive FPGA Circuit Waveform"
        >
          <title>Click to toggle FPGA bitstream state</title>
          <style>{`
            .trace-line { fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
            .pulse-line { fill: none; stroke: #d97706; stroke-width: 3; stroke-linecap: round; stroke-dasharray: 8 92; animation: dashRun ${pulseDuration} linear infinite; }
            @keyframes dashRun { from { stroke-dashoffset: 100; } to { stroke-dashoffset: 0; } }
          `}</style>

          {/* Static Traces */}
          <g className="text-slate-300 dark:text-slate-700/80">
            <path className="trace-line" d="M0 20 H140 L160 40 H460" />
            <path className="trace-line" d="M0 50 H220 L230 60 H460" />
            <path className="trace-line" d="M0 80 H180 L190 75 H460" />
            <path className="trace-line" d="M0 105 H150 L165 95 H460" />

            <path className="trace-line" d="M570 40 H660 L680 20 H800" />
            <path className="trace-line" d="M570 60 H710 L720 50 H800" />
            <path className="trace-line" d="M570 75 H690 L700 80 H800" />
            <path className="trace-line" d="M570 95 H640 L655 105 H800" />
          </g>

          {/* Running Pulses */}
          {bitstreamLoaded && (
            <g>
              <path className="pulse-line" d="M0 20 H140 L160 40 H460" />
              <path className="pulse-line" d="M0 50 H220 L230 60 H460" />
              <path className="pulse-line" d="M0 80 H180 L190 75 H460" />
              <path className="pulse-line" d="M0 105 H150 L165 95 H460" />

              <path className="pulse-line" d="M570 40 H660 L680 20 H800" />
              <path className="pulse-line" d="M570 60 H710 L720 50 H800" />
              <path className="pulse-line" d="M570 75 H690 L700 80 H800" />
              <path className="pulse-line" d="M570 95 H640 L655 105 H800" />
            </g>
          )}

          {/* Test Pads */}
          <circle cx="160" cy="40" r="3.5" fill="#d97706" />
          <circle cx="230" cy="60" r="3.5" fill="#d97706" />
          <circle cx="680" cy="20" r="3.5" fill="#d97706" />
          <circle cx="720" cy="50" r="3.5" fill="#d97706" />

          {/* IC Chip Package */}
          <rect 
            x="465" 
            y="10" 
            width="100" 
            height="100" 
            rx="8" 
            className="fill-slate-100 dark:fill-slate-800/90 stroke-teal-800 dark:stroke-teal-500/80 stroke-2 hover:stroke-teal-600 transition-colors"
          />
          <circle cx="480" cy="24" r="3" fill="#d97706" />
          <text x="515" y="54" textAnchor="middle" className="text-xs font-mono font-bold fill-slate-900 dark:fill-slate-100">
            XC7Z020
          </text>
          <text x="515" y="72" textAnchor="middle" className="text-[10px] font-mono fill-teal-800 dark:fill-teal-300 font-semibold">
            GYA·MIT
          </text>
          <text x="515" y="90" textAnchor="middle" className="text-[9px] font-mono fill-slate-500 dark:fill-slate-400">
            {clockSpeed}
          </text>
        </svg>

        {/* Floating Toast Notification */}
        {toastMsg && (
          <div className="absolute top-2 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-teal-900 text-teal-100 text-xs font-mono shadow-lg border border-teal-700/50 flex items-center gap-1.5 animate-in fade-in duration-150">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
            <span>{toastMsg}</span>
          </div>
        )}
      </div>

      {/* Real-time Hardware Timing & Electrical Readout Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 mb-3 text-xs font-mono">
        <div>
          <span className="block text-[10px] text-slate-400 uppercase">Clock Period (T)</span>
          <span className="font-bold text-slate-800 dark:text-slate-100 tabular-nums">{currentMetrics.periodNs}</span>
        </div>
        <div>
          <span className="block text-[10px] text-slate-400 uppercase">Nyquist Limit</span>
          <span className="font-bold text-slate-800 dark:text-slate-100 tabular-nums">{currentMetrics.nyquistMhz}</span>
        </div>
        <div>
          <span className="block text-[10px] text-slate-400 uppercase">Logic Power Est.</span>
          <span className="font-bold text-teal-700 dark:text-teal-400 tabular-nums">{currentMetrics.powerWatts}</span>
        </div>
        <div>
          <span className="block text-[10px] text-slate-400 uppercase">Clock Jitter</span>
          <span className="font-bold text-slate-800 dark:text-slate-100 tabular-nums">{currentMetrics.jitterPs}</span>
        </div>
      </div>

      {/* Control bar */}
      <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] text-slate-500">PLL Clock:</span>
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/80 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700">
            {(['100MHz', '250MHz', '500MHz'] as const).map((spd) => (
              <button
                key={spd}
                onClick={() => {
                  setClockSpeed(spd);
                  showToast(`PLL locked at ${spd} · T = ${TIMING_METRICS[spd].periodNs}`);
                }}
                className={`px-2.5 py-0.5 rounded-md font-mono text-[11px] transition-colors cursor-pointer ${
                  clockSpeed === spd
                    ? 'bg-white dark:bg-slate-900 text-teal-800 dark:text-teal-300 shadow-2xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {spd}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 font-mono text-[11px]">
          <span className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
            <Activity className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
            <span>Bus: AXI4-Stream</span>
          </span>
          <span className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
            <Zap className="w-3.5 h-3.5 text-amber-500" />
            <span>3.3V / 1.8V VDD</span>
          </span>
        </div>
      </div>
    </div>
  );
};
