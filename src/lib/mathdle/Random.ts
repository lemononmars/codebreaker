/**
 * Mersenne Twister implementation for seed-based daily Mathdle puzzles
 */
export default class Random {
	static N = 624;
	static M = 397;
	static MATRIX_A = 0x9908b0df;
	static UPPER_MASK = 0x80000000;
	static LOWER_MASK = 0x7fffffff;

	mt = new Array(Random.N);
	mti = Random.N + 1;

	constructor(seed: number = null) {
		if (seed == null) {
			seed = new Date().getTime();
		}
		this.init_genrand(seed);
	}

	private init_genrand(s: number) {
		this.mt[0] = s >>> 0;
		for (this.mti = 1; this.mti < Random.N; this.mti++) {
			var s = this.mt[this.mti - 1] ^ (this.mt[this.mti - 1] >>> 30);
			this.mt[this.mti] =
				((((s & 0xffff0000) >>> 16) * 1812433253) << 16) + (s & 0x0000ffff) * 1812433253 + this.mti;
			this.mt[this.mti] >>>= 0;
		}
	}

	private _nextInt32(): number {
		var y: number;
		var mag01 = new Array(0x0, Random.MATRIX_A);

		if (this.mti >= Random.N) {
			var kk: number;

			if (this.mti == Random.N + 1) this.init_genrand(5489);

			for (kk = 0; kk < Random.N - Random.M; kk++) {
				y = (this.mt[kk] & Random.UPPER_MASK) | (this.mt[kk + 1] & Random.LOWER_MASK);
				this.mt[kk] = this.mt[kk + Random.M] ^ (y >>> 1) ^ mag01[y & 0x1];
			}
			for (; kk < Random.N - 1; kk++) {
				y = (this.mt[kk] & Random.UPPER_MASK) | (this.mt[kk + 1] & Random.LOWER_MASK);
				this.mt[kk] = this.mt[kk + (Random.M - Random.N)] ^ (y >>> 1) ^ mag01[y & 0x1];
			}
			y = (this.mt[Random.N - 1] & Random.UPPER_MASK) | (this.mt[0] & Random.LOWER_MASK);
			this.mt[Random.N - 1] = this.mt[Random.M - 1] ^ (y >>> 1) ^ mag01[y & 0x1];

			this.mti = 0;
		}

		y = this.mt[this.mti++];

		y ^= y >>> 11;
		y ^= (y << 7) & 0x9d2c5680;
		y ^= (y << 15) & 0xefc60000;
		y ^= y >>> 18;

		return y >>> 0;
	}

	nextInt32(range: [number, number] = null): number {
		var result = this._nextInt32();
		if (range == null) {
			return result;
		}
		return (result % (range[1] - range[0])) + range[0];
	}
}
