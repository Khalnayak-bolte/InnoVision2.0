import bgVideo from '../Resource/BG.mp4';
import logo from "../Resource/InnoLogo.png";
import React, { useState,useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import FF from "../Resource/FF.webp";
import Chess from "../Resource/CHESS.jpg";
import 'swiper/css';
import 'swiper/css/effect-cards';
import Swipe from "../Resource/Swipe.svg";
import KVGT from "../Resource/KVGT.jpg";
import SG from "../Resource/SaleGadget.jpg";
import BB from "../Resource/BlindBizz.jpg";
import FunFusion from "../Resource/FunFusion.jpg";
import TF from "../Resource/Treasure.jpg";
import { EffectCards } from 'swiper/modules';
import CC from "../Resource/CC.jpg"
import './App.css';
import BondB from "../Resource/BondB.jpg"

function App() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cardDetails = {
    1: {
      title: "FREE FIRE",
      title2: "Generel Rules",
      GenerelRules: `1.Game Mode: The tournament will be played in Battle Royale mode is Squad.
2.Map: The designated map for the matches will be [Bermuda, Purgatory & Kalahari].
3.Lobby Rules: A custom room will be created for the tournament. Participants must join using the provided Room ID and Password.
4.Device Requirements: Players must use mobile devices unless specified otherwise. Emulators or other devices are not allowed.
5.Check-In: All players must check in at least [15 minutes] before the match begins.
6.Internet Connection: Players are responsible for ensuring a stable internet connection. Matches will not be paused for disconnections.
7.Behaviour: All participants must demonstrate sportsmanship and respect towards other players and organizers. Toxicity, harassment, or abusive language will not be tolerated.
8.Fair Play: The use of cheats, hacks, or third-party software is strictly prohibited. Any violations will lead to immediate disqualification.`,
      title3: "Gameplay Rules",
      GameplayRules: `1.Teaming:
- Teaming with players outside your team is strictly prohibited.
- Any player found guilty of teaming will be disqualified from the tournament.
2.Weapons and Loot:
- All weapons and items available on the map are allowed.
- No restrictions on loot unless specified prior to the match.
3.Zone Compliance:
- Players must follow the shrinking safe zone during the match.
- Extended camping outside the zone is discouraged and may lead to penalties.
4.Eliminations and Kills:
- Players are allowed to eliminate opponents using any in-game tactics or equipment within the game mechanics.
- Kill points will be awarded based on the tournament's scoring system (if applicable).
5.Bug Exploits:
- Exploiting known or unknown game bugs for an advantage is prohibited.
- Players found exploiting bugs will be immediately disqualified.
6.Re-Entry:
- Players eliminated in a match cannot rejoin the ongoing match.
7.Match Start:
- Matches will start promptly at the scheduled time. Latecomers may not be allowed to join once the match has begun.
8.Organizer Decisions:
- All decisions made by the tournament organizers are final and binding.
- Disputes or concerns must be raised immediately after the match ends.`,
    },
    2: { title: "CHESS", title2: "General Rules", GenerelRules:`  


1. Platform and Time Control  
 - Games will be played on an online chess platform (e.g., Lichess, Chess.com).  
 - Time Control: 10 minutes per player with no increment or delay.

2. Clocks and Timing  
 - The online platform will automatically handle the game clock.  
 - Players are responsible for making their moves within the allotted time.  
 - Running out of time results in a loss, unless the opponent has insufficient mating material.

3. Moves and Touch-Move Rule  
 - The online platform will handle move selection.  
 - Players must confirm their moves before submitting them.

4. Illegal Moves  
 - The platform may automatically detect and correct some illegal moves.  
 - If an illegal move is made and not automatically corrected, the opponent can typically claim a win or request a correction.

5. Recording Moves  
 - The platform automatically records all moves.

6. Draws  
 - Draws are determined by the platform according to standard chess rules:  
   - Stalemate  
   - Repetition  
   - Insufficient Mating Material  
   - Agreement (players can offer or accept draws)  
   - 50-Move Rule

7. Conduct and Etiquette  
 - Players must maintain a respectful and sportsmanlike attitude in all communication.  
 - Abusive language, harassment, or any form of unfair play is prohibited.  
 - Players should adhere to the platform's terms of service and community guidelines.


8. Technical Issues  
 - If a player experiences a technical issue (e.g., internet connection problems), they should report it to the tournament organizer as soon as possible.  
 - The organizer may grant a short delay or, in some cases, allow for a rematch.

9. Other Rules  
 - The latest FIDE (International Chess Federation) rules will be followed for any situations not covered in these regulations.

Disclaimer: These rules and regulations are subject to change at the discretion of the tournament organizers. Any changes will be communicated to the players before the start of the event.
`  },
    3: {
      title: "KVP's GOT TALENT",
      title2: "General Rules",
      GenerelRules: `1.Time limit - 90 Seconds
2.You can perform Anything , Any Genres (Just Show off your skills)
3.No Vulgur or demeaning Actions , No comments on Department , Professors , Religion & Maintain Dignity (For Stand Up Comedy)
4.Judge's Decision will be Final
5.You must Give a Prediction of your score before your performance , in order to match with the Judge's Average Score
6.Any kind of Mischievous Behavior , will lead to on the spot Disqualification
7.There is No Language Barrier`,
    },
    4: { title: "SELL THE GADGET",title2:"General Rules",GenerelRules:`
1. Time limit - 7min(3min for information gathering & 4 min for convencing the judges)
2. You have to sell the product in given time limit to the judges
3. There will be 3 levels 
4. You can use Language's (English, Marathi,Hindi)
5. Judge's Decision will be Final` },
    5: { title: "BLIND VENTURE", title2:"General Rules", GenerelRules:`1.Computers with screens turned off will be provided.

2.A time limit will be set for typing the paragraph (e.g., 2 minutes). Any content typed after the allotted time will not be considered.

3.Participants may start typing only when the event moderator signals.

4.Participants are not allowed to check or correct their work during or after the typing.

5.Once the time is up, participants must stop typing immediately. 

6.Points will be deducted for each error, including typos, missing words, extra words, incorrect punctuation, or capitalization errors.

7.In case of a tie in accuracy, the participant who completes the paragraph faster will be ranked higher.

8.Participants found cheating (e.g., turning on the screen, seeking external help) will be immediately disqualified.

9.Results will be announced after evaluation by the judges.

10.The judge's decision will be final and binding.` },
    6: { title: "FUN FUSION", title2:"General Rules",GenerelRules:`
1. Each participant competes individually, aiming to complete the given activity within the time limit.  
2. The event consists of 3 elimination-based rounds, progressing in difficulty.  
3. Cheating or unsportsmanlike conduct will result in immediate disqualification.  
4. The organizer's decision is final and cannot be challenged.  
5. Participants must follow all instructions and complete tasks fairly to qualify for the next round.` },
    7: { title: "TREASURE FUSION", title2:"General Rules",GenerelRules:`1.Only duo entries will be considered.
2.There will be 3 rounds
3.Participants must have internet access and required devices.  
4.Follow the event timeline strictly.  
5.Complete tasks exactly as described.  
6.Use only permitted resources; no cheating allowed. If any volunteer catches you switching screens, you will be directly disqualified.
7.Organizers' decisions are final.` },
8:{title:"CONTENT CREATION",title2:"Generel Rules",GenerelRules:`
  CONTENT CREATING RULES 
1. Know Your Audience
   - Understand what resonates with your target demographic. Tailor your content to their preferences, interests, and behaviors.

2. Grab Attention Early
   - The first 3-5 seconds should captivate viewers. Start with a hook, whether it’s a visual, intriguing question, or bold statement.

3. Keep It Short & Sweet
   - While Reels can go up to 90 seconds, shorter content (15-30 seconds) tends to perform better. Aim to deliver value quickly.

4. Make it Visually Engaging
   - Use high-quality visuals, good lighting, and appealing colors. Aesthetic quality matters, but creativity is key.
   - Use fast cuts or transitions to keep things dynamic.

5. Use Trending Sounds/Music
   - Leverage popular songs or audio clips to increase visibility. Platforms like Instagram prioritize trending sounds in their algorithm.
   - Sync your content to the beat or use sounds that complement your message.

6. Tell a Story
   - Even in short videos, narrative structure matters. Ensure there’s a clear beginning, middle, and end.
   - You can either follow a linear structure or use a twist at the end to surprise the viewer.

7. Add Captions/Text
   - Not everyone watches with sound on, so adding captions ensures your message reaches a wider audience. It also helps with accessibility.
   - Keep text minimal and legible, but engaging.

8. Encourage Engagement
   - Use clear calls to action (CTAs) like “comment below,” “share this,” or “follow for more.”
   - Ask questions or prompt viewers to engage with your content in the comments or via polls.

9. Be Authentic
   - Authenticity is highly valued by audiences. Be yourself or showcase genuine moments.
   - Behind-the-scenes footage, bloopers, or relatable content often resonate well.

10. Experiment with Formats
   - Mix up content styles: tutorials, tips, challenges, storytelling, reactions, etc.
   - Use different features such as text overlays, stickers, effects, and transitions to keep things fresh.`},
   9:{title:"BOND BLITZ",title2:"General Rules", GenerelRules:`
    1.Only duo entries will be considered.
2.There will be 3 rounds.
3.Each round have time limit.
4.Languages are only Hindi and English allowed.
5.Maintain dignity over there.`}
  };

  const RegisterLinks = {
    1: "https://docs.google.com/forms/d/e/1FAIpQLSegkrXIVt833tPkJZMyShSvKw6ZaJhDG-mHQRftdDNVMhaZXw/viewform?pli=1",
    2: "https://docs.google.com/forms/d/e/1FAIpQLSc5RVZw0MsW8C8mo60xuKzn0p9m-mjX0uGh1lqoex_d-QEErA/viewform",
    3: "https://docs.google.com/forms/d/e/1FAIpQLSeNK14UY_2MBewksCoZfdM1Ytzh9DS0VUEUOA2PWEV1Yp1g3w/viewform",
    4: "https://docs.google.com/forms/d/e/1FAIpQLSeXPH_WLSzd5AQAFDRris2VVrIRGm2wkcjz221jUY0COHJrtg/viewform",
    5: "https://docs.google.com/forms/d/e/1FAIpQLScGu4PhC5YMqaVjBgE5YNd2GPN5swCm7k0mzAc6KKlOzBP_zA/viewform",
    6: "https://docs.google.com/forms/d/e/1FAIpQLSchh4flwBcK7SYMvNOGt4yHVzxXT073oDbEMagxV7a0BBfUMw/viewform",
    7: "https://docs.google.com/forms/d/e/1FAIpQLScLsRvt0jrTXe5AHCTpihQEFFK3EdBr64qAzNIoK_iPc4C3yQ/viewform",
    8:"https://docs.google.com/forms/d/e/1FAIpQLSfLu76RBY7PK7nUiDCdXVqNFwDz0acO6hri-RkfPOuukw-4UA/viewform",
    9:"https://docs.google.com/forms/d/e/1FAIpQLSfmDsYfYHfBuh1TjqRUgR8AOqfGe_REbKrYAgPkgM419ZmXpg/viewform",
  };

  const handleCardClick = (cardId) => setSelectedCard(cardId);
  const handleBackClick = () => setSelectedCard(null);
  const handleRegisterClick = () => selectedCard && window.open(RegisterLinks[selectedCard], "_blank");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    
    setTimeout(() => {
      setIsVisible(true);
    }, 100); 
  }, []);

  return (
    <>
      {selectedCard === null ? (
        <>
          <div className="relative">
            <div className="absolute gap-3 top-8 flex-col left-0 w-full flex justify-center">
              <h1 className="typing-heading md:mr-20 smooch-sans uppercase text-base sm:text-2xl md:text-xl lg:text-1xl font-bold font-monospace text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500 drop-shadow-[0_0_10px_rgb(0,255,255)]">
                INFORMATION TECHNOLOGY
              </h1>
              <h1 className="typing-heading md:mr-20 smooch-sans uppercase text-base sm:text-2xl md:text-xl lg:text-1xl font-bold font-monospace text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500 drop-shadow-[0_0_10px_rgb(0,255,255)]">
                Presents
              </h1>
            </div>
            <video loop autoPlay muted className="bg-video absolute top-0 left-0 w-full h-full object-cover" src={bgVideo} type="video/mp4"></video>
            <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <div className="flex flex-col md:ml-20 md:flex-row justify-center items-center text-white h-screen relative z-10">
            <span
        className={`${
          isVisible ? 'animate-fadeIn' : 'opacity-0'
        } text-6xl kanit-semibold md:text-8xl hidden md:block uppercase drop-shadow-[0_0_5px_rgb(0,255,255)] font-bold text-center`}
      >
        Inn
      </span> <img
        src={logo}
        alt="Logo"
        className={`${
          isVisible ? 'animate-fadeIn' : 'opacity-0'
        } w-40 md:w-50 lg:w-60 h-auto drop-shadow-[0_0_10px_rgb(0,255,255)] mx-0`}
      />
              <div className="flex flex-col items-center md:items-end">
              <span
        className={`${
          isVisible ? 'animate-fadeIn' : 'opacity-0'
        } uppercase kanit-semibold md:mt-16 text-4xl md:text-8xl drop-shadow-[0_0_5px_rgb(0,255,255)]`}
      >
        <span className="md:hidden">INNO</span>Vision
      </span>
      <span
        className={`${
          isVisible ? 'animate-fadeIn' : 'opacity-0'
        } uppercase kanit-semibold justify-end text-3xl md:text-6xl font-bold drop-shadow-[0_0_5px_rgb(0,255,255)] mt-2`}
      >
        2.0
      </span></div>
            </div>
            <div className="pb-10 text-center items-center justify-center flex swipe-up-container">
              <span className="swipe-up-text flex flex-col">
                <img className="drop-shadow-[0_0_5px_rgb(0,255,255)]" src={Swipe} alt="" />
              </span>
            </div>
          </div>
          <div className="min-h-screen secondPage flex justify-center overflow-y-auto items-center relative">
            <video loop autoPlay muted className="bg-video absolute top-0 left-0 w-full overflow-y-auto h-full object-cover" src={bgVideo} type="video/mp4"></video>
            <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper">
              <SwiperSlide className="hover:drop-shadow-[0_0_10px_rgb(0,255,255)] drop-shadow-[0_0_5px_rgb(0,255,255)]" onClick={() => handleCardClick(1)}><img src={FF} alt="Card 1" /></SwiperSlide>
              <SwiperSlide className="hover:drop-shadow-[0_0_10px_rgb(0,255,255)] drop-shadow-[0_0_5px_rgb(0,255,255)]" onClick={() => handleCardClick(2)}><img src={Chess} alt="Card 2" /></SwiperSlide>
              <SwiperSlide className="hover:drop-shadow-[0_0_10px_rgb(0,255,255)] drop-shadow-[0_0_5px_rgb(0,255,255)]" onClick={() => handleCardClick(3)}><img src={KVGT} alt="" /></SwiperSlide>
              <SwiperSlide className="hover:drop-shadow-[0_0_10px_rgb(0,255,255)] drop-shadow-[0_0_5px_rgb(0,255,255)]" onClick={() => handleCardClick(4)}><img src={SG} alt="" /></SwiperSlide>
              <SwiperSlide className="hover:drop-shadow-[0_0_10px_rgb(0,255,255)] drop-shadow-[0_0_5px_rgb(0,255,255)]" onClick={() => handleCardClick(5)}><img src={BB} alt="" /></SwiperSlide>
              <SwiperSlide className="hover:drop-shadow-[0_0_10px_rgb(0,255,255)] drop-shadow-[0_0_5px_rgb(0,255,255)]" onClick={() => handleCardClick(6)}><img src={FunFusion} alt="" /></SwiperSlide>
              <SwiperSlide className="hover:drop-shadow-[0_0_10px_rgb(0,255,255)] drop-shadow-[0_0_5px_rgb(0,255,255)]" onClick={() => handleCardClick(7)}><img src={TF} alt="" /></SwiperSlide>
              <SwiperSlide className="hover:drop-shadow-[0_0_10px_rgb(0,255,255)] drop-shadow-[0_0_5px_rgb(0,255,255)]" onClick={() => handleCardClick(8)}><img src={CC} alt="" /></SwiperSlide>
              <SwiperSlide className="hover:drop-shadow-[0_0_10px_rgb(0,255,255)] drop-shadow-[0_0_5px_rgb(0,255,255)]" onClick={() => handleCardClick(9)}><img src={BondB} alt="" /></SwiperSlide>
           
            </Swiper>
          </div>
        </>
      ) : (
        <div className="h-screen flex flex-col overflow-auto justify-start items-center text-white bg-black relative">
          <button onClick={handleBackClick} className="px-4 py-2 hover:text-white hover:drop-shadow-[0_0_5px_rgb(0,255,255)] bg-cyan-500 text-black kanit-semibold rounded-md hover:bg-cyan-600 absolute top-4 left-4">Back</button>
          <div className="flex flex-col items-center justify-start w-full p-9 overflow-y-auto">
            <h1 className="text-3xl mt-9 kanit-semibold md:text-4xl font-bold mb-4 text-center">{cardDetails[selectedCard]?.title}</h1>
            <div className="w-full max-w-3xl text-left">
              <h3 className="text-xl kanit-semibold md:text-2xl font-semibold mb-4">{cardDetails[selectedCard]?.title2}</h3>
              <div className="text-base smooch-sans md:text-lg mb-8">
                {cardDetails[selectedCard]?.GenerelRules?.split("\n").map((rule, index) => rule.trim() && <p key={index} className="mb-2">{rule.trim()}</p>)}
              </div>
              <h3 className="text-xl kanit-semibold md:text-2xl font-semibold mb-4">{cardDetails[selectedCard]?.title3}</h3>
              <div className="text-base smooch-sans md:text-lg mb-8">
                {cardDetails[selectedCard]?.GameplayRules?.split("\n").map((rule, index) => rule.trim() && <p key={index} className="mb-2">{rule.trim()}</p>)}
              </div>
            </div>
            <button onClick={handleRegisterClick} className="px-6 hover:text-white hover:drop-shadow-[0_0_5px_rgb(0,255,255)] py-2 kanit-semibold text-black rounded-md hover:bg-cyan-600 bg-cyan-500">Register</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
