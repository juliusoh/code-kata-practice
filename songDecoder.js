const songDecoder = (song) => {
  return song.split("WUB").filter(item => item !== "").join(" ");
};

console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));
// we are the chmapions my friend
