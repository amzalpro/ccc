/**
 * Main entry point for the application
 */

function main() {
  console.log('Hello from ccc!');
}

// Export for testing
module.exports = { main };

// Run if this file is executed directly
if (require.main === module) {
  main();
}