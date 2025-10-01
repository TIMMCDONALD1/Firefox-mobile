// member.js
// Sample file for Step 3: Copilot hub suggestion exercise

function skillsMember(name, role) {
  // Return a simple member object with a greeting
  return {
    name: String(name),
    role: String(role || 'member'),
    greet() {
      return `Hello ${this.name}, welcome to the team as a ${this.role}!`;
    }
  };
}

module.exports = { skillsMember };
