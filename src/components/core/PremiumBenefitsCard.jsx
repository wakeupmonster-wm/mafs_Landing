// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const smoothSpring = {
  type: "spring",
  stiffness: 100,
  damping: 15,
  mass: 0.8
};

const iconVariants = {
  initial: { opacity: 0, scale: 0, x: "-50%", y: "-50%" },
  hover: (p) => ({
    opacity: 1, 
    scale: 1, 
    x: p.tx, 
    y: p.ty,
    transition: { ...smoothSpring, delay: p.delay || 0 },
  }),
};

export default function PremiumBenefitsCard() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <style>{`
        .premium-container {
          width: 100%;
          // max-width: 480px;
          background: white;
          border-radius: 40px;
          border: 10px solid #ededed;
          overflow: visible; 
          cursor: pointer;
          box-shadow: 0 4px 24px rgba(0,0,0,0.03);
        }
        .visual-area {
          position: relative;
          height: 350px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .bg-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 35%, rgba(193, 244, 246, 0.9) 0%, rgba(255, 255, 255, 0) 75%);
          opacity: 0;
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1;
        }
        .premium-container:hover .bg-glow { opacity: 1; }
        .icon-item { position: absolute; top: 50%; left: 50%; z-index: 50; pointer-events: none; }
        .icon-circle {
          width: 58px; height: 58px; background: white; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1); border: 1px solid rgba(0,0,0,0.02);
        }
        .premium-inner-card {
          position: relative; z-index: 10; background: white; border-radius: 28px;
          width: 300px; padding: 24px; box-shadow: 0 20px 50px rgba(0,0,0,0.06);
          border: 1px solid rgba(0,0,0,0.04);
        }
        .plus-tag { background: #333; color: white; padding: 5px 14px; border-radius: 12px; font-size: 12px; font-weight: 600; }
        .action-btn { width: 100%; background: #1a1a1a; color: white; border: none; padding: 16px; border-radius: 100px; font-weight: 700; }
      `}</style>

      <motion.div className="premium-container" initial="initial" whileHover="hover">
        <div className="visual-area">
          <div className="bg-glow" />
          
          <motion.div className="icon-item" variants={iconVariants} custom={{ tx: "-120px", ty: "-150px" }} animate={{ y: ["0%", "-8%", "0%"] }} transition={{ y: { repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.6 } }}>
            <div className="icon-circle">🔄</div>
          </motion.div>

          <motion.div className="icon-item" variants={iconVariants} custom={{ tx: "-10px", ty: "-180px" }} animate={{ y: ["0%", "-10%", "0%"] }} transition={{ y: { repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.7 } }}>
            <div className="icon-circle">⚡</div>
          </motion.div>

          <motion.div className="icon-item" variants={iconVariants} custom={{ tx: "100px", ty: "-140px" }} animate={{ y: ["0%", "-8%", "0%"] }} transition={{ y: { repeat: Infinity, duration: 2.8, ease: "easeInOut", delay: 0.8 } }}>
            <div className="icon-circle">⭐</div>
          </motion.div>

          <motion.div className="premium-inner-card" variants={{ initial: { scale: 1, y: 0 }, hover: { scale: 0.92, y: 35, transition: { duration: 0.5 } } }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h4 style={{ margin: 0 }}>Premium</h4>
              <span className="plus-tag">Plus</span>
            </div>
            <p style={{ color: '#777', fontSize: '14px', margin: '10px 0 20px' }}>Go deeper with smarter matches.</p>
            <div style={{ height: '46px', background: 'linear-gradient(to top, #EE6EFF, transparent)', borderRadius: '12px', marginBottom: '20px' }} />
            <button className="action-btn">BUY NOW</button>
          </motion.div>
        </div>

        <div style={{ padding: '40px' }}>
          <h2 style={{ margin: 0, fontSize: '30px', fontWeight: '800' }}>Unlock Premium Benefits</h2>
          <p style={{ color: '#666', marginTop: '10px', fontSize: '17px' }}>Premium members get access to exclusive features and daily rewards.</p>
        </div>
      </motion.div>
    </div>
  );
}