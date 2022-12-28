import React from "react";
import TeamCard from "./components/TeamCard";

const About = ({ page }) => {
  return (
    <>
      <div className="aboutPage">
        {page === "about" ? (
          <div className="about">
            <h1> About AAJ</h1>
            <div className="content">
              <p>
                Our JNU days are the common thread that binds us and being
                alumni of JNU is a natural continuation of that journey. We all
                should be connected and cherish the memories of the most
                important years of our lives spent in the environs of JNU.
              </p>
              <p>
                A major credit for our success in life is attributed to JNU and
                its unique way of formal and informal teaching, learning and
                training. Despite being settled in our respective routines and
                careers and striving for greater heights, we can never forget
                the contribution of JNU in shaping our lives.
              </p>
              <p>
                AAJ is proud to have, as its alumni, a collective of more than
                80,000 social scientists, scientists, civil servants, literary
                critics, media experts, foreign language experts, journalists,
                political leaders, social activists, technologists, managers and
                entrepreneurs, who have served and still contributing
                meaningfully to the growth and betterment of our society. This
                number needs to and will continue to grow.{" "}
              </p>
            </div>
          </div>
        ) : (
          <div className="team">
            <h1>Executive Committee</h1>
            <div className="teamCardContainer">
              {[...Array(15).keys()].map((card) => (
                <TeamCard />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default About;
