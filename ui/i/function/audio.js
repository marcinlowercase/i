// audio.js
const start_audio = (audio_id) => {
  const audio_element = id(audio_id);

  if (audio_element && audio_element.tagName.toLowerCase() === "audio") {
    console.log("play audio");
    audio_element.play().catch((error) => {
      console.error("Error playing audio:", error);
    });
  } else {
    console.error(
      `Audio element with ID "${audio_id}" not found or is not an <audio> tag.`,
    );
  }
};
