import React, { useState } from 'react';
import { Cpu, Zap, Activity, CheckCircle2 } from 'lucide-react';

export const HardwareTelemetry: React.FC = () => {
  const [clockSpeed, setClockSpeed] = useState<'100MHz' | '250MHz' | '500MHz'>('100MHz');
  const [bitstreamLoaded, setBitstreamLoaded] = useState(true);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const toggleBitstream = () => {
    const nextState = !bitstreamLoaded;
    setBitstreamLoaded(nextState);
    showToast(nextState ? 'Bitstream GYA.bit loaded · Clocks locked at ' + clockSpeed : 'FPGA reset to default tri-state bootloader');
  };

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const pulseDuration = clockSpeed === '100MHz' ? '4s' : clockSpeed === '250MHz' ? '2.2s' : '1.2s';

  return (
    <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header telemetry info */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-teal-600 dark:text-teal-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 font-mono">
            FPGA Telemetry &amp; Waveform Trace
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
          <span className={`w-2 h-2 rounded-full ${bitstreamLoaded ? 'bg-emerald-500' : 'bg-amber-500'}`} />
          <span>{bitstreamLoaded ? 'PYNQ-Z1 : ACTIVE' : 'RESET'}</span>
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
          <g className="text-slate-300 dark:text-slate-700">
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
            className="fill-slate-100 dark:fill-slate-800 stroke-teal-600 dark:stroke-teal-400 stroke-2 hover:stroke-amber-500 transition-colors"
          />
          <circle cx="480" cy="24" r="3" fill="#d97706" />
          <text x="515" y="56" textAnchor="middle" className="text-xs font-mono font-bold fill-slate-800 dark:fill-slate-100">
            GYA
          </text>
          <text x="515" y="74" textAnchor="middle" className="text-[10px] font-mono fill-teal-700 dark:fill-teal-300">
            MIT·EE
          </text>
          <text x="515" y="90" textAnchor="middle" className="text-[9px] font-mono fill-slate-400">
            {clockSpeed}
          </text>
        </svg>

        {/* Floating Toast Notification */}
        {toastMsg && (
          <div className="absolute top-2 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-mono shadow-lg border border-teal-500/30 flex items-center gap-1.5 animate-in fade-in duration-150">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
            <span>{toastMsg}</span>
          </div>
        )}
      </div>

      {/* Control bar */}
      <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] text-slate-400">Master Clock:</span>
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg">
            {(['100MHz', '250MHz', '500MHz'] as const).map((spd) => (
              <button
                key={spd}
                onClick={() => {
                  setClockSpeed(spd);
                  showToast(`Master PLL clock locked at ${spd}`);
                }}
                className={`px-2 py-0.5 rounded font-mono text-[11px] transition-colors ${
                  clockSpeed === spd
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {spd}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 font-mono text-[11px]">
          <span className="flex items-center gap-1 text-slate-500">
            <Activity className="w-3.5 h-3.5 text-teal-600" />
            <span>Bus: AXI4-Stream</span>
          </span>
          <span className="flex items-center gap-1 text-slate-500">
            <Zap className="w-3.5 h-3.5 text-amber-500" />
            <span>3.3V / 1.8V VDD</span>
          </span>
        </div>
      </div>
    </div>
  );
};
