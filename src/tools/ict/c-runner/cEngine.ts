export interface TraceStep {
  stepIndex: number;
  lineNumber: number;
  lineContent: string;
  variables: Record<string, number | string | boolean>;
  changedVar?: string;
  output: string;
  note?: string;
}

export interface CProgramPreset {
  id: string;
  titleBn: string;
  titleEn: string;
  descriptionBn: string;
  descriptionEn: string;
  code: string;
  defaultInput?: string;
  generateTrace: (input?: string) => TraceStep[];
}

export const C_PRESETS: CProgramPreset[] = [
  {
    id: 'fibonacci',
    titleBn: 'ফিবোনাচ্চি ধারা নির্ণয় (Fibonacci Series)',
    titleEn: 'Fibonacci Series Generator',
    descriptionBn: 'প্রথম n সংখ্যক ফিবোনাচ্চি পদের মান লুপের মাধ্যমে ধাপে ধাপে নির্ণয় ও মেমরি পরিবর্তন।',
    descriptionEn: 'Computes first n Fibonacci terms using iteration, tracing RAM registers at each step.',
    defaultInput: '6',
    code: `#include <stdio.h>

int main() {
    int n = 6;
    int a = 0, b = 1, next, i;
    
    printf("Fibonacci Series:\\n");
    for (i = 1; i <= n; i++) {
        printf("%d ", a);
        next = a + b;
        a = b;
        b = next;
    }
    return 0;
}`,
    generateTrace: (inputStr = '6') => {
      const n = parseInt(inputStr, 10) || 6;
      const steps: TraceStep[] = [];
      let a = 0, b = 1, next = 0, i = 1;
      let output = 'Fibonacci Series:\n';

      steps.push({
        stepIndex: 0,
        lineNumber: 4,
        lineContent: `int n = ${n};`,
        variables: { n },
        changedVar: 'n',
        output: '',
        note: `Initializes n = ${n}`,
      });

      steps.push({
        stepIndex: 1,
        lineNumber: 5,
        lineContent: 'int a = 0, b = 1, next, i;',
        variables: { n, a: 0, b: 1, next: 0, i: 0 },
        changedVar: 'b',
        output: '',
        note: 'Initializes a=0, b=1',
      });

      steps.push({
        stepIndex: 2,
        lineNumber: 7,
        lineContent: 'printf("Fibonacci Series:\\n");',
        variables: { n, a, b, next, i: 0 },
        output,
        note: 'Prints header string',
      });

      for (i = 1; i <= n; i++) {
        steps.push({
          stepIndex: steps.length,
          lineNumber: 8,
          lineContent: `for (i = ${i}; i <= ${n}; i++)`,
          variables: { n, a, b, next, i },
          changedVar: 'i',
          output,
          note: `Loop condition check: ${i} <= ${n} (TRUE)`,
        });

        output += `${a} `;
        steps.push({
          stepIndex: steps.length,
          lineNumber: 9,
          lineContent: `printf("%d ", ${a});`,
          variables: { n, a, b, next, i },
          output,
          note: `Prints current term: ${a}`,
        });

        next = a + b;
        steps.push({
          stepIndex: steps.length,
          lineNumber: 10,
          lineContent: `next = ${a} + ${b}; // next = ${next}`,
          variables: { n, a, b, next, i },
          changedVar: 'next',
          output,
          note: `Calculates next = ${a} + ${b} = ${next}`,
        });

        a = b;
        steps.push({
          stepIndex: steps.length,
          lineNumber: 11,
          lineContent: `a = ${b};`,
          variables: { n, a, b, next, i },
          changedVar: 'a',
          output,
          note: `Updates a to ${b}`,
        });

        b = next;
        steps.push({
          stepIndex: steps.length,
          lineNumber: 12,
          lineContent: `b = ${next};`,
          variables: { n, a, b, next, i },
          changedVar: 'b',
          output,
          note: `Updates b to ${next}`,
        });
      }

      steps.push({
        stepIndex: steps.length,
        lineNumber: 14,
        lineContent: 'return 0;',
        variables: { n, a, b, next, i: n + 1 },
        output,
        note: 'Loop terminates (i > n). Program successfully exits.',
      });

      return steps;
    },
  },
  {
    id: 'prime-check',
    titleBn: 'মৌলিক সংখ্যা যাচাই (Prime Number Check)',
    titleEn: 'Prime Number Checker',
    descriptionBn: 'একটি সংখ্যা মৌলিক কি না তা লুপ ও শর্তযুক্ত কাঠামোর মাধ্যমে যাচাই।',
    descriptionEn: 'Determines whether an integer n is prime by testing factors up to n/2.',
    defaultInput: '7',
    code: `#include <stdio.h>

int main() {
    int n = 7;
    int i, isPrime = 1;

    for (i = 2; i <= n / 2; i++) {
        if (n % i == 0) {
            isPrime = 0;
            break;
        }
    }

    if (isPrime == 1 && n > 1)
        printf("%d is a Prime Number.\\n", n);
    else
        printf("%d is NOT a Prime Number.\\n", n);

    return 0;
}`,
    generateTrace: (inputStr = '7') => {
      const n = parseInt(inputStr, 10) || 7;
      const steps: TraceStep[] = [];
      let isPrime = 1;
      let output = '';

      steps.push({
        stepIndex: 0,
        lineNumber: 4,
        lineContent: `int n = ${n};`,
        variables: { n, isPrime: 1, i: 0 },
        changedVar: 'n',
        output: '',
        note: `Stores input number n = ${n}`,
      });

      const limit = Math.floor(n / 2);
      for (let i = 2; i <= limit; i++) {
        steps.push({
          stepIndex: steps.length,
          lineNumber: 7,
          lineContent: `for (i = ${i}; i <= ${limit}; i++)`,
          variables: { n, isPrime, i },
          changedVar: 'i',
          output,
          note: `Testing divisor i = ${i}`,
        });

        if (n % i === 0) {
          isPrime = 0;
          steps.push({
            stepIndex: steps.length,
            lineNumber: 9,
            lineContent: `isPrime = 0; // ${n} divisible by ${i}`,
            variables: { n, isPrime: 0, i },
            changedVar: 'isPrime',
            output,
            note: `${n} is divisible by ${i}! Not prime.`,
          });
          break;
        }
      }

      const resultMsg =
        isPrime === 1 && n > 1 ? `${n} is a Prime Number.\n` : `${n} is NOT a Prime Number.\n`;
      output = resultMsg;

      steps.push({
        stepIndex: steps.length,
        lineNumber: 14,
        lineContent: `if (isPrime == ${isPrime}) printf(...);`,
        variables: { n, isPrime, i: limit },
        output,
        note: `Evaluation complete: Output generated.`,
      });

      return steps;
    },
  },
  {
    id: 'factorial',
    titleBn: 'ফ্যাক্টোরিয়াল নির্ণয় (Factorial of N)',
    titleEn: 'Factorial Calculator (n!)',
    descriptionBn: 'লুপের পুনরাবৃত্তির মাধ্যমে n! এর মান গণনা ও রেজিস্টার গুণফল পর্যবেক্ষণ।',
    descriptionEn: 'Calculates factorial n! through loop multiplication, tracking accumulator product.',
    defaultInput: '5',
    code: `#include <stdio.h>

int main() {
    int n = 5;
    int i;
    long long fact = 1;

    for (i = 1; i <= n; i++) {
        fact = fact * i;
    }

    printf("Factorial of %d = %lld\\n", n, fact);
    return 0;
}`,
    generateTrace: (inputStr = '5') => {
      const n = Math.min(10, parseInt(inputStr, 10) || 5);
      const steps: TraceStep[] = [];
      let fact = 1;
      let output = '';

      steps.push({
        stepIndex: 0,
        lineNumber: 6,
        lineContent: 'long long fact = 1;',
        variables: { n, fact: 1, i: 0 },
        changedVar: 'fact',
        output: '',
        note: 'Initializes accumulator fact = 1',
      });

      for (let i = 1; i <= n; i++) {
        steps.push({
          stepIndex: steps.length,
          lineNumber: 8,
          lineContent: `for (i = ${i}; i <= ${n}; i++)`,
          variables: { n, fact, i },
          changedVar: 'i',
          output,
          note: `Loop counter i = ${i}`,
        });

        fact = fact * i;
        steps.push({
          stepIndex: steps.length,
          lineNumber: 9,
          lineContent: `fact = fact * ${i}; // fact = ${fact}`,
          variables: { n, fact, i },
          changedVar: 'fact',
          output,
          note: `Accumulates: fact = ${fact}`,
        });
      }

      output = `Factorial of ${n} = ${fact}\n`;
      steps.push({
        stepIndex: steps.length,
        lineNumber: 12,
        lineContent: `printf("Factorial of %d = %lld\\n", n, fact);`,
        variables: { n, fact, i: n + 1 },
        output,
        note: `Final print: ${output.trim()}`,
      });

      return steps;
    },
  },
];
