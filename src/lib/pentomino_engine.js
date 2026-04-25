/**
 * Pentomino Engine Utility
 */

const PENTOMINOES = {
   'F': [[1, 0], [2, 0], [0, 1], [1, 1], [1, 2]],
   'I': [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]],
   'L': [[0, 0], [0, 1], [0, 2], [0, 3], [1, 3]],
   'P': [[0, 0], [1, 0], [0, 1], [1, 1], [0, 2]],
   'N': [[0, 0], [0, 1], [1, 1], [1, 2], [1, 3]],
   'T': [[0, 0], [1, 0], [2, 0], [1, 1], [1, 2]],
   'U': [[0, 0], [2, 0], [0, 1], [1, 1], [2, 1]],
   'V': [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2]],
   'W': [[0, 0], [0, 1], [1, 1], [1, 2], [2, 2]],
   'X': [[1, 0], [0, 1], [1, 1], [2, 1], [1, 2]],
   'Y': [[0, 0], [0, 1], [1, 1], [0, 2], [0, 3]],
   'Z': [[0, 0], [1, 0], [1, 1], [1, 2], [2, 2]]
};

const ROWS = 8;
const COLS = 8;

function rotate(shape) {
   return shape.map(([x, y]) => [-y, x]);
}

function reflect(shape) {
   return shape.map(([x, y]) => [-x, y]);
}

function normalize(shape) {
   let minX = Math.min(...shape.map(p => p[0]));
   let minY = Math.min(...shape.map(p => p[1]));
   return shape
      .map(([x, y]) => [x - minX, y - minY])
      .sort((a, b) => a[0] - b[0] || a[1] - b[1]);
}

function getOrientations(shape) {
   const seen = new Set();
   const orientations = [];
   let current = shape;

   for (let f = 0; f < 2; f++) {
      for (let r = 0; r < 4; r++) {
         const normalized = normalize(current);
         const key = JSON.stringify(normalized);
         if (!seen.has(key)) {
            seen.add(key);
            orientations.push(normalized);
         }
         current = rotate(current);
      }
      current = reflect(current);
   }
   return orientations;
}

const pieceOrientations = {};
for (const [id, shape] of Object.entries(PENTOMINOES)) {
   pieceOrientations[id] = getOrientations(shape);
}

export function solvePentomino(blockedCells, forcedCells = []) {
   const grid = Array.from({ length: ROWS }, () => Array(COLS).fill(null));

   for (const [r, c] of blockedCells) {
      grid[r][c] = 'X_BLOCK';
   }

   const forcedGrid = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
   const forcedCounts = {};
   const pieces = Object.keys(PENTOMINOES);
   for (const id of pieces) forcedCounts[id] = 0;
   
   for (const {r, c, id} of forcedCells) {
      forcedGrid[r][c] = id;
      forcedCounts[id]++;
   }

   const usedPieces = new Set();

   function isSafe(r, c, shape, id) {
      let coveredForced = 0;
      for (const [dx, dy] of shape) {
         const nr = r + dy;
         const nc = c + dx;
         if (nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS || grid[nr][nc] !== null) {
            return false;
         }
         if (forcedGrid[nr][nc] !== null) {
            if (forcedGrid[nr][nc] !== id) {
               return false;
            }
            coveredForced++;
         }
      }
      return coveredForced === forcedCounts[id];
   }

   function place(r, c, shape, id) {
      for (const [dx, dy] of shape) {
         grid[r + dy][c + dx] = id;
      }
   }

   function remove(r, c, shape) {
      for (const [dx, dy] of shape) {
         grid[r + dy][c + dx] = null;
      }
   }

   function checkConnectivity() {
      const visited = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
      for (let r = 0; r < ROWS; r++) {
         for (let c = 0; c < COLS; c++) {
            if (grid[r][c] === null && !visited[r][c]) {
               let size = 0;
               const stack = [[r, c]];
               visited[r][c] = true;
               while (stack.length > 0) {
                  const [currR, currC] = stack.pop();
                  size++;
                  const neighbors = [[currR + 1, currC], [currR - 1, currC], [currR, currC + 1], [currR, currC - 1]];
                  for (const [nr, nc] of neighbors) {
                     if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && grid[nr][nc] === null && !visited[nr][nc]) {
                        visited[nr][nc] = true;
                        stack.push([nr, nc]);
                     }
                  }
               }
               if (size % 5 !== 0) return false;
            }
         }
      }
      return true;
   }

   function backtrack() {
      if (usedPieces.size === pieces.length) return true;

      let r = -1, c = -1;
      for (let i = 0; i < ROWS && r === -1; i++) {
         for (let j = 0; j < COLS; j++) {
            if (grid[i][j] === null) {
               r = i;
               c = j;
               break;
            }
         }
      }

      if (r === -1) return true;

      for (const id of pieces) {
         if (usedPieces.has(id)) continue;
         for (const orientation of pieceOrientations[id]) {
            for (let i = 0; i < orientation.length; i++) {
               const [ox, oy] = orientation[i];
               const startR = r - oy;
               const startC = c - ox;
               if (isSafe(startR, startC, orientation, id)) {
                  place(startR, startC, orientation, id);
                  usedPieces.add(id);
                  if (checkConnectivity()) {
                     if (backtrack()) return true;
                  }
                  usedPieces.delete(id);
                  remove(startR, startC, orientation);
               }
            }
         }
      }
      return false;
   }

   if (backtrack()) {
      return grid;
   }
   return null;
}

