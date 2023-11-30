import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import "../styles/Workout.css";
import ExCard from "../components/ExCard";

const Workout = () => {
  return (
    <div>
      <div>
        <h1 className="workoutFormHeading">GET YOUR WORKOUT PLAN</h1>
        <h3 className="plan">PUSH PULL LEGS</h3>
        <div className="planB">
          <button className="but">PUSH</button>
          <button className="but">PULL</button>
          <button className="but">LEGS</button>
        </div>
        <h3 className="plan">UPPER/LOWER</h3>
        <div className="planB">
          <button className="but">UPPER</button>
          <button className="but">LOWER</button>
        </div>
        <h3 className="plan">FULL-BODY</h3>
        <div className="planB">
          <button className="but">FULL-BODY</button>
        </div>
      </div>
      <ExCard
        title="Living Room Sofa"
        description="This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design."
        price="$450"
        imageUrl="/path-to-your-image.jpg" // Replace with your image path
      />

      <div className="splits">
        <Tabs align="center">
          <TabList>
            <Tab
              sx={{
                borderRight: "none",
                borderTop: "none",
                borderLeft: "none",
                borderBottom: "none",
                bg: "white",
                _selected: {
                  borderBottom: "2px solid",
                },
              }}
            >
              <p className="splitTab">PPL</p>
            </Tab>
            <Tab
              sx={{
                borderRight: "none",
                borderTop: "none",
                borderLeft: "none",
                borderBottom: "none",
                bg: "white",
                _selected: {
                  borderBottom: "2px solid",
                },
              }}
            >
              <p className="splitTab">FULL-BODY</p>
            </Tab>
            <Tab
              sx={{
                borderRight: "none",
                borderTop: "none",
                borderLeft: "none",
                borderBottom: "none",
                bg: "white",
                _selected: {
                  borderBottom: "2px solid",
                },
              }}
            >
              <p className="splitTab">UPPER/LOWER</p>
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <div className="splitTitle">
                <h1>PUSH PULL LEGS</h1>
              </div>
              <div>
                <p className="splitIntro">
                  The Push/Pull/Legs split. Here's a quick breakdown:
                </p>
              </div>
              <div className="Explanation">
                <p>
                  <strong>Push Days:</strong> These workouts focus on exercises
                  that involve pushing movements, mainly targeting the chest,
                  shoulders, and triceps. Common exercises include bench
                  presses, shoulder presses, and tricep dips.
                </p>
                <p>
                  <strong>Pull Days:</strong> Pull days concentrate on exercises
                  that involve pulling movements. These primarily work the back
                  and biceps. Typical exercises are pull-ups, rows, and bicep
                  curls.
                </p>
                <p>
                  <strong>Legs Days:</strong> On leg days, you focus on your
                  lower body, working the quadriceps, hamstrings, calves, and
                  glutes. Squats, deadlifts, and lunges are common leg
                  exercises.
                </p>
              </div>
              <div className="additional">
                <p>
                  <strong>Benefits:</strong> The Push/Pull/Legs split is both
                  efficient and versatile, ideal for targeted muscle development
                  and strength training. It allows for muscle groups to be
                  worked twice a week, providing balanced growth and recovery.
                  Suitable for various fitness levels, this split can be
                  customized to individual goals
                </p>
                <p>
                  <strong>Frequency:</strong> The Push/Pull/Legs split is
                  commonly structured as a 6-day workout routine, cycling
                  through push, pull, and legs exercises twice a week. For
                  instance, you might do push exercises on Monday, pull on
                  Tuesday, legs on Wednesday, then repeat the cycle starting
                  Thursday, with Sunday as a rest day. This frequency maximizes
                  muscle stimulation while allowing for adequate recovery.
                  However, it's flexible and can be modified to a 3-day schedule
                  or other variations to suit personal preferences and recovery
                  requirements.
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="splitTitle">
                <h1>FULL-BODY</h1>
              </div>
              <div>
                <p className="splitIntro">
                  The full-body split is a straightforward approach for strength
                  training and general fitness. Here's a simple explanation:
                </p>
              </div>
              <div className="Explanation">
                <p>
                  <strong>What It Is:</strong> In a full-body workout split, you
                  exercise all the major muscle groups of your body in each
                  workout session. This typically includes muscles in your legs,
                  back, chest, shoulders, arms, and core.
                </p>
              </div>
              <div className="additional">
                <p>
                  <strong>Benefits:</strong> This type of split is great for
                  beginners or those with limited time, as it provides a
                  balanced workout that targets all major muscle groups in a
                  single session. It can lead to balanced muscle development and
                  strength gains throughout the body. It's also very flexible,
                  as you can change the exercises in each workout to add variety
                  or focus on specific areas.
                </p>
                <p>
                  <strong>Frequency:</strong> Full-body workouts are usually
                  done 3-4 times per week, depending on your fitness level and
                  goals. This frequency allows for adequate recovery time
                  between sessions, as each session involves working the entire
                  body.
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="splitTitle">
                <h1>UPPER/LOWER</h1>
              </div>
              <div>
                <p className="splitIntro">
                  The upper/lower split divides your training sessions into two
                  main types: one focusing on upper body and the other on the
                  lower body. Here's a basic overview:
                </p>
              </div>
              <div className="Explanation">
                <p>
                  <strong>Upper Body Days:</strong> On these days, you focus on
                  exercises that work the muscles in the upper part of your
                  body. This includes your chest, back, shoulders, arms, and
                  sometimes abs.
                </p>
                <p>
                  <strong>Lower Body Days:</strong> During lower body days, your
                  exercises target the muscles in your lower body. This
                  generally means working on your quadriceps, hamstrings,
                  glutes, and calves.
                </p>
              </div>
              <div className="additional">
                <p>
                  <strong>Benefits:</strong> This split is efficient and
                  flexible. It allows for a higher workout frequency for each
                  muscle group compared to a full-body workout, as each muscle
                  group is targeted twice a week. It's great for both muscle
                  building and strength training, and can be tailored for
                  different fitness levels.
                </p>
                <p>
                  <strong>Frequency:</strong> The upper/lower split is typically
                  done 4 days a week, alternating between upper and lower body
                  workouts. For example, you might do upper body on Monday,
                  lower body on Tuesday, rest on Wednesday, then repeat the
                  cycle on Thursday and Friday with rest over the weekend. This
                  schedule can be adjusted based on personal preference and
                  recovery needs.
                </p>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default Workout;
