import React, { useState } from "react";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

const ExportToExcel = ({ data, fileName, className = "" }) => {
  const [isLoading, setIsLoading] = useState(false);

  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToCSV = (data, fileName) => {
    setIsLoading(true);
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const toBeData = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(toBeData, fileName + fileExtension);
    setIsLoading(false);
  };

  return (
    <button
      className={className}
      disabled={isLoading}
      onClick={(e) => exportToCSV(data, fileName)}
    >
      Download Data
    </button>
  );
};

export default ExportToExcel;
