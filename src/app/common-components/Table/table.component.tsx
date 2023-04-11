import { DataTable, DataTableColumn} from "mantine-datatable";
import '../../styles/_table.scss';

interface TableProps<T> extends React.PropsWithChildren {
    records: T[] | undefined,
    columns:  DataTableColumn<T>[],
    fetching?: boolean | false,
}

export function Table<T>({records, columns, fetching}: TableProps<T>){

return(
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
)
}

export default Table;