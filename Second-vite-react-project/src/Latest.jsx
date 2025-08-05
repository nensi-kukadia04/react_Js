function Latest() {
  return (
    <body style={{ backgroundColor: "#decdcdff" }}>
      <div
        style={{
          marginTop: "50px",
          paddingInline: "100px",
        }}
      >
        <h1 style={{ color: "#5F010B",textAlign: "center" }}>
          Virat Kohli : Iconic Indian Cricket Legend
        </h1>
        <p>
          Virat Kohli is an iconic Indian cricketer and one of the greatest
          batsmen in modern cricket. Born on November 5, 1988, in Delhi, India,
          he is known for his aggressive batting style, exceptional consistency,
          and strong leadership skills.
        </p>
        <ul>
          Role:
          <li>Right-handed batsman, occasional medium-pace bowler Major Teams:India,</li> 
          <li>Royal Challengers Bangalore (IPL), Delhi (Domestic Cricket)</li>
          <li>Debut: ODI (2008), Test (2011), T20I (2010)</li>
        </ul>
        <ul>
            Achievements:
            <li>ICC ODI Player of the Year (2012, 2017)</li>
            <li>ICC Test Player of the Year (2018)</li>
            <li>Former Captain of the Indian cricket team (Tests, ODIs, and T20Is)</li>
            <li>Fastest to 10,000+ ODI runs (beating Sachin Tendulkar’s record)</li>
            <li>Most centuries in ODI cricket (50) (surpassing Sachin’s 49)</li>
            <li>Only cricketer with 3,000+ runs in T20Is</li>
            <li>First player to score 50 ODI centuries</li>
        </ul>
        <img
          src="./../public/virat-kohli.jpg"
          alt=""
          width="50%"
          style={{ marginBlock: "30px" , display: "block", marginLeft: "auto", marginRight: "auto" }}
        />
      </div>
    </body>
  );
}

export default Latest;
