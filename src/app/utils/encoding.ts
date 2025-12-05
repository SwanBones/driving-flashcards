export function compressBooleans(bools: boolean[]): string {
  const binaryStr = bools.map((b) => (b ? "1" : "0")).join("");
  const decimal = parseInt(binaryStr, 2);
  return decimalToBase26(decimal);
}

export function decompressBooleans(
  base26Str: string,
  numberOfQuestions: number
): boolean[] {
  const decimal = base26ToDecimal(base26Str);
  const binaryStr = decimal.toString(2);
  const finalBinarystr =
    "a".repeat(numberOfQuestions - binaryStr.length) + binaryStr;
  return finalBinarystr.split("").map((char) => char === "1");
}

function decimalToBase26(num: number): string {
  if (num === 0) return "a";
  let str = "";
  while (num > 0) {
    const rem = num % 26;
    str = String.fromCharCode(97 + rem) + str;
    num = Math.floor(num / 26);
  }
  return str;
}

function base26ToDecimal(str: string): number {
  let num = 0;
  for (const char of str) {
    num = num * 26 + (char.charCodeAt(0) - 97);
  }
  return num;
}
