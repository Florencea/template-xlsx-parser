import * as fs from "fs";
import * as XLSX from "xlsx/xlsx.mjs";

XLSX.set_fs(fs);

interface InputRowT {
  col1: string;
  col2: string;
  col3: string;
}

interface OutputRowT {
  col1: string;
  col2: string;
  col3: string;
}

const importXlsx = (file: string): InputRowT[] => {
  const { Sheets, SheetNames } = XLSX.readFile(file);
  return XLSX.utils.sheet_to_json(Sheets[SheetNames[0]]);
};

const parse = (data: InputRowT[]): OutputRowT[] =>
  data.map((row) => {
    /**
     * do something here
     */
    return row;
  });

const exportXlsx = (result: OutputRowT[]) => {
  const sheet = XLSX.utils.json_to_sheet(result);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, sheet, "result");
  XLSX.writeFile(workbook, `data/result.xlsx`);
};

const main = () => {
  const data = importXlsx(`data/data.example.xlsx`);
  const result = parse(data);
  exportXlsx(result);
};

main();
