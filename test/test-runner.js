function assert(condition, message) {
    const result = document.getElementById('test-results');
    const li = document.createElement('li');
    li.textContent = condition ? `✅ ${message}` : `❌ ${message}`;
    result.appendChild(li);
  }
  
  window.onload = function () {
    try {
      assert(add('') === 0, 'Returns 0 for an empty string');
      assert(add('1') === 1, 'Returns the number itself for a single number');
      assert(add('1,2') === 3, 'Returns the sum of two numbers');
      assert(add('1,2,3,4,5') === 15, 'Handles an unknown number of numbers');
      assert(add('1\n2,3') === 6, 'Handles newlines as delimiters');
      assert(add('//;\n1;2') === 3, 'Supports custom delimiters');
      try {
        add('1,-2,3');
      } catch (e) {
        assert(e.message === 'Negative numbers not allowed: -2', 'Throws error for single negative number');
      }
      try {
        add('-1,-2,3');
      } catch (e) {
        assert(e.message === 'Negative numbers not allowed: -1, -2', 'Throws error for multiple negative numbers');
      }
    } catch (e) {
      console.error(e);
    }
  };
  
  