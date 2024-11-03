/* eslint-disable */

'use client'
import { useState, useEffect } from 'react';
import Millis from '@millisai/web-sdk';

export default function MillisClient() {

  const [client, setClient] = useState<any>(null);

  const [error, setError] = useState<Error | null>(null);
  const public_api_key = process.env.NEXT_PUBLIC_MILLIS_PUBLIC_KEY || "";


  useEffect(() => {
    try {
      const msClient = Millis.createClient({publicKey: public_api_key});
      setClient(msClient);

      msClient.on("onopen", () => console.log("Connected to Millis AI"));
      msClient.on("onready", () => console.log("Millis AI Ready"));
      msClient.on("onerror", (err) => {
        console.error("Millis AI Error:", err);
      });

      return () => {
        if (msClient) {
          msClient.stop();
        }
      };
    } catch (err) {
      console.error("Error initializing Millis AI client:", err);
    }
  }, []);

  const startConversation = () => {
    if (client) {
      try {
        client.start('-O9Hbb3j4bdiaT2z5slS');
      } catch (err) {
        console.error("Error starting conversation:", err);
      }
    } else {
      console.error("Client not initialized");
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <button onClick={startConversation}>Start Conversation</button>
      {/* Add other UI elements as needed */}
    </div>
  );
}