import { readFile, utils, writeFile } from "xlsx";

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
  const { Sheets, SheetNames } = readFile(file);
  return utils.sheet_to_json(Sheets[SheetNames[0]]);
};

const parse = (data: InputRowT[]): OutputRowT[] =>
  data.map((row) => {
    /**
     * do something here
     */
    return row;
  });

const exportXlsx = (result: OutputRowT[]) => {
  const sheet = utils.json_to_sheet(result);
  const workbook = utils.book_new();
  utils.book_append_sheet(workbook, sheet, "result");
  writeFile(workbook, `data/result.xlsx`);
};

const main = () => {
  const data = importXlsx(`data/data.example.xlsx`);
  const result = parse(data);
  exportXlsx(result);
};

main();
