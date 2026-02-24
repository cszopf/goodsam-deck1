/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  TrendingUp, 
  Target, 
  Users, 
  BarChart3, 
  Globe, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { DECK_CONTENT } from './constants';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < DECK_CONTENT.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const slide = DECK_CONTENT[currentSlide];

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#1A1A1A] font-sans selection:bg-emerald-100">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-black/5 flex items-center justify-between px-8 z-50">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-black flex items-center justify-center rounded">
            <span className="text-white font-bold text-xs">GS</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-widest text-black/40">Investor Deck</span>
            <span className="text-sm font-semibold">GoodSAM Foods | $2M Bridge Note</span>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-xs font-medium text-black/40">
            <span>{String(currentSlide + 1).padStart(2, '0')}</span>
            <div className="w-12 h-1 bg-black/5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-black transition-all duration-300" 
                style={{ width: `${((currentSlide + 1) / DECK_CONTENT.length) * 100}%` }}
              />
            </div>
            <span>{String(DECK_CONTENT.length).padStart(2, '0')}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-2 hover:bg-black/5 rounded-full disabled:opacity-20 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              disabled={currentSlide === DECK_CONTENT.length - 1}
              className="p-2 hover:bg-black/5 rounded-full disabled:opacity-20 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </header>

      <main className="pt-16 min-h-screen flex items-center justify-center p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full max-w-6xl aspect-[16/9] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-2xl overflow-hidden border border-black/5 flex flex-col"
          >
            {/* Slide Header */}
            <div className="p-12 pb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-emerald-500" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600">
                  Section {String(currentSlide + 1).padStart(2, '0')}
                </span>
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-black leading-tight">
                {slide.title}
              </h1>
            </div>

            {/* Slide Content */}
            <div className="flex-1 px-12 pb-12 overflow-y-auto">
              {renderSlideContent(slide)}
            </div>

            {/* Slide Footer */}
            <div className="px-12 py-6 border-t border-black/5 bg-black/[0.01] flex justify-between items-center">
              <span className="text-[10px] font-medium text-black/30 uppercase tracking-widest">
                Strictly Confidential | Institutional Use Only
              </span>
              <span className="text-[10px] font-medium text-black/30 uppercase tracking-widest">
                GoodSAM Foods 2026
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

