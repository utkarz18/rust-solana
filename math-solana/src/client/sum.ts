import * as borsh from 'borsh';
import * as math from './math';



class MathSolanaSum {
    sum = 0;
    constructor(fields: { sum: number } | undefined = undefined) {
        if (fields) {
            this.sum = fields.sum;
        }
    }
}

// const MathSolanaSumSchema = new Map([
//     [MathSolanaSum, { kind: 'struct', fields: [['sum', 'u32']] }],
// ]);

const MathSolanaSumSchema = { struct: { sum: 'u32' } };

const MATH_SOLANA_SUM_SIZE = borsh.serialize(
    MathSolanaSumSchema,
    new MathSolanaSum(),
).length;



async function main() {
    await math.example('sum', MATH_SOLANA_SUM_SIZE);
}


main().then(
    () => process.exit(),
    err => {
        console.error(err);
        process.exit(-1);
    },
);

//DGiSDVP4X4v5sV28nx8xdu3avE8YKhBgwTMCfVs88yKP