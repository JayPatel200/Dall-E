import FileSaver from 'file-saver';
import { surpriseMePrompts } from '../constant';

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  //checks if the prompt is same and calls the function again to get a diff prompt
  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}

//downloads image
export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}