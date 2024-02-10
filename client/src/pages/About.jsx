import React from "react";
import { GiTabletopPlayers } from "react-icons/gi";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-purple-500 text-white">
      <div className="flex items-center gap-2 mb-8">
        <GiTabletopPlayers className="text-3xl text-orange-500" />
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          About GameNightScout
        </h1>
        <GiTabletopPlayers className="text-3xl text-orange-500" />
      </div>
      <p className="text-lg md:text-xl mb-8 text-center max-w-lg">
        GameNightScout is your go-to platform for discovering and participating
        in tabletop events happening in your area. Whether you're a board game
        enthusiast, a role-playing game aficionado, or a fan of card games,
        GameNightScout connects you with like-minded individuals and exciting
        gaming opportunities.
      </p>
      <p className="text-lg md:text-xl mb-8 text-center max-w-lg">
        With GameNightScout, you can easily search for events based on your
        interests. Create your own event and invite others to join, or join
        events hosted by fellow tabletop enthusiasts. From casual game nights to
        competitive tournaments, GameNightScout helps you find the perfect
        gaming experience tailored to your preferences.
      </p>
      <p className="text-sm text-center">
        Having problems? Got any suggestions? Contact admin:{" "}
        <a href="mailto:brkuvezdic@student.unip.hr" className="underline">
          brkuvezdic@student.unip.hr
        </a>
      </p>
    </div>
  );
}
