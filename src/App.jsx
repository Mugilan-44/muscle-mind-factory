import React, { useState } from 'react';
import { Dumbbell, Flame, Activity, CheckCircle2, MapPin, Phone, Mail, Menu, X, ArrowRight } from 'lucide-react';
import logoImg from './assets/logo_mmf.jpg';
import heroImg from './assets/mmf.webp';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [calcData, setCalcData] = useState({ weight: '', age: '', goal: 'muscle' });
  const [calcResult, setCalcResult] = useState(null);

  const handleCalcSubmit = (e) => {
    e.preventDefault();
    if (!calcData.weight || !calcData.age) return;
    
    const weightNum = parseFloat(calcData.weight);
    if (isNaN(weightNum)) return;

    let proteinTarget = 0;
    let calorieSuggestion = '';
    
    if (calcData.goal === 'muscle') {
      proteinTarget = (weightNum * 2.2).toFixed(0);
      calorieSuggestion = 'Caloric Surplus (+300-500 kcal/day)';
    } else {
      proteinTarget = (weightNum * 2.0).toFixed(0);
      calorieSuggestion = 'Caloric Deficit (-300-500 kcal/day)';
    }

    setCalcResult({
      protein: proteinTarget,
      calories: calorieSuggestion
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'The Factory', href: '#factory' },
    { name: 'Nutrition', href: '#nutrition' },
    { name: 'Membership', href: '#membership' },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-yellow-500 selection:text-black">
      
      {/* 1. Sticky Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="Muscle Mind Factory Logo" className="h-12 w-12 object-cover rounded shadow-lg border border-zinc-800" />
              <span className="font-display text-2xl font-black uppercase tracking-tighter sm:text-3xl">
                Muscle Mind <span className="text-yellow-500">Factory</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-sm font-semibold tracking-wide text-zinc-300 hover:text-yellow-500 transition-colors uppercase">
                  {link.name}
                </a>
              ))}
              <a href="#membership" className="inline-flex items-center justify-center bg-yellow-500 text-black px-6 py-2.5 font-bold uppercase tracking-wider text-sm clip-diagonal hover:bg-yellow-400 transition-all glow-yellow-hover">
                Join Now
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-zinc-300 hover:text-white"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-zinc-900 border-b border-zinc-800 py-4 px-4 flex flex-col gap-4 shadow-2xl">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-bold uppercase text-zinc-300 hover:text-yellow-500 block px-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#membership" className="w-full inline-flex items-center justify-center bg-yellow-500 text-black px-6 py-3 mt-2 font-bold uppercase tracking-wider text-sm clip-diagonal">
              Join Now
            </a>
          </div>
        )}
      </nav>

      {/* 2. Cinematic Hero Section */}
      <section id="home" className="relative pt-20 h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img src={heroImg} alt="Heavy Gym Background" className="w-full h-full object-cover object-center scale-105" />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 font-mono text-xs uppercase tracking-widest mb-6 rounded-full backdrop-blur-sm">
            <MapPin size={12} /> Chennai's Elite Training Hub
          </div>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-black uppercase text-white tracking-tighter leading-[0.9] mb-4 drop-shadow-2xl">
            Unleash The <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Dragon Within</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-zinc-300 tracking-widest uppercase mb-10 max-w-3xl drop-shadow-lg">
            Grit. Lift. Rise. Roar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#membership" className="group inline-flex items-center justify-center bg-yellow-500 text-black px-8 py-4 font-black uppercase tracking-widest text-lg clip-diagonal hover:bg-yellow-400 transition-all glow-yellow-hover">
              Claim Your Pass
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#nutrition" className="inline-flex items-center justify-center bg-transparent border-2 border-zinc-500 text-white px-8 py-4 font-bold uppercase tracking-widest text-lg hover:border-yellow-500 hover:text-yellow-500 transition-colors">
              Free Macro Check
            </a>
          </div>
        </div>
      </section>

      {/* 3. The Factory (About) */}
      <section id="factory" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
        <div className="hazard-stripes h-2 w-full absolute top-0 left-0 opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-600 blur opacity-20"></div>
              <img src={heroImg} alt="Equipment" className="relative w-full h-[500px] object-cover rounded-sm grayscale contrast-125 border border-zinc-800" />
              <div className="absolute bottom-4 -right-4 bg-zinc-900 border border-zinc-800 p-4 shadow-2xl flex items-center gap-4">
                <Dumbbell className="text-yellow-500 w-10 h-10" />
                <div>
                  <div className="font-display text-2xl font-black">10K+ SQ FT</div>
                  <div className="text-zinc-400 text-xs uppercase font-bold tracking-wider">Of Pure Iron</div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="font-display text-4xl sm:text-5xl font-black uppercase mb-6 text-white leading-none">
                A Laboratory of <br/><span className="text-yellow-500">Human Performance</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                Welcome to the proving grounds. Muscle Mind Factory is not a spa—it is a forge where iron meets willpower. We engineered the most intense, result-driven environment in Chennai for those who demand greatness and reject mediocrity.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                    <Activity className="text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold uppercase">Elite Strength Equipment</h3>
                    <p className="text-zinc-500 mt-1">Calibrated plates, competition benches, and custom-built machines designed for peak biomechanics.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                    <Flame className="text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold uppercase">Recovery Lounges</h3>
                    <p className="text-zinc-500 mt-1">Cold plunges and deep tissue mobility zones to reconstruct the muscle fibers you just destroyed.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Dynamic Macro Calculator */}
      <section id="nutrition" className="py-24 bg-zinc-900 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl sm:text-5xl font-black uppercase mb-4">Fuel The <span className="text-yellow-500">Machine</span></h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Nutrition is 80% of the battle. Calculate your baseline daily protein targets and caloric approach instantly based on our proven factory protocols.</p>
          </div>
          
          <div className="bg-zinc-950 border border-zinc-800 p-1 rounded-xl shadow-2xl relative">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50 rounded-t-xl"></div>
            <div className="p-8 sm:p-12">
              <form onSubmit={handleCalcSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase font-bold text-zinc-500 tracking-wider">Weight (KG)</label>
                  <input 
                    type="number" 
                    value={calcData.weight}
                    onChange={(e) => setCalcData({...calcData, weight: e.target.value})}
                    placeholder="e.g. 75" 
                    className="bg-zinc-900 border border-zinc-700 text-white px-4 py-3 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors h-14 font-medium"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase font-bold text-zinc-500 tracking-wider">Age</label>
                  <input 
                    type="number" 
                    value={calcData.age}
                    onChange={(e) => setCalcData({...calcData, age: e.target.value})}
                    placeholder="e.g. 25" 
                    className="bg-zinc-900 border border-zinc-700 text-white px-4 py-3 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors h-14 font-medium"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase font-bold text-zinc-500 tracking-wider">Ambition</label>
                  <select 
                    value={calcData.goal}
                    onChange={(e) => setCalcData({...calcData, goal: e.target.value})}
                    className="bg-zinc-900 border border-zinc-700 text-white px-4 py-3 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors h-14 font-medium appearance-none"
                  >
                    <option value="muscle">Build Muscle Mass</option>
                    <option value="fatloss">Aggressive Fat Loss</option>
                  </select>
                </div>
                <div className="sm:col-span-3 mt-2">
                  <button type="submit" className="w-full bg-yellow-500 text-black font-black uppercase text-lg tracking-wider py-4 hover:bg-yellow-400 transition-colors shadow-[0_0_15px_rgba(234,179,8,0.3)] hover:shadow-[0_0_25px_rgba(234,179,8,0.6)]">
                    Calculate Protocol
                  </button>
                </div>
              </form>

              {calcResult && (
                <div className="border-t border-zinc-800 pt-10 mt-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h3 className="font-display text-center text-4xl mb-8 uppercase text-zinc-100">Your Action Plan</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-zinc-900/50 border border-zinc-800 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-5"><Flame size={120} /></div>
                      <div className="text-zinc-400 text-sm font-bold uppercase tracking-widest mb-2 relative z-10">Daily Protein Target</div>
                      <div className="font-display text-5xl sm:text-6xl text-white font-black relative z-10">
                        {calcResult.protein}<span className="text-2xl text-yellow-500">g</span>
                      </div>
                    </div>
                    <div className="bg-zinc-900/50 border border-zinc-800 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
                      <div className="absolute top-0 left-0 p-4 opacity-5"><Activity size={120} /></div>
                      <div className="text-zinc-400 text-sm font-bold uppercase tracking-widest mb-2 relative z-10">Caloric Strategy</div>
                      <div className="font-display text-3xl sm:text-4xl text-white font-black leading-tight mt-2 relative z-10">
                        {calcResult.calories.split(' ').map((word, i) => 
                           i === 1 ? <span key={i} className="text-yellow-500"> {word} </span> : <span key={i}>{word} </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Subscription Tiers */}
      <section id="membership" className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-black uppercase mb-4">Choose Your <span className="text-white">Arsenal</span></h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">No contracts. No hidden fees. Just access to the best equipment and environment in the city.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* Standard Tier */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 flex flex-col items-center text-center h-full">
              <h3 className="font-display text-2xl uppercase tracking-widest text-zinc-300 mb-2">Standard</h3>
              <div className="font-display text-5xl font-black text-white mb-6">₹1,500<span className="text-lg text-zinc-500 font-medium tracking-normal">/mo</span></div>
              <ul className="space-y-4 mb-8 text-zinc-400 w-full text-left">
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-zinc-600" /> General Access (6 AM - 10 PM)</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-zinc-600" /> Free Weights Area</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-zinc-600" /> Basic Cardio Equipment</li>
              </ul>
              <button className="mt-auto w-full py-4 border-2 border-zinc-700 text-white font-bold uppercase tracking-wider hover:bg-zinc-800 transition-colors">
                Select Standard
              </button>
            </div>

            {/* Elite Dragon (Recommended) */}
            <div className="bg-zinc-900 border-2 border-yellow-500 p-8 flex flex-col items-center text-center h-full md:scale-110 shadow-2xl glow-yellow relative z-10">
              <div className="absolute top-0 inset-x-0 -translate-y-1/2 flex justify-center">
                <span className="bg-yellow-500 text-black text-xs font-black uppercase tracking-widest px-4 py-1">Most Recommended</span>
              </div>
              <h3 className="font-display text-3xl uppercase tracking-widest text-yellow-500 mb-2 mt-4">Elite Dragon</h3>
              <div className="font-display text-6xl font-black text-white mb-6 drop-shadow-md">₹3,500<span className="text-lg text-zinc-500 font-medium tracking-normal">/mo</span></div>
              <ul className="space-y-4 mb-8 text-zinc-300 w-full text-left font-medium">
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-yellow-500" /> 24/7 Unlimited Access</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-yellow-500" /> Custom Monthly Diet Plan</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-yellow-500" /> Access to Recovery Lounges</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-yellow-500" /> Elite Powerlifting Zones</li>
              </ul>
              <button className="mt-auto w-full py-4 bg-yellow-500 text-black font-black uppercase tracking-wider hover:bg-yellow-400 transition-colors clip-diagonal">
                Become a Dragon
              </button>
            </div>

            {/* Legendary Tier */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 flex flex-col items-center text-center h-full">
              <h3 className="font-display text-2xl uppercase tracking-widest text-zinc-300 mb-2">Legendary</h3>
              <div className="font-display text-5xl font-black text-white mb-2">₹15,000<span className="text-lg text-zinc-500 font-medium tracking-normal">/yr</span></div>
              <div className="text-yellow-500 text-sm font-bold uppercase mb-6 tracking-widest">Save ₹3,000 yearly</div>
              <ul className="space-y-4 mb-8 text-zinc-400 w-full text-left">
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-zinc-600" /> All Elite Dragon Benefits</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-zinc-600" /> Priority Entry & Lockers</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-zinc-600" /> Exclusive Factory Merch</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-zinc-600" /> 1 PT Session per month</li>
              </ul>
              <button className="mt-auto w-full py-4 border-2 border-zinc-700 text-white font-bold uppercase tracking-wider hover:bg-zinc-800 transition-colors">
                Commit Yearly
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="bg-zinc-950 pt-20 pb-10 border-t border-zinc-900 border-t-[3px] border-t-yellow-500 border-opacity-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src={logoImg} alt="Muscle Mind Factory" className="h-10 w-10 object-cover rounded shadow" />
                <span className="font-display text-2xl font-black uppercase tracking-tighter">
                  Muscle Mind <span className="text-yellow-500">Factory</span>
                </span>
              </div>
              <p className="text-zinc-500 max-w-sm mb-8 leading-relaxed">
                Chennai's elite hardcore training facility. We don't build bodies; we forge war machines. No excuses, just absolute performance.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:text-yellow-500 hover:border-yellow-500 transition-all text-zinc-400">
                  IG
                </a>
                <a href="#" className="w-10 h-10 bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:text-yellow-500 hover:border-yellow-500 transition-all text-zinc-400">
                  FB
                </a>
                <a href="#" className="w-10 h-10 bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:text-yellow-500 hover:border-yellow-500 transition-all text-zinc-400">
                  X
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-display text-lg font-bold uppercase tracking-widest text-zinc-100 mb-6">Headquarters</h4>
              <ul className="space-y-4 text-zinc-400">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-yellow-500 mt-1 shrink-0" />
                  <span>100 Iron Forge Street,<br/>Anna Nagar, Chennai,<br/>Tamil Nadu 600040</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg font-bold uppercase tracking-widest text-zinc-100 mb-6">Contact</h4>
              <ul className="space-y-4 text-zinc-400">
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-yellow-500 shrink-0" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-yellow-500 shrink-0" />
                  <span>roar@musclemindfactory.in</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-sm font-medium">
            <p>&copy; {new Date().getFullYear()} Muscle Mind Factory. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
              <a href="#" className="hover:text-zinc-400">Terms of Service</a>
              <a href="#" className="hover:text-zinc-400">Gym Rules</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}