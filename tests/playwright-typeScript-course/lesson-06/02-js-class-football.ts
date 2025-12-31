class Team {
  teamName: string = "";
  players: string[] = [];

  addPlayer(player: string): void {
    this.players.push(player);
  }

  listPlayers() {
    console.log(this.players);
  }
}

const team = new Team();
team.addPlayer("Henry");
team.addPlayer("Pires");
team.addPlayer("Bergkamp");
team.listPlayers();
