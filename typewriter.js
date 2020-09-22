let delay = 500;

const sentence = "bill";

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay)
  delay += 500;
}
setTimeout(() => {
  console.log()
}, delay);
