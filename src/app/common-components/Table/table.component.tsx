import { DataTable, DataTableColumn} from "mantine-datatable";
import '../../styles/_table.scss';
import React from "react";

interface TableProps<T> extends React.PropsWithChildren {
    records: T[] | undefined,
    columns:  DataTableColumn<T>[],
    fetching?: boolean | false,
    header?: React.ReactNode 
}

export function Table<T>({records, columns, fetching, header}: TableProps<T>){

return(
    <div className="table-template">
      <div className="table-header">
        {header}
      </div>
    <DataTable 
    withBorder
    withColumnBorders
    fetching={fetching}
    records={records}
    columns={columns}
    style={{
        borderRadius: 5,
        borderWidth: "1px"
      }}
    />
    </div>
)
}

export default Table;