function renderSlideContent(slide: any) {
  switch (slide.type) {
    case 'bullet_list':
      return (
        <div className="grid grid-cols-1 gap-4 mt-8">
          {slide.data.map((item: string, i: number) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-black/5 bg-black/[0.01]">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
              <p className="text-lg text-black/80 font-medium">{item}</p>
            </div>
          ))}
          {slide.summary && (
            <div className="mt-8 p-6 bg-emerald-50 rounded-xl border border-emerald-100">
              <p className="text-emerald-900 font-semibold flex items-center gap-2">
                <ShieldCheck size={18} />
                {slide.summary}
              </p>
            </div>
          )}
        </div>
      );

    case 'metrics_grid':
      return (
        <div className="flex flex-col gap-8 mt-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {slide.data.map((metric: any, i: number) => (
              <div key={i} className="p-6 rounded-2xl border border-black/5 bg-black/[0.01] flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">{metric.label}</span>
                <span className="text-4xl font-bold text-black">{metric.value}</span>
                <span className="text-xs text-black/60 leading-relaxed">{metric.detail}</span>
              </div>
            ))}
          </div>
          {slide.bullets && (
            <div className="grid grid-cols-2 gap-4">
              {slide.bullets.map((bullet: string, i: number) => (
                <div key={i} className="flex items-center gap-3 text-sm font-medium text-black/70">
                  <ArrowRight size={14} className="text-emerald-500" />
                  {bullet}
                </div>
              ))}
            </div>
          )}
          {slide.summary && (
            <div className="p-6 bg-black text-white rounded-xl">
              <p className="text-sm font-medium leading-relaxed opacity-90">{slide.summary}</p>
            </div>
          )}
        </div>
      );

    case 'structured_list':
      return (
        <div className="grid grid-cols-2 gap-6 mt-8">
          {slide.data.map((item: any, i: number) => (
            <div key={i} className="p-6 rounded-2xl border border-black/5 bg-black/[0.01] hover:bg-black/[0.02] transition-colors">
              <h3 className="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-2">{item.header}</h3>
              <p className="text-black/70 leading-relaxed">{item.text}</p>
            </div>
          ))}
          {slide.footer && (
            <div className="col-span-2 mt-4 p-4 border-l-4 border-black bg-black/[0.03]">
              <p className="text-sm font-bold uppercase tracking-widest">{slide.footer}</p>
            </div>
          )}
        </div>
      );

    case 'table':
      return (
        <div className="mt-8">
          <div className="overflow-hidden rounded-xl border border-black/5">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-black/[0.03]">
                  {slide.headers.map((h: string, i: number) => (
                    <th key={i} className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-black/40 border-b border-black/5">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {slide.rows.map((row: string[], i: number) => (
                  <tr key={i} className="hover:bg-black/[0.01] transition-colors">
                    {row.map((cell, j) => (
                      <td key={j} className="px-6 py-4 text-sm font-medium text-black/80 border-b border-black/5 last:border-b-0">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {slide.notes && (
            <p className="mt-6 text-xs font-medium text-black/40 italic">{slide.notes}</p>
          )}
          {slide.initiatives && (
            <div className="mt-8 grid grid-cols-2 gap-4">
              {slide.initiatives.map((init: string, i: number) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-emerald-50 text-emerald-900 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck size={14} />
                  {init}
                </div>
              ))}
            </div>
          )}
        </div>
      );

    case 'multi_section':
      return (
        <div className="grid grid-cols-2 gap-12 mt-8">
          {slide.sections.map((section: any, i: number) => (
            <div key={i} className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-black rounded-lg">
                  {i === 0 ? <TrendingUp size={16} className="text-white" /> : <Globe size={16} className="text-white" />}
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest">{section.header}</h3>
              </div>
              <div className="flex flex-col gap-3">
                {section.items.map((item: string, j: number) => (
                  <div key={j} className="p-4 rounded-xl border border-black/5 bg-black/[0.01] text-sm font-semibold text-black/70">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );

    case 'bridge_details':
      return (
        <div className="flex flex-col gap-8 mt-8">
          <div className="grid grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-black text-white flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">Raise Size</span>
              <span className="text-3xl font-bold">{slide.details.size}</span>
            </div>
            <div className="p-6 rounded-2xl border border-black/10 flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">Instrument</span>
              <span className="text-3xl font-bold text-black">{slide.details.instrument}</span>
            </div>
            <div className="p-6 rounded-2xl border border-black/10 flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">Primary Purpose</span>
              <span className="text-xl font-bold text-black leading-tight">{slide.details.purpose}</span>
            </div>
          </div>
          
          <div className="overflow-hidden rounded-xl border border-black/5">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-black/[0.03]">
                  {slide.table.headers.map((h: string, i: number) => (
                    <th key={i} className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-black/40 border-b border-black/5">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {slide.table.rows.map((row: string[], i: number) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} className={`px-6 py-4 text-sm font-medium border-b border-black/5 last:border-b-0 ${j === 1 ? 'font-bold text-emerald-600' : 'text-black/80'}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    case 'team_grid':
      return (
        <div className="grid grid-cols-2 gap-6 mt-8">
          {slide.data.map((person: any, i: number) => (
            <div key={i} className="p-6 rounded-2xl border border-black/5 bg-black/[0.01] flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
                <Users size={24} className="text-black/20" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold text-black">{person.name}</h3>
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">{person.role}</span>
                <p className="text-sm text-black/60 mt-2 leading-relaxed">{person.bio}</p>
              </div>
            </div>
          ))}
        </div>
      );

    default:
      return <div className="mt-8 text-black/40 italic">Content format not supported.</div>;
  }
}
