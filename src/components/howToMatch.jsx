// import ProfileCard from "../components/core/ProfileCard";
// import ExploreMatchesCard from "../components/core/ExploreMatchesCard";
// import StartConversationCard from "../components/core/StartConversationCard";
// import PremiumBenefitsCard from "../components/core/PremiumBenefitsCard";

// export default function Dashboard() {
//   return (
//     <>
//       <style>{`
//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         .dashboard-wrapper {
//           min-height: 100vh;
//           padding: 40px 32px;
//         }

//         .dashboard-header {
//           display : flex;
//           flex-direction: column;
//           gap: 6px;
//           text-align: center;
//           margin-bottom: 32px;
//         }

//         .dashboard-header h1 {
//           width:420px;
//           font-size: 36px;
//           font-weight: 700;
//           color: #1a1a1a;
//           margin: 0 auto;
//           line-height: 1.2;
//         }

//         .dashboard-header p {
//           width:400px;
//           font-size: 14px;
//           color: #6b6b6b;
//           max-width: 600px;
//           margin: 0 auto;
//           line-height: 1.4;
//         }

//         .dashboard-container {
//           max-width: 1200px;
//           margin: 0 auto;
//         }

//         .dashboard-grid {
//           display: grid;
//           grid-template-columns: repeat(10, 1fr); /* 10 equal columns */
//           grid-template-rows: minmax(280px, auto) minmax(280px, auto);
//           gap: 18px;
//         }

//         /* Row 1: SMALL left, BIG right */
//         .profile {
//           grid-column: 1 / 5; /* 3 columns = SMALL */
//           grid-row: 1;
//         }

//         .explore {
//           grid-column: 5 / 12; /* 7 columns = BIG */
//           grid-row: 1;
//         }

//         /* Row 2: BIG left, SMALL right - DIAGONAL! */
//         .start {
//           grid-column: 1 / 6; /* 6 columns = BIG */
//           grid-row: 2;
//         }

//         .premium {
//           grid-column: 6 / 12; /* 4 columns = SMALL */
//           grid-row: 2;
//         }

//         @media (max-width: 1024px) {
//           .dashboard-wrapper {
//             padding: 32px 20px;
//           }

//           .dashboard-header h1 {
//             font-size: 28px;
//           }

//           .dashboard-grid {
//             grid-template-columns: 1fr;
//             grid-template-rows: auto;
//           }

//           .profile { grid-column: 1; grid-row: 1; }
//           .explore { grid-column: 1; grid-row: 2; }
//           .start { grid-column: 1; grid-row: 3; }
//           .premium { grid-column: 1; grid-row: 4; }
//         }

//         @media (max-width: 640px) {
//           .dashboard-wrapper {
//             padding: 24px 16px;
//           }

//           .dashboard-header h1 {
//             font-size: 24px;
//           }
//         }
//       `}</style>

//       <div className="dashboard-wrapper">
//         <img
//           src="/Light → Figure - Line Gradient → ZzXR4Xa701pprKwAZYChrznQWE.png.png"
//           className="w-48 h-2 mb-6 mx-auto"
//           alt=""
//         />
//         <div className="dashboard-header">
//           <h1 className="!font-sans">How MATCH AT FIRST SWIPE Works</h1>
//           <p className="font-inter">
//             From setting up your profile to unlocking premium rewards,
//             everything is designed to stay simple and effortless.
//           </p>
//         </div>

//         <div className="dashboard-container">
//           <div className="dashboard-grid">
//             <div className="card profile">
//               <ProfileCard />
//             </div>

//             <div className="card explore">
//               <ExploreMatchesCard />
//             </div>

//             <div className="card start">
//               <StartConversationCard />
//             </div>

//             <div className="card premium">
//               <PremiumBenefitsCard />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import ProfileCard from "../components/core/ProfileCard";
import ExploreMatchesCard from "../components/core/ExploreMatchesCard";
import StartConversationCard from "../components/core/StartConversationCard";
import PremiumBenefitsCard from "../components/core/PremiumBenefitsCard";

export default function Dashboard() {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box; 
        }

        .dashboard-wrapper {
          min-height: 100vh;
        }

        .dashboard-header {
          display: flex;
          flex-direction: column;
          gap: 6px;
          text-align: center;
          margin-bottom: 32px;
        }

        .dashboard-header h1 {
          width: 420px;
          max-width: 100%;
          font-size: 36px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 auto;
          line-height: 1.2;
        }

        .dashboard-header p {
          width: 400px;
          max-width: 100%;
          font-size: 14px;
          color: #6b6b6b;
          margin: 0 auto;
          line-height: 1.4;
        }

        .dashboard-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(10, 1fr);
          grid-template-rows: minmax(280px, auto) minmax(280px, auto);
          gap: 18px;
        }

        .profile { 
          grid-column: 1 / 5;
          grid-row: 1;
        }
        
        .explore { 
          grid-column: 5 / 12;
          grid-row: 1;
        }
        
        .start { 
          grid-column: 1 / 6;
          grid-row: 2;
        }
        
        .premium { 
          grid-column: 6 / 12;
          grid-row: 2;
        }

        @media (max-width: 1024px) {
          .dashboard-wrapper {
            padding: 32px 20px;
          }

          .dashboard-header h1 {
            font-size: 28px;
            width: 100%;
          }

          .dashboard-header p {
            width: 100%;
            font-size: 13px;
          }

          .dashboard-grid {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
          }

          .profile { grid-column: 1; grid-row: 1; }
          .explore { grid-column: 1; grid-row: 2; }
          .start { grid-column: 1; grid-row: 3; }
          .premium { grid-column: 1; grid-row: 4; }
        }

        @media (max-width: 640px) {
          .dashboard-wrapper {
            padding: 24px 16px;
          }

          .dashboard-header h1 {
            font-size: 22px;
            width: 100%;
          }

          .dashboard-header p {
            font-size: 12px;
            width: 100%;
          }
        }
      `}</style>

      <div className="dashboard-wrapper wrapper">
        <img
          src="/Light → Figure - Line Gradient → ZzXR4Xa701pprKwAZYChrznQWE.png.png"
          className="w-48 h-2 mb-6 mx-auto"
          alt=""
          loading="lazy"
        />

        {/* ✅ Only this div changed - added max-w-full to prevent overflow */}
        <div className="dashboard-header">
          <h1 className="!font-sans">How MATCH AT FIRST SWIPE Works</h1>
          <p className="font-inter">
            From setting up your profile to unlocking premium rewards,
            everything is designed to stay simple and effortless.
          </p>
        </div>

        <div className="dashboard-container">
          <div className="dashboard-grid">
            <div className="card profile">
              <ProfileCard />
            </div>

            <div className="card explore">
              <ExploreMatchesCard />
            </div>

            <div className="card start">
              <StartConversationCard />
            </div>

            <div className="card premium">
              <PremiumBenefitsCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
