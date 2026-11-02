/** Escape user text shared by SVG and Excel SpreadsheetML exports. */
function xml(value: string): string {
	return value
		.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, '')
		.replace(
			/[&<>"']/g,
			(c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }[c]!)
		);
}

export function wordSearchSvg(
	grid: string[][],
	words: string[],
	title: string,
	author: string,
	cellSize = 44
): string {
	const width = Math.max(grid[0].length * cellSize + 40, 320);
	const top = 90;
	const bottom = top + grid.length * cellSize;
	const height = bottom + 50 + words.length * 30;
	const left = (width - grid[0].length * cellSize) / 2;
	const letters = grid
		.map((row, r) =>
			row
				.map(
					(cell, c) =>
						`<text x="${left + (c + 0.5) * cellSize}" y="${
							top + (r + 0.5) * cellSize
						}" dominant-baseline="middle" text-anchor="middle" font-size="${
							(cellSize * 19.2) / 44
						}">${xml(cell)}</text>`
				)
				.join('')
		)
		.join('');
	return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
<rect width="100%" height="100%" fill="white"/>
<g fill="black" font-family="Tahoma, sans-serif">
<text x="20" y="30" font-size="24">${xml(title || 'Word Search')}</text>
<text x="20" y="60" font-size="16">${xml(author)}</text>
${letters}
${words
	.map((word, i) => `<text x="20" y="${bottom + 35 + i * 30}" font-size="18">${xml(word)}</text>`)
	.join('')}
</g></svg>`;
}

/** Native Excel 2003 XML format; explicit strings keep puzzle text out of formulas. */
export function wordSearchExcel(
	grid: string[][],
	words: string[],
	title: string,
	author: string
): string {
	const cell = (text: string, style = '') =>
		`<Cell${style ? ` ss:StyleID="${style}"` : ''}><Data ss:Type="String">${xml(
			text
		)}</Data></Cell>`;
	const row = (values: string[], style = '') =>
		`<Row ss:AutoFitHeight="0" ss:Height="33">${values.map((v) => cell(v, style)).join('')}</Row>`;
	return `<?xml version="1.0" encoding="UTF-8"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
<Styles><Style ss:ID="Default" ss:Name="Normal"><Font ss:FontName="Tahoma" ss:Size="14"/></Style><Style ss:ID="Grid"><Alignment ss:Horizontal="Center" ss:Vertical="Center"/><Borders><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/></Borders></Style></Styles>
<Worksheet ss:Name="Puzzle"><Table><Column ss:Width="33" ss:Span="${grid[0].length - 1}"/>${grid
		.map((r) => row(r, 'Grid'))
		.join('')}</Table></Worksheet>
<Worksheet ss:Name="Words"><Table><Column ss:Width="300"/>${row([title || 'Word Search'])}${row([
		author
	])}${words.map((w) => row([w])).join('')}</Table></Worksheet>
</Workbook>`;
}
