const tournamentTally = (input) => {
  const lines = input.split("\n");

  let results = [];

  if (input) {
    lines.map((line) => {
      const params = line.split(";");
      const [team1Name, team2Name, matchResult] = params;
      results = processTeam1MatchPoints([...results], team1Name, matchResult);
      results = processTeam2MatchPoints([...results], team2Name, matchResult);
    });
  }

  const header = "Team                           | MP |  W |  D |  L |  P";
  const body = Boolean(results.length) ? mountBody(results) : "";
  const res = header + body;

  return res;
};

function processTeam1MatchPoints(results, team1Name, matchResult) {
  if (results.some((team) => team.name === team1Name)) {
    const team = results.find((team) => team.name === team1Name);

    const updatedTeam = {
      ...team,
      mp: (team.mp += 1),
      w: matchResult === "win" ? (team.w += 1) : team.w,
      d: matchResult === "draw" ? (team.d += 1) : team.d,
      l: matchResult === "loss" ? (team.l += 1) : team.l,
      p:
        matchResult === "win"
          ? (team.p += 3)
          : matchResult === "draw"
          ? (team.p += 1)
          : team.p,
    };

    results.splice(results.indexOf(team), 1, updatedTeam);
  } else {
    results.push(
      new TeamResult(
        team1Name,
        1,
        matchResult === "win" ? 1 : 0,
        matchResult === "draw" ? 1 : 0,
        matchResult === "loss" ? 1 : 0,
        matchResult === "win" ? 3 : matchResult === "draw" ? 1 : 0
      )
    );
  }

  return results;
}

function processTeam2MatchPoints(results, team2Name, matchResult) {
  if (results.some((team) => team.name === team2Name)) {
    const team = results.find((team) => team.name === team2Name);

    const updatedTeam = {
      ...team,
      mp: (team.mp += 1),
      w: matchResult === "loss" ? (team.w += 1) : team.w,
      d: matchResult === "draw" ? (team.d += 1) : team.d,
      l: matchResult === "win" ? (team.l += 1) : team.l,
      p:
        matchResult === "loss"
          ? (team.p += 3)
          : matchResult === "draw"
          ? (team.p += 1)
          : team.p,
    };

    results.splice(results.indexOf(team), 1, updatedTeam);
  } else {
    results.push(
      new TeamResult(
        team2Name,
        1,
        matchResult === "loss" ? 1 : 0,
        matchResult === "draw" ? 1 : 0,
        matchResult === "win" ? 1 : 0,
        matchResult === "loss" ? 3 : matchResult === "draw" ? 1 : 0
      )
    );
  }

  return results;
}

function mountBody(results) {
  const body = results
    .sort((a, b) => a.p < b.p ? 1 : a.p === b.p ? 0 : -1)
    .sort((a, b) => a.p === b.p ? a.name > b.name ? 1 : -1 : 0)
    .map((line) => {
      let blankString = "";

      for (let i = 0; i < 31 - line.name.length; i++) {
        blankString += " ";
      }

      const mp = line.mp >= 10 ? ` ${line.mp} ` : `  ${line.mp} `;
      const w = line.d >= 10 ? ` ${line.w} ` : `  ${line.w} `;
      const d = line.d >= 10 ? ` ${line.d} ` : `  ${line.d} `;
      const l = line.l >= 10 ? ` ${line.l} ` : `  ${line.l} `;
      const p = line.p >= 10 ? ` ${line.p}` : `  ${line.p}`;

      return `\n${line.name}${blankString}|${mp}|${w}|${d}|${l}|${p}`;
    })
    .join("");

  return body;
}

class TeamResult {
  constructor(team, mp, w, d, l, p) {
    (this.name = team),
      (this.mp = mp),
      (this.w = w),
      (this.d = d),
      (this.l = l),
      (this.p = p);
  }
}
