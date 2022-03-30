export function decodedValue(colors: any) {
  const ValorCores: Record<string, number> = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  };
  let ValorFinal: number[] = [];
  for (let i = 0; i < 2; i++) {
    ValorFinal.push(ValorCores[colors[i].toString().toLowerCase()]);
  }
  return parseInt(ValorFinal.join(""));
}
decodedValue(["Violet", "Brown", "yellow"]);
