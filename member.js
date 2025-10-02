// member.js
// Example member helper used in Copilot exercises

function skillsMember(name = 'Guest', role = 'member') {
  return {
    name: String(name),
    role: String(role),
    greet() {
      return `Hello ${this.name}, welcome to the team as a ${this.role}!`;
    }
  };
}

module.exports = { skillsMember };
