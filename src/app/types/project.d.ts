type FormModal<T> = {
    formType: "new" | "edit" | null | undefined,
    record?: T,
}

interface PageProps extends React.PropsWithChildren {
    title: string
}
