"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Nein",
      "Bist du dir sicher?",
      "Bitte mein Hase, meine Prinzessin, meine Psychologin",
      "Ich kauf dir auch Salami",
      "Oder ein Iced Latte oder wie das heißt",
      "Aber :(",
      "Ich werde sterben",
      "Danke bin Tod wegen deiner toxischen Weiblichkeit",
      "ok jetzt redest du mit meinem Geist",
      "komm schon chef",
      ":(",
      "Es tut mir doch so Leid, girl ich würde alles tuen",
      "Ich hoffe Aachen steigt wieder ab",
      "War Spaß entspann dich",
      "Nein :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">Zum Glück! Meine Gebete wurden erhört und eigentlich habe ich auch nichts falsch gemacht:))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Kannst du mir für mein Kurzzeitgedächtnis verzeihen?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "Nein" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
