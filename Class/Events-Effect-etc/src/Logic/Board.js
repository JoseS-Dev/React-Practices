import { Winners } from "../Constants";
export const WinnerTable = (boardCheck) => {
    for (const combo of Winners){
      const [a, b, c] = combo;
      if (boardCheck[a] && boardCheck[a] === boardCheck[b] && boardCheck[a] === boardCheck[c]){
        return boardCheck[a];
      }
    }
    return null;
}