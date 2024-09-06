import styles from "./membership.module.css"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import Image from "next/image"


export default function membership() {
  const membershipData = [
    { club: "MNRC", type:"RECREATIONAL SOCIAL", fullPrice: "$47.00", pensionerPrice: "$43.00", juniorPrice: "N/A" },
    { club: "MNRC", type:"RECREATIONAL ORDINARY", fullPrice: "$61.00", pensionerPrice: "$57.00", juniorPrice: "N/A" },
    { club: "MORLEY BOWLING CLUB", type: "SOCIAL", fullPrice: "$120.00", pensionerPrice: "$110.00", juniorPrice: "$20.00" },
    { club: "MORLEY BOWLING CLUB", type: "ORDINARY", fullPrice: "$190.00", pensionerPrice: "$175.00", juniorPrice: "N/A" },
    { club: "NORANDA DARTS CLUB", type: "SOCIAL", fullPrice: "$51.00", pensionerPrice: "$47.00", juniorPrice: "N/A" },
    { club: "NORANDA DARTS CLUB", type: "ORDINARY", fullPrice: "$61.00", pensionerPrice: "$57.00", juniorPrice: "N/A" },
    { club: "NORANDA TENNIS CLUB", type: "ORDINARY", fullPrice: "$130.00", pensionerPrice: "$120.00", juniorPrice: "$50.00" },
    { club: "BRUMBIES COUNTRY MUSIC CLUB", type: "SOCIAL", fullPrice: "$51.00", pensionerPrice: "$47.00", juniorPrice: "N/A" },
    { club: "BRUMBIES COUNTRY MUSIC CLUB", type: "ORDINARY", fullPrice: "$61.00", pensionerPrice: "$57.00", juniorPrice: "N/A" },
    { club: "DARTS/BOWLS MEMBER", type: "ORDINARY", fullPrice: "$190.00", pensionerPrice: "$175.00", juniorPrice: "N/A" },
    { club: "BOWLS/TENNIS MEMBER", type: "ORDINARY", fullPrice: "$255.00", pensionerPrice: "$236.00", juniorPrice: "N/A" },
    { club: "NORANDA CITY FOOTBALL CLUB", type: "RATES BASED ON APPLICATION" },    
  ];  

  const getFormattedYear = () => {
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const shortCurrentYear = String(currentYear).slice(-2)
    const shortNextYear = String(nextYear).slice(-2)

    return `${shortCurrentYear}/${shortNextYear}`
  };
  
  return (
    <div className={styles.container}>
      <div className = {styles.backgroundImage}>
        <Image
          src="/images/placeholderBowls.jpg"
          alt="Background Image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <NavBar />

        <div className={styles.whiteBackround}>
          <div className={styles.content}>
            <p>
              Are you looking for a community focused club that embraces family values, works with local agencies, and sporting codes to bring
              high quality facilities for our members. Let us help you link together with other like minded community groups and members.
            </p>
            
            <br />

            <p>
              Memberships include use of club facilities 7 days a week, including the Sports Bar where you can watch the footy or catch up on the 
              latest sporting activities. You have access to discounted function room hire, and you can place your bets on our new and updated TAB machines.
            </p>

            <br />

            <p>
              There are a nuymber of membership oppourtunites based on your interest, including Social Members and Full Memberships where you have a say
              on how the club is run.
            </p>

            <br />

            <p>
              Below is a table of our membership rates for the {getFormattedYear()} financial year . However, please feel free to call and enquire for more information.
            </p>

            <br />

            <table className={styles.membershipTable}>
            <thead>
              <tr>
                <th>Club</th>
                <th>Membership Type</th>
                <th>Full Price</th>
                <th>Pensioner Price</th>
                <th>Junior Price</th>
              </tr>
            </thead>
            <tbody>
             {membershipData.map((membership, index) => (
               <tr key={index}>
                 <td>{membership.club}</td>
                 <td>{membership.type}</td>
                 <td>{membership.fullPrice}</td>
                 <td>{membership.pensionerPrice}</td>
                 <td>{membership.juniorPrice}</td>
               </tr>
              ))}
            </tbody>
          </table>

          <br />

          <p>
            If you wish to become a member please download the form below and either bring it into the club, or email it to secretary@mnrc.com.au
          </p>

          <a href="public/MNRC Nomination Form 2024-2025.pdf" download >
            MNRC Nomination Form 2024-2025.pdf
          </a>
               
        </div>
      </div>

      <Footer />

    </div>
  )
}