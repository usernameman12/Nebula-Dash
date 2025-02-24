const scores = []
module.exports = {
  getLeaderboard: () => Promise.resolve(scores),
  saveScore: score => {
    scores.push(score)
    return Promise.resolve(score)
  }
}
