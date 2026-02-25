
// // // import ProfileCard from "../components/core/ProfileCard"; // Aapka pehle wala card
// // // import PremiumBenefitsCard from "../components/core/PremiumBenefitsCard"; // Naya wala card
// // // import StartConversationCard from "../components/core/StartConversationCard"; 
// // // import ExploreMatchesCard from "../components/core/ExploreMatchesCard"; 
// // // export default function Dashboard() {
// // //   return (
// // //     <>
// // //       <style>{`
// // //         .main-wrapper {
// // //           display: flex;
// // //           justify-content: center;
// // //           align-items: center;
// // //           gap: 40px; /* Cards ke beech ka gap */
// // //           min-height: 100vh;
// // //           background-color: #f5f5f7;
// // //           padding: 20px;
// // //           flex-wrap: wrap; /* Mobile par cards upar-neeche ho jayein */
// // //         }

// // //         /* Dono cards ki width control karne ke liye */
// // //         .card-column {
// // //           flex: 1;
// // //           max-width: 480px; 
// // //           display: flex;
// // //           justify-content: center;
// // //         }
// // //         .wide-card {
// // //   max-width: 900px;   /* yahan jitni chahiye utni */
// // //     }

// // //         @media (max-width: 1024px) {
// // //           .main-wrapper {
// // //             gap: 20px;
// // //           }
// // //         }
// // //       `}</style>

// // //       <div className="main-wrapper">
// // //         <div className="card-column">
// // //           <ProfileCard />
// // //         </div>
// // //           <div className="card-column">
// // //           <ExploreMatchesCard />
// // //         </div>
    
// // //       </div>
// // //        <div className="main-wrapper">
// // //         <div className="card-column">
// // //           <StartConversationCard />
// // //         </div>
        
       
// // //         <div className="card-column">
// // //           <PremiumBenefitsCard />
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // }


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
          padding: 40px 32px;
        }

        .dashboard-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .dashboard-header h1 {
          font-size: 32px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 8px 0;
          line-height: 1.2;
        }

        .dashboard-header p {
          font-size: 14px;
          color: #6b6b6b;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.4;
        }

        .dashboard-container {
          max-width: 1320px;
          margin: 0 auto;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(10, 1fr); /* 10 equal columns */
          grid-template-rows: minmax(280px, auto) minmax(280px, auto);
          gap: 18px;
        }

        /* Row 1: SMALL left, BIG right */
        .profile { 
          grid-column: 1 / 5; /* 3 columns = SMALL */
          grid-row: 1;
        }
        
        .explore { 
          grid-column: 5 / 11; /* 7 columns = BIG */
          grid-row: 1;
        }
        
        /* Row 2: BIG left, SMALL right - DIAGONAL! */
        .start { 
          grid-column: 1 / 7; /* 6 columns = BIG */
          grid-row: 2;
        }
        
        .premium { 
          grid-column: 7 / 11; /* 4 columns = SMALL */
          grid-row: 2;
        }

     

        @media (max-width: 1024px) {
          .dashboard-wrapper {
            padding: 32px 20px;
          }

          .dashboard-header h1 {
            font-size: 28px;
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
            font-size: 24px;
          }
        }
      `}</style>

      <div className="dashboard-wrapper">
        <div className="dashboard-header">
          <h1>How MATCH AT FIRST SWIPE Works</h1>
          <p>
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