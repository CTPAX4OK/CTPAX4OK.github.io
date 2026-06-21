import { motion } from 'framer-motion';
import { MessagesSquare, Heart, Terminal, Cpu } from 'lucide-react';

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-200 selection:bg-blue-500/30">
      
      {/* Background ambient glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <header className="container mx-auto px-6 py-8 flex justify-between items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter text-white"
        >
          CTPAX4OK
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex gap-4"
        >
          <a href="https://github.com/CTPAX4OK" target="_blank" rel="noreferrer" className="p-2 bg-zinc-900 rounded-full hover:bg-zinc-800 hover:text-white transition-colors border border-zinc-800">
            <Github size={20} />
          </a>
          <div className="p-2 bg-zinc-900 rounded-full hover:bg-zinc-800 hover:text-white transition-colors border border-zinc-800 cursor-help" title="Discord: ctpax4ok">
            <MessagesSquare size={20} />
          </div>
        </motion.div>
      </header>

      {/* Hero */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 py-24 md:py-32 text-center relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-white">
          CTPAX4OK
        </h1>
        <p className="text-xl text-zinc-400 font-medium tracking-wide">
          Open-source tools & utilities
        </p>
      </motion.section>

      {/* Projects */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-6 pb-32 relative z-10"
      >
        <motion.h2 variants={itemVariants} className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-8 ml-2">
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          
          {/* Win11Optimization */}
          <motion.article variants={itemVariants} className="bg-[#111113] border border-zinc-800 rounded-2xl p-8 glow-on-hover flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Win11Optimization</h3>
                <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-xs font-semibold uppercase tracking-wider text-zinc-400 rounded-full">
                  C# / .NET 8
                </span>
              </div>
              <Cpu className="text-zinc-500" size={28} />
            </div>
            
            <p className="text-zinc-400 leading-relaxed mb-8 flex-grow">
              Модульная и безопасная утилита для тонкой настройки и оптимизации Windows 11 с возможностью полного отката изменений.
            </p>

            <div className="bg-black/50 p-4 rounded-xl border border-zinc-800 font-mono text-sm mb-8 text-zinc-500">
              <div className="text-zinc-600 mb-2"># clone & build</div>
              <div><span className="text-green-500">$</span> git clone https://github.com/CTPAX4OK/Win11Optimization.git</div>
              <div><span className="text-green-500">$</span> cd Win11Optimization</div>
              <div><span className="text-green-500">$</span> dotnet build</div>
            </div>

            <div className="mt-auto grid grid-cols-2 gap-3 relative z-10">
              <a 
                href="https://cybernetpro.online/Win11Optimization/" 
                target="_blank" 
                rel="noreferrer"
                className="block w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-center transition-colors glow-blue-on-hover"
              >
                Visit Website
              </a>
              <a 
                href="https://github.com/CTPAX4OK/Win11Optimization" 
                target="_blank" 
                rel="noreferrer"
                className="block w-full py-3 px-4 bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 text-white font-semibold rounded-xl text-center transition-colors"
              >
                GitHub Repo
              </a>
            </div>
          </motion.article>

          {/* CubeLauncher */}
          <motion.article variants={itemVariants} className="bg-[#111113] border border-zinc-800 rounded-2xl p-8 glow-on-hover flex flex-col h-full relative overflow-hidden">
            {/* Subtle blue accent for CubeLauncher */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full pointer-events-none" />
            
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">CubeLauncher</h3>
                <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-xs font-semibold uppercase tracking-wider text-blue-400/80 rounded-full">
                  TypeScript / React
                </span>
              </div>
              <Terminal className="text-zinc-500" size={28} />
            </div>
            
            <p className="text-zinc-400 leading-relaxed mb-8 flex-grow relative z-10">
              Modern Minecraft launcher built with Next.js and Electron, designed to bridge complex console tools and a user-friendly UI.
            </p>

            <div className="bg-black/50 p-4 rounded-xl border border-zinc-800 font-mono text-sm mb-8 text-zinc-500 relative z-10">
              <div className="text-zinc-600 mb-2"># install & run</div>
              <div><span className="text-green-500">$</span> git clone https://github.com/CTPAX4OK/CubeLauncher.git</div>
              <div><span className="text-green-500">$</span> cd CubeLauncher</div>
              <div><span className="text-green-500">$</span> npm install && npm run dev</div>
            </div>

            <div className="mt-auto grid grid-cols-2 gap-3 relative z-10">
              <a 
                href="https://cybernetpro.online/CubeLauncher/" 
                target="_blank" 
                rel="noreferrer"
                className="block w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-center transition-colors glow-blue-on-hover"
              >
                Visit Website
              </a>
              <a 
                href="https://github.com/CTPAX4OK/CubeLauncher" 
                target="_blank" 
                rel="noreferrer"
                className="block w-full py-3 px-4 bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 text-white font-semibold rounded-xl text-center transition-colors"
              >
                GitHub Repo
              </a>
            </div>
          </motion.article>

        </div>
      </motion.section>

      {/* Support Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 py-24 border-t border-zinc-900 text-center relative z-10"
      >
        <div className="max-w-xl mx-auto">
          <Heart className="mx-auto text-pink-500 mb-6" size={36} />
          <h2 className="text-2xl font-bold text-white mb-4">Support My Work</h2>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            If you find these tools useful, consider supporting development. Every contribution helps keep the projects maintained and free.
          </p>
          <a 
            href="https://donatello.to/CTPAX4OK" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 py-3 px-8 bg-[#3b1c32] text-pink-300 hover:bg-[#4a233e] border border-pink-900/50 rounded-xl font-medium transition-colors"
          >
            Support me on Donatello
          </a>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 text-center text-zinc-600 border-t border-zinc-900 text-sm relative z-10">
        <p>&copy; {new Date().getFullYear()} CTPAX4OK</p>
      </footer>

    </div>
  );
}

function Github({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

export default App;
