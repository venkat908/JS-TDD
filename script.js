document.getElementById('calculate').addEventListener('click', () => {
    const input = document.getElementById('input').value;
    const resultElement = document.getElementById('result');
  
    try {
      const result = add(input);
      resultElement.textContent = `Result: ${result}`;
    } catch (error) {
      resultElement.textContent = `Error: ${error.message}`;
    }
  });
  
  function add(numbers) {
    if (!numbers) return 0;
  
    let delimiter = /,|\n/; // Default delimiters: comma or newline
    const customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);
  
    if (customDelimiterMatch) {
      delimiter = new RegExp(customDelimiterMatch[1]);
      numbers = numbers.replace(/^\/\/(.+)\n/, '');
    }
  
    const numArray = numbers.split(delimiter).map((num) => parseInt(num, 10));
  
    const negativeNumbers = numArray.filter((num) => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`);
    }
  
    return numArray.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
  }
  
  