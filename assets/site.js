"use strict";

// Media stays on the publisher's service and loads only after a visitor asks.
const loadPodcast = document.getElementById("load-podcast");
const playerContainer = document.getElementById("podcast-player");
const playerStatus = document.getElementById("podcast-status");

if (loadPodcast && playerContainer && playerStatus) {
  loadPodcast.hidden = false;
  loadPodcast.addEventListener("click", () => {
    const frame = document.createElement("iframe");
    frame.title = "AI Today: AI as Your New Team Member, with Michael Joyce";
    frame.src = "https://www.buzzsprout.com/2502664/episodes/19025773-ai-as-your-new-team-member-scaling-with-confidence-with-michael-joyce?client_source=small_player&iframe=true";
    frame.allow = "encrypted-media";
    frame.referrerPolicy = "strict-origin-when-cross-origin";
    frame.addEventListener("load", () => {
      playerStatus.textContent = "Audio player loaded. If it is unavailable, use the PMI episode link below.";
    }, { once: true });
    frame.addEventListener("error", () => {
      playerStatus.textContent = "The audio player could not load. Use the PMI episode link below.";
    }, { once: true });
    playerStatus.textContent = "Loading the official audio player. The PMI episode link below is always available.";
    loadPodcast.disabled = true;
    loadPodcast.textContent = "Audio player requested";
    playerContainer.append(frame);
    loadPodcast.remove();
    frame.focus();
  }, { once: true });
}
