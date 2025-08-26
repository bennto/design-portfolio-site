// src/lib/stores/lightboxStore.js
import { writable } from "svelte/store";

export const activeImage = writable(null);

export function openLightbox(img) {
  activeImage.set(img);
}

export function closeLightbox() {
  activeImage.set(null);
}
