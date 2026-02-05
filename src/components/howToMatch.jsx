
// // import ProfileCard from "../components/core/ProfileCard"; // Aapka pehle wala card
// // import PremiumBenefitsCard from "../components/core/PremiumBenefitsCard"; // Naya wala card
// // import StartConversationCard from "../components/core/StartConversationCard"; 
// // import ExploreMatchesCard from "../components/core/ExploreMatchesCard"; 
// // export default function Dashboard() {
// //   return (
// //     <>
// //       <style>{`
// //         .main-wrapper {
// //           display: flex;
// //           justify-content: center;
// //           align-items: center;
// //           gap: 40px; /* Cards ke beech ka gap */
// //           min-height: 100vh;
// //           background-color: #f5f5f7;
// //           padding: 20px;
// //           flex-wrap: wrap; /* Mobile par cards upar-neeche ho jayein */
// //         }

// //         /* Dono cards ki width control karne ke liye */
// //         .card-column {
// //           flex: 1;
// //           max-width: 480px; 
// //           display: flex;
// //           justify-content: center;
// //         }
// //         .wide-card {
// //   max-width: 900px;   /* yahan jitni chahiye utni */
// //     }

// //         @media (max-width: 1024px) {
// //           .main-wrapper {
// //             gap: 20px;
// //           }
// //         }
// //       `}</style>

// //       <div className="main-wrapper">
// //         <div className="card-column">
// //           <ProfileCard />
// //         </div>
// //           <div className="card-column">
// //           <ExploreMatchesCard />
// //         </div>
    
// //       </div>
// //        <div className="main-wrapper">
// //         <div className="card-column">
// //           <StartConversationCard />
// //         </div>
        
       
// //         <div className="card-column">
// //           <PremiumBenefitsCard />
// //         </div>
// //       </div>
// //     </>
// //   );
// // }


// import ProfileCard from "../components/core/ProfileCard";
// import ExploreMatchesCard from "../components/core/ExploreMatchesCard";
// import StartConversationCard from "../components/core/StartConversationCard";
// import PremiumBenefitsCard from "../components/core/PremiumBenefitsCard";

// export default function Dashboard() {
//   return (
//     <>
//       <style>{`
//         .dashboard {
//           min-height: 100vh;
//           background: #f5f5f7;
//           padding: 40px;
//           display: grid;
//           grid-template-columns: 1fr 1.35fr; /* 👈 small | big */
//           gap: 32px;
//         }

//         .card {
//           width: 100%;
//         }

//         /* mobile */
//         @media (max-width: 1024px) {
//           .dashboard {
//             grid-template-columns: 1fr;
//             padding: 20px;
//           }
//         }
//       `}</style>

//       <div className="dashboard">
//         {/* Row 1 */}
//         <div className="card">
//           <ProfileCard /> {/* small */}
//         </div>

//         <div className="card">
//           <ExploreMatchesCard /> {/* BIG */}
//         </div>

//         {/* Row 2 */}
//         <div className="card">
//           <PremiumBenefitsCard /> {/* small */}
//         </div>
         

//         <div className="card">
//           <StartConversationCard /> 
          
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
        .dashboard {
          min-height: 100vh;
          background: #f5f5f7;
          padding: 40px;
          display: grid;
          grid-template-columns: 1fr 1.35fr; /* small | BIG */
          gap: 32px;
          grid-template-areas:
            "profile explore"
            "start premium";
        }

        .profile { grid-area: profile; }
        .explore { grid-area: explore; }
        .start   { grid-area: start; }
        .premium { grid-area: premium; }

        .card {
          width: 100%;
        }

        @media (max-width: 1024px) {
          .dashboard {
            grid-template-columns: 1fr;
            grid-template-areas:
              "profile"
              "explore"
              "start"
              "premium";
            padding: 20px;
          }
        }
      `}</style>

      <div className="dashboard">
        <div className="card profile">
          <ProfileCard /> {/* SMALL */}
        </div>

        <div className="card explore">
          <ExploreMatchesCard /> {/* BIG */}
        </div>

        <div className="card start">
          <StartConversationCard /> {/* BIG – SAME AS EXPLORE */}
        </div>

        <div className="card premium">
          <PremiumBenefitsCard /> {/* SMALL */}
        </div>
      </div>
    </>
  );
}