import * as borsh from 'borsh';
import * as math from './math';



class MathSolanaSquare {
    square = 1;
    constructor(fields: {square: number} | undefined = undefined) {
      if (fields) {
        this.square = fields.square;
      }
    }
  }
  
  const MathSolanaSquareSchema = new Map([
    [MathSolanaSquare, {kind: 'struct', fields: [['square', 'u32']]}],
  ]) as unknown as borsh.Schema;;
  
  const MATH_SOLANA_SQUARE_SIZE = borsh.serialize(
    MathSolanaSquareSchema,
    new MathSolanaSquare(),
  ).length;
  
  
  
  async function main() {
    await math.example('square', MATH_SOLANA_SQUARE_SIZE);
  }
  
  main().then(
      () => process.exit(),
      err => {
        console.error(err);
        process.exit(-1);
      },
    );