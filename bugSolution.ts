function printName(name: string | null): void {
  if (name) {
    console.log(name.toUpperCase());
  }
}

function printNameSafe(name: string | null): void {
  console.log((name?.toUpperCase() ?? 'N/A'));
}

// Example usage
printNameSafe('John'); // Output: JOHN
printNameSafe(null); // Output: N/A