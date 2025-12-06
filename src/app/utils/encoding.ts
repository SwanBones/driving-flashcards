export function compressBooleans(bools: boolean[]): string {
  const binaryStr = bools
    .map((b) => (b ? "1" : "0"))
    .reverse()
    .join("");
  const decimal = BigInt("0b" + binaryStr);
  return decimalToBase26(decimal);
}

export function decompressBooleans(
  base26Str: string,
  numberOfQuestions: number
): boolean[] {
  const decimal = base26ToDecimal(base26Str);
  let binaryStr = decimal.toString(2);
  binaryStr = "0".repeat(numberOfQuestions - binaryStr.length) + binaryStr;
  return binaryStr
    .split("")
    .reverse()
    .map((c: string) => c === "1");
}

function decimalToBase26(num: any): string {
  if (num === BigInt(0)) return "a";
  let str = "";
  while (num > BigInt(0)) {
    const rem = num % BigInt(26);
    str = String.fromCharCode(97 + Number(rem)) + str;
    num = num / BigInt(26);
  }
  return str;
}

function base26ToDecimal(str: string): any {
  let num = BigInt(0);
  for (const char of str) {
    num = num * BigInt(26) + BigInt(char.charCodeAt(0) - 97);
  }
  return num;
}