export function countSolutions(blockedCells, forcedCells = []) {
   const grid = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
   const forcedGrid = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
   const forcedCounts = {};
   const pieces = Object.keys(PENTOMINOES);
   for (const id of pieces) forcedCounts[id] = 0;

   for (const [r, c] of blockedCells) grid[r][c] = 'X_BLOCK';
   for (const {r, c, id} of forcedCells) {
      forcedGrid[r][c] = id;
      forcedCounts[id]++;
   }

   const usedPieces = new Set();
   let count = 0;

   function isSafe(r, c, shape, id) {
      let coveredForced = 0;
      for (const [dx, dy] of shape) {
         const nr = r + dy;
         const nc = c + dx;
         if (nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS || grid[nr][nc] !== null) return false;
         if (forcedGrid[nr][nc] !== null) {
            if (forcedGrid[nr][nc] !== id) return false;
            coveredForced++;
         }
      }
      return coveredForced === forcedCounts[id];
   }

   function place(r, c, shape, id) {
      for (const [dx, dy] of shape) grid[r + dy][c + dx] = id;
   }

   function remove(r, c, shape) {
      for (const [dx, dy] of shape) grid[r + dy][c + dx] = null;
   }

   function checkConnectivity() {
      const visited = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
      for (let r = 0; r < ROWS; r++) {
         for (let c = 0; c < COLS; c++) {
            if (grid[r][c] === null && !visited[r][c]) {
               let size = 0;
               const stack = [[r, c]];
               visited[r][c] = true;
               while (stack.length > 0) {
                  const [currR, currC] = stack.pop();
                  size++;
                  const neighbors = [[currR + 1, currC], [currR - 1, currC], [currR, currC + 1], [currR, currC - 1]];
                  for (const [nr, nc] of neighbors) {
                     if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && grid[nr][nc] === null && !visited[nr][nc]) {
                        visited[nr][nc] = true;
                        stack.push([nr, nc]);
                     }
                  }
               }
               if (size % 5 !== 0) return false;
            }
         }
      }
      return true;
   }

   function backtrack() {
      if (usedPieces.size === pieces.length) {
         count++;
         return;
      }

      let r = -1, c = -1;
      for (let i = 0; i < ROWS && r === -1; i++) {
         for (let j = 0; j < COLS; j++) {
            if (grid[i][j] === null) {
               r = i;
               c = j;
               break;
            }
         }
      }

      if (r === -1) return;

      for (const id of pieces) {
         if (usedPieces.has(id)) continue;
         for (const orientation of pieceOrientations[id]) {
            for (let i = 0; i < orientation.length; i++) {
               const [ox, oy] = orientation[i];
               const startR = r - oy;
               const startC = c - ox;
               if (isSafe(startR, startC, orientation, id)) {
                  place(startR, startC, orientation, id);
                  usedPieces.add(id);
                  if (checkConnectivity()) {
                     backtrack();
                  }
                  usedPieces.delete(id);
                  remove(startR, startC, orientation);
               }
            }
         }
      }
   }

   backtrack();
   return count;
}
